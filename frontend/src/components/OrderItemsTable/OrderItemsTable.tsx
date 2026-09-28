import { FieldArrayWithId, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { Package, Wrench, Plus, Trash2, ClipboardList } from "lucide-react";
import { Button } from "@/components/Button/Button";
import { formatCurrency, parseCurrency } from "@/utils/formatters";
import { calculateItemTotal } from "@/services/os.service";
import { OSFormSchema } from "@/services/validation.service";
import {
  Section,
  SectionHeader,
  SectionTitle,
  TableWrapper,
  Table,
  CellInput,
  CellSelect,
  TotalCell,
  EmptyState,
  TotalsBar,
  TotalItem,
  TotalLabel,
  TotalValue,
  ErrorMsg,
  HeaderCell,
  RemoveButton,
} from './OrderItemsTable.styles';

interface OrderItemsTableProps {
  fields: FieldArrayWithId<OSFormSchema, "items", "id">[];
  watchedItems: OSFormSchema["items"];
  itemErrors?: any;
  register: UseFormRegister<OSFormSchema>;
  setValue: UseFormSetValue<OSFormSchema>;
  totals: {
    productsTotal: number;
    servicesTotal: number;
    grandTotal: number;
  };
  onAddItem: () => void;
  onRemoveItem: (index: number) => void;
  onQuantityOrPriceChange: (index: number) => void;
}

export function OrderItemsTable({
  fields,
  watchedItems,
  itemErrors,
  register,
  setValue,
  totals,
  onAddItem,
  onRemoveItem,
  onQuantityOrPriceChange,
}: OrderItemsTableProps) {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>
          <ClipboardList size={18} />
          Itens da Ordem de Serviço
        </SectionTitle>
        <Button type="button" variant="ghost" size="sm" onClick={onAddItem}>
          <Plus size={14} />
          Adicionar Item
        </Button>
      </SectionHeader>

      <TableWrapper>
        <Table>
          <thead>
            <tr>
              <HeaderCell $width="120">Tipo</HeaderCell>
              <HeaderCell>Descrição</HeaderCell>
              <HeaderCell $width="90" $align="right">Qtd</HeaderCell>
              <HeaderCell $width="140" $align="right">Valor Unit.</HeaderCell>
              <HeaderCell $width="140" $align="right">Total</HeaderCell>
              <HeaderCell $width="48" />
            </tr>
          </thead>
          <tbody>
            {fields.length === 0 && (
              <tr>
                <td colSpan={6}>
                  <EmptyState>
                    <div>
                      <Package size={36} />
                    </div>
                    Nenhum item adicionado. Clique em <strong>+ Adicionar Item</strong> para começar.
                  </EmptyState>
                </td>
              </tr>
            )}

            {fields.map((field, index) => {
              const itemTotal = calculateItemTotal(
                Number(watchedItems[index]?.quantity ?? 0),
                Number(watchedItems[index]?.unitPrice ?? 0)
              );
              const type = watchedItems[index]?.type;

              return (
                <tr key={field.id}>
                  {/* Tipo */}
                  <td>
                    <CellSelect {...register(`items.${index}.type`)}>
                      <option value="Serviço">Serviço</option>
                      <option value="Produto">Produto</option>
                    </CellSelect>
                  </td>

                  {/* Descrição */}
                  <td>
                    <CellInput
                      {...register(`items.${index}.description`)}
                      placeholder={type === "Produto" ? "Ex: Óleo 5W30" : "Ex: Troca de óleo"}
                      $hasError={!!itemErrors?.[index]?.description}
                    />
                  </td>

                  {/* Quantidade — number com setas nativas */}
                  <td>
                    <CellInput
                      type="number"
                      min={1}
                      step={1}
                      {...register(`items.${index}.quantity`, {
                        valueAsNumber: true,
                        onChange: () => onQuantityOrPriceChange(index),
                      })}
                      $hasError={!!itemErrors?.[index]?.quantity}
                      $textAlign="right"
                    />
                  </td>

                  {/* Valor Unitário — texto livre, parseia ao mudar */}
                  <td>
                      <CellInput
                        type="text"
                        defaultValue={watchedItems[index]?.unitPrice ?? 0}
                        onChange={(e) => {
                          const numeric = parseCurrency(e.target.value);
                          setValue(`items.${index}.unitPrice`, numeric);
                          onQuantityOrPriceChange(index);
                        }}
                        $hasError={!!itemErrors?.[index]?.unitPrice}
                        $textAlign="right"
                      />
                    </td>

                  {/* Total calculado */}
                  <td className="right">
                    <TotalCell>{formatCurrency(itemTotal)}</TotalCell>
                  </td>

                  {/* Remover */}
                  <td>
                    <RemoveButton onClick={() => onRemoveItem(index)} title="Remover item">
                      <Trash2 size={15} />
                    </RemoveButton>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </TableWrapper>

      {typeof itemErrors === "object" && "message" in (itemErrors as object) && (
        <ErrorMsg>{(itemErrors as { message: string }).message}</ErrorMsg>
      )}

      {fields.length > 0 && (
        <TotalsBar>
          <TotalItem>
            <TotalLabel>
              <Wrench size={11} />
              Serviços
            </TotalLabel>
            <TotalValue>{formatCurrency(totals.servicesTotal)}</TotalValue>
          </TotalItem>
          <TotalItem>
            <TotalLabel>
              <Package size={11} />
              Produtos
            </TotalLabel>
            <TotalValue>{formatCurrency(totals.productsTotal)}</TotalValue>
          </TotalItem>
          <div>
            <TotalItem>
              <TotalLabel $em>Total Geral</TotalLabel>
              <TotalValue $em>{formatCurrency(totals.grandTotal)}</TotalValue>
            </TotalItem>
          </div>
        </TotalsBar>
      )}
    </Section>
  );
};