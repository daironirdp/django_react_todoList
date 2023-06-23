import { Routes, Route, Navigate } from "react-router-dom";
import { TodoPage } from "../pages/TodoPage";




const TodoRouter = () => {

  return (

    <Routes>
      <Route index element={<TodoPage />} />
      <Route path={"*"} element={<Navigate to={"/todos"} replace />} />
    </Routes>



  );
};

export default TodoRouter;




