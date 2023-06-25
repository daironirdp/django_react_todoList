import React from "react";

import { SignUpForm } from "../../components/SignUpForm";

interface signUpProps {
  signup: (newUser: User) => Promise<void>;
}

export const Signup: React.FC<signUpProps> = ({ signup }) => {
  return (
    <>
      <SignUpForm
        username={""}
        password={""}
        email=""
        passwordConfirmation=""
        signUp={signup}
      />
    </>
  );
};
