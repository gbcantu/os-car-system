export type ItemType = "Produto" | "Serviço";

export type PaymentMethod =
  | "Dinheiro"
  | "Cartão de Débito"
  | "Cartão de Crédito"
  | "PIX"
  | "Outro";

export interface OSItem {
  type: ItemType;
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

export interface OSFormData {
  orderNumber: string;
  dateTime: string;
  clientName: string;
  cpfCnpj?: string;
  phone?: string;
  licensePlate: string;
  vehicle: string;
  color?: string;
  brand?: string;
  year?: string;
  mileage: string;
  observations?: string;
  paymentMethod?: string;
  totalWithDiscount?: string;
  items: OSItem[];
}

export interface OSTotals {
  productsTotal: number;
  servicesTotal: number;
  grandTotal: number;
}
