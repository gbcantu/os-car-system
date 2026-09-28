import { OSFormSchema } from "@/services/validation.service";
import { OSTotals } from "@/types/os.types";
import { formatCurrency, parseCurrency } from "@/utils/formatters";
import logo from "@/assets/logo-oscar.png";
import {
  PrintWrapper,
  Header,
  LogoSection,
  LogoImg,
  CompanyName,
  CompanyTagline,
  CompanyInfo,
  OsTitle,
  MetaRow,
  MetaBox,
  MetaLabel,
  MetaValue,
  Section,
  SectionTitle,
  InfoGrid,
  InfoItem,
  InfoItemWide,
  InfoLabel,
  InfoValue,
  Table,
  TypeBadgeServico,
  TypeBadgeProduto,
  TotalsSection,
  TotalBox,
  TotalBoxLabel,
  TotalBoxValue,
  Observations,
  Footer,
} from './PrintableOS.styles';

interface PrintableOSProps {
  data: OSFormSchema;
  totals: OSTotals;
}

export function PrintableOS({ data, totals }: PrintableOSProps) {

  const renderOptionalInfo = (
    label: string,
    value?: string,
    wide = false
  ) => {
    if (!value) return null;

    const InfoItemComponent = wide ? InfoItemWide : InfoItem;

    return (
      <InfoItemComponent>
        <InfoLabel>{label}</InfoLabel>
        <InfoValue>{value}</InfoValue>
      </InfoItemComponent>
    );
  };

  return (
    <PrintWrapper id="printable-os">

      <Header>
        <LogoSection>
          <LogoImg src={logo} alt="OS Car System" crossOrigin="anonymous" />
          <div>
            <CompanyName>OS Car System</CompanyName>
            <CompanyTagline>Serviços Automotivos</CompanyTagline>
          </div>
        </LogoSection>

        <CompanyInfo>
          <div>Ordem de Serviço</div>
        </CompanyInfo>
      </Header>

      <OsTitle>Ordem de Serviço</OsTitle>

      <MetaRow>
        <MetaBox>
          <MetaLabel>Data / Hora</MetaLabel>
          <MetaValue>{data.dateTime}</MetaValue>
        </MetaBox>

        {data.paymentMethod && (
          <MetaBox>
            <MetaLabel>Forma de Pagamento</MetaLabel>
            <MetaValue>{data.paymentMethod}</MetaValue>
          </MetaBox>
        )}
      </MetaRow>

      <Section>
        <SectionTitle>Dados do Cliente</SectionTitle>
        <InfoGrid>
          <InfoItemWide>
            <InfoLabel>Nome</InfoLabel>
            <InfoValue>{data.clientName}</InfoValue>
          </InfoItemWide>

          {renderOptionalInfo("CPF / CNPJ", data.cpfCnpj, true)}
          {renderOptionalInfo("Telefone", data.phone, true)}
        </InfoGrid>
      </Section>

      <Section>
        <SectionTitle>Dados do Veículo</SectionTitle>
        <InfoGrid>
          <InfoItem>
            <InfoLabel>Placa</InfoLabel>
            <InfoValue>{data.licensePlate}</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>Veículo</InfoLabel>
            <InfoValue>{data.vehicle}</InfoValue>
          </InfoItem>
          {renderOptionalInfo("Cor", data.color)}
          {renderOptionalInfo("Marca", data.brand)}
          {renderOptionalInfo("Ano", data.year)}
          <InfoItem>
            <InfoLabel>Quilometragem</InfoLabel>
            <InfoValue>{data.mileage} km</InfoValue>
          </InfoItem>
        </InfoGrid>
      </Section>

      <Section>
        <SectionTitle>Itens da Ordem de Serviço</SectionTitle>
        <Table>
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Descrição</th>
              <th className="right">Qtd</th>
              <th className="right">Unit.</th>
              <th className="right">Total</th>
            </tr>
          </thead>
          <tbody>
            {data.items.map((item, i) => (
              <tr key={i}>
                <td>
                  {item.type === 'Serviço' ? (
                    <TypeBadgeServico>{item.type}</TypeBadgeServico>
                  ) : (
                    <TypeBadgeProduto>{item.type}</TypeBadgeProduto>
                  )}
                </td>
                <td>{item.description}</td>
                <td className="right">{item.quantity}</td>
                <td className="right">{formatCurrency(item.unitPrice)}</td>
                <td className="right">{formatCurrency(item.quantity * item.unitPrice)}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <TotalsSection style={{ gridTemplateColumns: data.totalWithDiscount ? "1fr 1fr" : "1fr" }}>
          <TotalBox>
            <TotalBoxLabel>Valor Total</TotalBoxLabel>
            <TotalBoxValue>{formatCurrency(totals.grandTotal)}</TotalBoxValue>
          </TotalBox>
          {data.totalWithDiscount && (
            <TotalBox>
              <TotalBoxLabel>Valor com Desconto</TotalBoxLabel>
              <TotalBoxValue>{formatCurrency(parseCurrency(data.totalWithDiscount))}</TotalBoxValue>
            </TotalBox>
          )}
        </TotalsSection>
      </Section>

      {data.observations && (
        <Section>
          <SectionTitle>Observações</SectionTitle>
          <Observations>{data.observations}</Observations>
        </Section>
      )}
      <Footer>OS Car System — Ordem de Serviço Automotiva - Desenvolvido por Belagio Soluções</Footer>
    </PrintWrapper>
  );
}
