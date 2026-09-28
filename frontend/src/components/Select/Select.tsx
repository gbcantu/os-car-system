import { forwardRef, SelectHTMLAttributes } from "react";
import { Wrapper, Label, SelectField } from "./Select.styles";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: SelectOption[];
  placeholder?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, placeholder, ...props }, ref) => (
    <Wrapper>
      {label && <Label>{label}</Label>}
      <SelectField ref={ref} {...props}>
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </SelectField>
    </Wrapper>
  )
);

Select.displayName = "Select";