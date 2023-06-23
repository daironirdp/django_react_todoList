import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "../pages/Login/Login";




const UserRouter = () => {

  return (

    <Routes>
      <Route index element={<Login />} />
      <Route path={"*"} element={<Navigate to={"/login"} replace />} />
    </Routes>



  );
};

export default UserRouter;




