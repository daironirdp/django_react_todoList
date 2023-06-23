import { Routes, Route } from "react-router-dom";
import { Suspense, lazy, FC } from "react";

import { Loading } from "../generalComponents/loading";
import { Login } from "../modules/UserAuth/pages/Login/Login";
import { Signup } from "../modules/UserAuth/pages/SingUp/SingUp";

//importing the site routes
const TodoRouter = lazy(() => import("../modules/Todo/routers"));

interface props {
  login: (newUser: User) => void,
  logout: React.Dispatch<React.SetStateAction<null>>;
  signup: React.Dispatch<React.SetStateAction<User>>;
  token: string;
}

export const RootRouter: FC<props> = ({ login, logout, signup, token }) => {
  return (
    <Routes>
      {token == "" ? (
        <>
          <Route path="/signup/" element={<Signup signup={signup} />} />
          <Route path="/login/" element={<Login login={login} />} />
          <Route path="*" element={<Login login={login} />} />
        </>
      ) : (
        <Route
          path="/todos/*"
          element={
            <Suspense fallback={<Loading />}>
              <TodoRouter />
            </Suspense>
          }
        />
      )}
    </Routes>
  );
};
