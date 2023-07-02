import { Routes, Route } from "react-router-dom";
//import { Suspense, lazy, FC } from "react";
import {FC} from 'react';

//import { Loading } from "../generalComponents/loading";
import { Login } from "../modules/UserAuth/pages/Login/Login";
import { Signup } from "../modules/UserAuth/pages/SingUp/SingUp";
import { TodoPage } from "../modules/Todo/pages/TodoPage";

//importing the site routes
//const TodoRouter = lazy(() => import("../modules/Todo/routers"));

interface props {
  login: (newUser: User) => Promise<void>;
  signup: (newUser: User) => Promise<void>;
  token: string;
}

export const RootRouter: FC<props> = ({ login, signup, token }) => {
  return (
    <Routes>
      {token == "" ? (
        <>
          <Route path="/signup/" element={<Signup signup={signup} />} />
          <Route path="/login/" element={<Login login={login} />} />
          <Route path="*" element={<Login login={login} />} />
        </>
      ) : (
        <Route path={"*"} element={<TodoPage token={token} />} />
      )}
    </Routes>
  );
};
