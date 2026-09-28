export const isValidCpf = (cpf: string): boolean => {
  const digits = cpf.replace(/\D/g, "");
  if (digits.length !== 11 || /^(\d)\1+$/.test(digits)) return false;
  const calc = (end: number) => {
    let sum = 0;
    for (let i = 0; i < end; i++) sum += parseInt(digits[i]) * (end + 1 - i);
    const rem = (sum * 10) % 11;
    return rem === 10 || rem === 11 ? 0 : rem;
  };
  return calc(9) === parseInt(digits[9]) && calc(10) === parseInt(digits[10]);
};

export const isValidCnpj = (cnpj: string): boolean => {
  const digits = cnpj.replace(/\D/g, "");
  if (digits.length !== 14 || /^(\d)\1+$/.test(digits)) return false;
  const calc = (end: number, weights: number[]) => {
    let sum = 0;
    for (let i = 0; i < end; i++) sum += parseInt(digits[i]) * weights[i];
    const rem = sum % 11;
    return rem < 2 ? 0 : 11 - rem;
  };
  const w1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const w2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  return (
    calc(12, w1) === parseInt(digits[12]) &&
    calc(13, w2) === parseInt(digits[13])
  );
};

export const isValidPhone = (phone: string): boolean => {
  const digits = phone.replace(/\D/g, "");
  // Aceita: 10-11 dígitos (sem DDI) ou 12-13 dígitos (com DDI 55)
  return digits.length >= 10 && digits.length <= 13;
};

export const isValidCpfCnpj = (value: string): boolean => {
  const digits = value.replace(/\D/g, "");
  if (digits.length === 11) return isValidCpf(value);
  if (digits.length === 14) return isValidCnpj(value);
  return false;
};
