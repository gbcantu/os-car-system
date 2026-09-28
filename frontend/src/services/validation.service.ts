import { z } from "zod";
import { isValidCpfCnpj, isValidPhone } from "@/utils/validators";

const osItemSchema = z.object({
  type: z.enum(["Produto", "Serviço"]),
  description: z.string().min(1, "Descrição obrigatória"),
  quantity: z.number().min(1, "Quantidade mínima é 1"),
  unitPrice: z.number().min(0, "Valor não pode ser negativo"),
  total: z.number(),
});

export const osFormSchema = z.object({
  orderNumber: z.string(),
  dateTime: z.string().min(1, "Data obrigatória"),
  clientName: z.string().min(1, "Nome do cliente obrigatório"),
  cpfCnpj: z
    .string()
    .optional()
    .refine(
      (v) => !v || v.replace(/\D/g, "").length === 0 || isValidCpfCnpj(v),
      { message: "CPF ou CNPJ inválido" }
    ),
  phone: z
    .string()
    .optional()
    .refine((v) => !v || v.replace(/\D/g, "").length === 0 || isValidPhone(v), {
      message: "Telefone inválido",
    }),
  licensePlate: z.string().min(1, "Placa obrigatória"),
  vehicle: z.string().min(1, "Veículo obrigatório"),
  color: z.string().optional(),
  brand: z.string().optional(),
  year: z
    .string()
    .optional()
    .refine((value) => !value || /^\d{4}$/.test(value), {
      message: "Ano inválido",
    }),
  mileage: z.string().min(1, "Quilometragem obrigatória"),
  observations: z.string().optional(),
  paymentMethod: z.string().optional(),
  totalWithDiscount: z
  .string()
  .optional()
  .refine(
    (value) => {
      if (!value) return true;
      return /^[\d.]+([,]\d+)?$/.test(value);
    },
    { message: "Informe um valor numérico válido" }
  ),
  items: z
    .array(osItemSchema)
    .min(1, "Adicione pelo menos um item à Ordem de Serviço"),
});

export type OSFormSchema = z.infer<typeof osFormSchema>;
