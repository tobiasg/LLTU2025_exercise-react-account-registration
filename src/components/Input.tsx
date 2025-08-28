import { type ChangeEvent, type ReactElement, type RefObject } from "react";

interface InputProps {
  label: string;
  name: string;
  type: "text" | "email" | "password" | "submit";
  value: string;
  ref: RefObject<HTMLInputElement | null>;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  label,
  name,
  type,
  value,
  ref,
  onChange,
}: InputProps): ReactElement => {
  const id = `${label.toLowerCase().replace(/\s+/g, "-")}`;

  if (type === "submit") {
    return <input id={id} type={type} value={label} ref={ref} />;
  } else {
    return (
      <>
        <label>
          {label}
          <input
            id={id}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            autoComplete="on"
            required
            ref={ref}
          />
        </label>
      </>
    );
  }
};
