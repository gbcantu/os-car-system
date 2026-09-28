import { useRef, useState } from "react";
import { useForm, FormProvider, useFieldArray, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  User,
  Car,
  AlertCircle,
  FileText,
  Printer,
  RotateCcw,
  Clock,
  Download,
} from "lucide-react";

import { Header } from "@/components/Header/Header";
import { Input } from "@/components/Input/Input";
import { TextArea } from "@/components/TextArea/TextArea";
import { Select } from "@/components/Select/Select";
import { Button } from "@/components/Button/Button";
import { OrderItemsTable } from "@/components/OrderItemsTable/OrderItemsTable";
import { PrintableOS } from "@/components/PrintableOS/PrintableOS";

import { osFormSchema, OSFormSchema } from "@/services/validation.service";
import { calculateTotals, calculateItemTotal } from "@/services/os.service";
import { generateOSPdfPreview, generateOSPdfBlob, downloadBlob, buildOsFileName } from "@/utils/pdf_renderer";
import { formatDateTime, applyPhoneMask, applyCpfCnpjMask, applyPlateMask } from "@/utils/formatters";

import {
  Page,
  Content,
  OrderMeta,
  OrderMetaLeft,
  OrderBadge,
  OrderBadgeLabel,
  MetaDivider,
  MetaDateWrapper,
  MetaInfo,
  MetaInfoText,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Span2,
  ActionBar,
  FormError,
} from './OSPage.styles';

const PAYMENT_OPTIONS = [
  { value: "Dinheiro", label: "Dinheiro" },
  { value: "Cartão de Débito", label: "Cartão de Débito" },
  { value: "Cartão de Crédito", label: "Cartão de Crédito" },
  { value: "PIX", label: "PIX" },
  { value: "Outro", label: "Outro" },
];

