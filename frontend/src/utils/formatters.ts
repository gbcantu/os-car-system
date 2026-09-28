export const formatCurrency = (value: number): string =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);

export const formatDateTime = (date: Date): string => {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${pad(date.getDate())}/${pad(date.getMonth() + 1)}/${date.getFullYear()} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
};

export const applyPhoneMask = (value: string): string => {
  // Preserva o +55 se o usuário digitar
  const hasCountryCode = value.startsWith("+");
  const digits = value.replace(/\D/g, "").slice(0, hasCountryCode ? 13 : 11);

  // Com DDI: +55 (XX) XXXXX-XXXX
  if (hasCountryCode || digits.length > 11) {
    const d = digits.slice(0, 13);
    if (d.length <= 2) return `+${d}`;
    if (d.length <= 4) return `+${d.slice(0, 2)} (${d.slice(2)}`;
    if (d.length <= 9) return `+${d.slice(0, 2)} (${d.slice(2, 4)}) ${d.slice(4)}`;
    if (d.length <= 13) return `+${d.slice(0, 2)} (${d.slice(2, 4)}) ${d.slice(4, 9)}-${d.slice(9)}`;
    return `+${d.slice(0, 2)} (${d.slice(2, 4)}) ${d.slice(4, 9)}-${d.slice(9, 13)}`;
  }

  // Sem DDI: (XX) XXXXX-XXXX
  if (digits.length <= 10) {
    return digits
      .replace(/^(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{4})(\d)/, "$1-$2");
  }
  return digits
    .replace(/^(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2");
};

export const applyCpfCnpjMask = (value: string): string => {
  const digits = value.replace(/\D/g, "").slice(0, 14);
  if (digits.length <= 11) {
    return digits
      .replace(/^(\d{3})(\d)/, "$1.$2")
      .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
      .replace(/\.(\d{3})(\d)/, ".$1-$2");
  }
  return digits
    .replace(/^(\d{2})(\d)/, "$1.$2")
    .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2");
};

export const applyPlateMask = (value: string): string => {
  const clean = value.replace(/[^a-zA-Z0-9]/g, "").toUpperCase().slice(0, 7);
  if (clean.length > 4) return `${clean.slice(0, 3)}-${clean.slice(3)}`;
  return clean;
};

export const parseCurrency = (value: string): number => {
  if (!value) return 0;
  const clean = value.replace(",", ".");
  const parsed = parseFloat(clean);
  return isNaN(parsed) ? 0 : parsed;
};

export const formatCurrencyInput = (value: string, blur = false): string => {
  const cleaned = value.replace(/[^0-9.,]/g, "");
  if (!cleaned) return "";

  const normalized = cleaned.replace(/,/g, ".");
  const [integerRaw, ...decimalParts] = normalized.split(".");
  const integer = integerRaw.replace(/^0+(?=\d)/, "") || "0";
  const decimalRaw = decimalParts.join("");
  const formattedInteger = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  if (cleaned.endsWith(",") || cleaned.endsWith(".")) {
    return `${formattedInteger},`;
  }

  if (decimalRaw.length > 0) {
    const digits = decimalRaw.slice(0, 2);
    const output = blur ? digits.padEnd(2, "0") : digits;
    return `${formattedInteger},${output}`;
  }

  return blur ? `${formattedInteger},00` : formattedInteger;
};
