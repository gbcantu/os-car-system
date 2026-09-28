import { forwardRef, InputHTMLAttributes } from "react";
import { Wrapper, Label, Required, InputField, ErrorMsg } from "./Input.styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  required?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, required, className, ...props }, ref) => (
    <Wrapper>
      {label && (
        <Label>
          {label}
          {required && <Required>*</Required>}
        </Label>
      )}
      <InputField ref={ref} $hasError={!!error} className={className} {...props} />
      {error && <ErrorMsg>{error}</ErrorMsg>}
    </Wrapper>
  )
);

Input.displayName = "Input";