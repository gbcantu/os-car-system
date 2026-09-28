import { OSFormData, OSItem, OSTotals } from "@/types/os.types";
import { formatDateTime } from "@/utils/formatters";

export const calculateItemTotal = (quantity: number, unitPrice: number): number =>
  quantity * unitPrice;

export const calculateTotals = (items: OSItem[]): OSTotals => {
  const productsTotal = items
    .filter((i) => i.type === "Produto")
    .reduce((acc, i) => acc + i.total, 0);

  const servicesTotal = items
    .filter((i) => i.type === "Serviço")
    .reduce((acc, i) => acc + i.total, 0);

  return {
    productsTotal,
    servicesTotal,
    grandTotal: productsTotal + servicesTotal,
  };
};

export const createEmptyOS = (): Partial<OSFormData> => ({
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
  items: [],
});
