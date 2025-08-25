import { forwardRef, type ReactElement } from "react";

interface InputProps {
  label: string;
  type: "text" | "email" | "password";
  ref: HTMLInputElement | null;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, type }, ref): ReactElement => {
    const fieldId = `${label.toLowerCase().replace(/\s+/g, "-")}`;

    return (
      <>
        <label htmlFor={fieldId}>{label}</label>
        <input id={fieldId} type={type} ref={ref} />
      </>
    );
  }
);
