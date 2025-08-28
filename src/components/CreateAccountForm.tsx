import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type ReactElement,
} from "react";
import { Input } from "./Input";

export const CreateAccountForm = (): ReactElement => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<string[]>([]);

  const firstNameInputRef = useRef<HTMLInputElement | null>(null);
  const lastNameInputRef = useRef<HTMLInputElement | null>(null);
  const usernameInputRef = useRef<HTMLInputElement | null>(null);
  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const passwordInputRef = useRef<HTMLInputElement | null>(null);
  const repeatPasswordInputRef = useRef<HTMLInputElement | null>(null);
  const submitButtonRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    firstNameInputRef.current?.focus();

    if (submitButtonRef.current) {
      submitButtonRef.current.disabled = true;
    }
  }, []);

  const validateForm = (formData: typeof data): string[] => {
    const errors: string[] = [];

    if (formData.password && formData.password.length < 8) {
      errors.push("Password must be at least 8 characters");
    }

    if (
      formData.password &&
      formData.confirmPassword &&
      formData.password !== formData.confirmPassword
    ) {
      errors.push("Passwords do not match");
    }

    if (formData.confirmPassword && !formData.password) {
      errors.push("Passwords do not match");
    }

    if (formData.password && !formData.confirmPassword) {
      errors.push("Confirm your password");
    }

    return errors;
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData((prevState) => {
      const formData = { ...prevState, [name]: value };
      const formErrors = validateForm(formData);
      setErrors(formErrors);

      if (submitButtonRef.current) {
        if (
          formErrors.length === 0 &&
          formData.firstName &&
          formData.lastName &&
          formData.username &&
          formData.email &&
          formData.password &&
          formData.confirmPassword
        ) {
          submitButtonRef.current.disabled = false;
        } else {
          submitButtonRef.current.disabled = true;
        }
      }

      return formData;
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const registrationData = {
      name: [data.firstName, data.lastName].join(" "),
      username: data.username,
      email: data.email,
      password: data.password,
    };

    console.log(registrationData);
  };

  return (
    <>
      <h1>Create a new account</h1>
      <form onSubmit={handleSubmit}>
        <div className="name-wrapper">
          <Input
            label="First name"
            name="firstName"
            type="text"
            value={data.firstName}
            onChange={handleChange}
            ref={firstNameInputRef}
          />
          <Input
            label="Last name"
            name="lastName"
            type="text"
            value={data.lastName}
            onChange={handleChange}
            ref={lastNameInputRef}
          />
        </div>
        <Input
          label="Username"
          name="username"
          type="text"
          value={data.username}
          onChange={handleChange}
          ref={usernameInputRef}
        />
        <Input
          label="Email"
          name="email"
          type="email"
          value={data.email}
          onChange={handleChange}
          ref={emailInputRef}
        />
        <Input
          label="Password"
          name="password"
          type="password"
          value={data.password}
          onChange={handleChange}
          ref={passwordInputRef}
        />
        <Input
          label="Repeat password"
          name="confirmPassword"
          type="password"
          value={data.confirmPassword}
          onChange={handleChange}
          ref={repeatPasswordInputRef}
        />
        {errors.length > 0 && (
          <div className="errors">
            {errors.map((error, index) => (
              <span key={index} className="error-message">
                {error}
              </span>
            ))}
          </div>
        )}
        <Input
          label="Create account"
          name=""
          value=""
          type="submit"
          ref={submitButtonRef}
        />
      </form>
    </>
  );
};