export function OSPage() {
  const [showPrint, setShowPrint] = useState(false);
  const printDataRef = useRef<OSFormSchema | null>(null);

  const methods = useForm<OSFormSchema>({
    resolver: zodResolver(osFormSchema),
    defaultValues: {
      orderNumber: "",
      dateTime: formatDateTime(new Date()),
      clientName: "",
      cpfCnpj: "",
      phone: "",
      licensePlate: "",
      vehicle: "",
      color: "",
      brand: "",
      year: "",
      mileage: "",
      observations: "",
      paymentMethod: "",
      totalWithDiscount: "",
      items: [],
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitted },
  } = methods;

  const { fields, append, remove } = useFieldArray({
    control: methods.control,
    name: "items",
  });

  const watchedItems = useWatch({
    control: methods.control,
    name: "items",
  }) ?? [];

  const totals = calculateTotals(
    watchedItems.map((item) => ({
      ...item,
      total: calculateItemTotal(Number(item.quantity), Number(item.unitPrice)),
    }))
  );

  const handleAddItem = () => {
    append({ type: "Produto", description: "", quantity: 1, unitPrice: 0, total: 0 });
  };

  const handleRemoveItem = (index: number) => {
    remove(index);
  };

  const handleQuantityOrPriceChange = (index: number) => {
    const qty = Number(watchedItems[index]?.quantity ?? 0);
    const price = Number(watchedItems[index]?.unitPrice ?? 0);
    setValue(`items.${index}.total`, qty * price);
  };

  const handleDownloadPdf = handleSubmit(async (data) => {
    printDataRef.current = data;
    setShowPrint(true);

    await new Promise((resolve) => {
      requestAnimationFrame(() => requestAnimationFrame(resolve));
    });

    const blob = await generateOSPdfBlob("printable-os");
    setShowPrint(false);

    if (!blob) {
      alert("Não foi possível gerar o PDF.");
      return;
    }

    const fileName = buildOsFileName(data.clientName, data.licensePlate);
    downloadBlob(blob, fileName);
  });

  const handleReset = () => {    if (window.confirm("Deseja limpar todos os dados do formulário?")) {
      reset({
        orderNumber: "",
        dateTime: formatDateTime(new Date()),
        clientName: "",
        cpfCnpj: "",
        phone: "",
        licensePlate: "",
        vehicle: "",
        color: "",
        brand: "",
        year: "",
        mileage: "",
        observations: "",
        paymentMethod: "",
        totalWithDiscount: "",
        items: [],
      });
    }
  };

  const handlePreview = handleSubmit(async (data) => {
    printDataRef.current = data;
    setShowPrint(true);

    await new Promise((resolve) => {
      requestAnimationFrame(() => {
        requestAnimationFrame(resolve);
      });
    });

    const url = await generateOSPdfPreview("printable-os");

    setShowPrint(false);

    if (url) {
      window.open(url, "_blank");
    }
  });

  const hasErrors = isSubmitted && Object.keys(errors).length > 0;

  return (
    <Page>
      <Header />

      <FormProvider {...methods}>
        <form onSubmit={(e) => e.preventDefault()} noValidate>
          <Content>

            {/* Meta da OS */}
            <OrderMeta>
              <OrderMetaLeft>
                <OrderBadge>
                  <OrderBadgeLabel>Ordem de Serviço</OrderBadgeLabel>
                </OrderBadge>
                <MetaDivider />
                <MetaDateWrapper>
                  <Input label="Data / Hora" {...register("dateTime")} error={errors.dateTime?.message} />
                </MetaDateWrapper>
              </OrderMetaLeft>
              <MetaInfo>
                <Clock size={14} color="var(--color-gray-400)" />
                <MetaInfoText>Edite a data/hora se necessário</MetaInfoText>
              </MetaInfo>
            </OrderMeta>

            {/* Dados do Cliente */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <User size={16} />
                  Dados do Cliente
                </CardTitle>
              </CardHeader>
              <CardBody columns="1fr 1fr 1fr">
                <Span2>
                  <Input label="Nome do Cliente" required placeholder="Nome completo" {...register("clientName")} error={errors.clientName?.message} />
                </Span2>
                <Input label="CPF / CNPJ" placeholder="000.000.000-00" {...register("cpfCnpj")} onChange={(e) => setValue("cpfCnpj", applyCpfCnpjMask(e.target.value))} error={errors.cpfCnpj?.message} />
                <Input label="Telefone" placeholder="(00) 99999-9999" {...register("phone")} onChange={(e) => setValue("phone", applyPhoneMask(e.target.value))} error={errors.phone?.message} />
              </CardBody>
            </Card>

            {/* Dados do Veículo */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <Car size={16} />
                  Dados do Veículo
                </CardTitle>
              </CardHeader>
              <CardBody columns="1fr 1fr 1fr 1fr">
                <Input label="Placa" required placeholder="ABC-1D23" {...register("licensePlate")} onChange={(e) => setValue("licensePlate", applyPlateMask(e.target.value))} error={errors.licensePlate?.message} />
                <Span2>
                  <Input label="Veículo" required placeholder="Ex: HB20, Gol, Strada..." {...register("vehicle")} error={errors.vehicle?.message} />
                </Span2>
                <Input label="Cor" placeholder="Ex: Branco" {...register("color")} error={errors.color?.message} />
                <Input label="Marca" placeholder="Ex: Hyundai" {...register("brand")} error={errors.brand?.message} />
                <Input label="Ano" placeholder="2024" maxLength={4} {...register("year")} error={errors.year?.message} />
                <Input label="Quilometragem" required placeholder="Ex: 45.000" {...register("mileage")} error={errors.mileage?.message} />
              </CardBody>
            </Card>

            {/* Itens */}
            <OrderItemsTable
              fields={fields}
              watchedItems={watchedItems}
              itemErrors={errors.items}
              register={register}
              setValue={setValue}
              totals={totals}
              onAddItem={handleAddItem}
              onRemoveItem={handleRemoveItem}
              onQuantityOrPriceChange={handleQuantityOrPriceChange}
            />

            {/* Observações e Pagamento */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <FileText size={16} />
                  Informações Complementares
                </CardTitle>
              </CardHeader>
              <CardBody columns="1fr 1fr 1fr">
                <Span2>
                  <TextArea label="Observações" placeholder="Observações adicionais sobre o serviço..." rows={3} {...register("observations")} />
                </Span2>
                <Select label="Forma de Pagamento" options={PAYMENT_OPTIONS} placeholder="Selecione..." {...register("paymentMethod")} />
                <Input
                  label="Valor Total com Desconto"
                  placeholder="0,00"
                  {...register("totalWithDiscount")}
                  error={errors.totalWithDiscount?.message}
                />
              </CardBody>
            </Card>

            {/* Erros gerais */}
            {hasErrors && (
              <FormError>
                <AlertCircle size={16} />
                <span>
                  Corrija os campos destacados antes de continuar.
                  {errors.items?.message && ` ${errors.items.message}.`}
                </span>
              </FormError>
            )}

            {/* Ações */}
            <ActionBar>
              <Button type="button" variant="secondary" onClick={handleReset}>
                <RotateCcw size={15} />
                Limpar
              </Button>
              <Button type="button" variant="ghost" onClick={handleDownloadPdf}>
                <Download size={15} />
                Baixar PDF
              </Button>
              <Button type="button" variant="primary" onClick={handlePreview}>
                <Printer size={15} />
                Imprimir OS
              </Button>
            </ActionBar>
          </Content>
        </form>
      </FormProvider>

      {/* Componente de impressão — oculto na tela, visível no print */}
      {showPrint && printDataRef.current && (
        <PrintableOS data={printDataRef.current} totals={totals} />
      )}
    </Page>
  );
}
