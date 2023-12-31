import React from "react";

import { LoginForm } from "../../components/LoginForm";

interface loginProps {
  login?: (newUser: User) => Promise<void>,
}

export const Login: React.FC<loginProps> = ({ login }) => {
  return (
    <>
      <LoginForm username={""} password={""} login={login!} />
    </>
  );
};
