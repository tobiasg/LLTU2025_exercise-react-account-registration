import { useEffect, useRef } from "react";
import { Input } from "./Input";

export const App = () => {
  const firstNameInputRef = useRef<HTMLInputElement | null>(null);
  const lastNameInputRef = useRef<HTMLInputElement | null>(null);
  const usernameInputRef = useRef<HTMLInputElement | null>(null);
  const EmailInputRef = useRef<HTMLInputElement | null>(null);
  const passwordInputRef = useRef<HTMLInputElement | null>(null);
  const repeatPasswordInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    firstNameInputRef.current?.focus();
  }, []);

  return (
    <>
      <main id="main">
        <h1>Create a new account</h1>
        <Input label="First name" type="text" ref={firstNameInputRef} />
        <Input label="Last name" type="text" ref={lastNameInputRef} />
        <Input label="Username" type="text" ref={usernameInputRef} />
        <Input label="Email" type="email" ref={EmailInputRef} />
        <Input label="Password" type="password" ref={passwordInputRef} />
        <Input
          label="Repeat password"
          type="password"
          ref={repeatPasswordInputRef}
        />
      </main>
    </>
  );
};

export default App;
