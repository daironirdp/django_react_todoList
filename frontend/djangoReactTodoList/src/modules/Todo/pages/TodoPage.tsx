import React from "react";
import { useState, useEffect } from "react";
import TodoDataService from "../services/TodoServices";
import { useNavigate } from "react-router-dom";
import { Todo } from "../models/Todo";
import { TodoItem } from "../components/Todo/Todo";
import { ModalComponent } from "../../../generalComponents/Modal";
import { TodoForm } from "../components/TodoForm/TodoForm";

type todoProps = {
  token: string;
};
export const TodoPage: React.FC<todoProps> = ({ token }) => {
  //Component states
  const [todos, setTodos] = useState<Todo[]>([]);
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const navigate = useNavigate();

  const handleShow = () => {
    setShow((prev) => !prev);
  };

  const handleShowEdit = () => {
    setShowEdit((prev) => !prev);
  };
  const getData = () => {
    if (token != "")
      TodoDataService.getAll(token)
        .then((response) => {
          setTodos(response.data);
          setError("");
          navigate("/todos/");
        })
        .catch((e) => {
          console.log("login", e);
          setError(e.toString());
        });
  };

  useEffect(() => {
    getData();
  }, []);

  const showTodos = (): JSX.Element => {
    return (
      <>
        {todos.map((todo) => {
          return (
            <TodoItem
              handleShowEdit={handleShowEdit}
              todo={todo}
              key={todo.id}
            />
          );
        })}
      </>
    );
  };

  return (
    <>
      <div style={{ marginTop: "20px" }}>
        <h2 style={{ marginLeft: "15px" }}>Todos</h2>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          {token == "" ? "No items to show" : showTodos()}
        </div>

        <div style={{ position: "fixed", top: "94%", left: "50%" }}>
          <button className="btn btn-primary" onClick={handleShow}>
            Add
          </button>
          <ModalComponent
            show={show}
            handleShow={handleShow}
            title={"Add todo"}
          >
            <TodoForm title="" memo="" token={token} setTodos= {setTodos}/>
          </ModalComponent>

          <ModalComponent
            show={showEdit}
            handleShow={handleShowEdit}
            title={"Edit todo"}
          >
            Child
          </ModalComponent>
        </div>
      </div>
    </>
  );
};
