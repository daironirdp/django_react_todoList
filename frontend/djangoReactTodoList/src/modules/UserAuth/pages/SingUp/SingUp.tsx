import React from "react";

import { SignUpForm } from "../../components/SignUpForm";

interface signUpProps {
  signup: React.Dispatch<React.SetStateAction<User>>;
}

export const Signup: React.FC<signUpProps> = ({signup}) => {
  return (
    <>
      <SignUpForm
        username={""}
        password={""}
        email=""
        passwordConfirmation=""
      />
    </>
  );
};
