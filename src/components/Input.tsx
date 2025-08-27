import { forwardRef, type ChangeEvent, type ReactElement } from "react";

interface InputProps {
  label: string;
  name: string;
  type: "text" | "email" | "password" | "submit";
  value: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, name, value, onChange, type }, ref): ReactElement => {
    const id = `${label.toLowerCase().replace(/\s+/g, "-")}`;

    if (type === "submit") {
      return <input id={id} type={type} value={label} ref={ref} />;
    } else {
      return (
        <>
          <label htmlFor={id}>{label}</label>
          <input
            id={id}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            required
            ref={ref}
          />
        </>
      );
    }
  }
);
