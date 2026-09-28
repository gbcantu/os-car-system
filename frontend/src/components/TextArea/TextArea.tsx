import { forwardRef, TextareaHTMLAttributes } from "react";
import { Wrapper, Label, TextAreaField } from "./TextArea.styles";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, className, ...props }, ref) => (
    <Wrapper>
      {label && <Label>{label}</Label>}
      <TextAreaField ref={ref} className={className} {...props} />
    </Wrapper>
  )
);

TextArea.displayName = "TextArea";