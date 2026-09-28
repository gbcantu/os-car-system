import { ButtonHTMLAttributes, ReactNode } from "react";
import StyledButton from "./Button.styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <StyledButton $variant={variant} $size={size} className={className} {...props}>
      {children}
    </StyledButton>
  );
}