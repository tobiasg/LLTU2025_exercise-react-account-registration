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

  const firstNameInputRef = useRef<HTMLInputElement | null>(null);
  const lastNameInputRef = useRef<HTMLInputElement | null>(null);
  const usernameInputRef = useRef<HTMLInputElement | null>(null);
  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const passwordInputRef = useRef<HTMLInputElement | null>(null);
  const repeatPasswordInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    firstNameInputRef.current?.focus();
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
    console.log(data);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <>
      <h1>Create a new account</h1>
      <form onSubmit={handleSubmit}>
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
        <Input label="Create account" name="" value="" type="submit" />
      </form>
    </>
  );
};
