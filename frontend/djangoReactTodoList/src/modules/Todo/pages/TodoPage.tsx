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
  const [todo, setTodo] = useState<Todo>({
    title: "",
    completed: false,
    memo: "",
    id: "",
    created: "",
  });
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const navigate = useNavigate();

  const handleShow = () => {
    setShow((prev) => !prev);
    //setTodo(newTodo)
  };

  const handleDelete = (id: string) => {
    TodoDataService.deleteTodo(id, token)
      .then((response) => {
        console.log(response.data.status)
        setTodos(todos.filter((todo:Todo)=> todo.id != id));
        setError("");
      })
      .catch((e) => {
        console.log("Deleting a todo");
        setError(e.toString());
      });
  };

  const handleShowEdit = (todo?: Todo) => {
    setShowEdit((prev) => !prev);
    if (todo != undefined) setTodo(todo);
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
        {todos.map((item) => {
          return (
            <TodoItem
            
              handleShowEdit={handleShowEdit}
              todo={item}
              key={item.id}
              handleDelete={handleDelete}
              token = {token}
              
            />
          );
        })}
      </>
    );
  };

  return (
    <>
      <div style={{ marginTop: "20px" }} className='container'>
        <h2 style={{ marginLeft: "15px" }}>Todos</h2>

        <div
          style={{
           /* display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",**/
          }}
          className="row"
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
            <TodoForm
              action="creating"
              title=""
              memo=""
              token={token}
              setTodos={setTodos}
              setError={setError}
              handleShow={handleShow}
              handleShowEdit={handleShowEdit}
            />
          </ModalComponent>

          <ModalComponent
            show={showEdit}
            handleShow={handleShowEdit}
            title={"Edit todo"}
          >
            <TodoForm
              action="updating"
              {...todo}
              token={token}
              setTodos={setTodos}
              setError={setError}
              handleShow={handleShow}
              handleShowEdit={handleShowEdit}
            />
          </ModalComponent>
        </div>
      </div>
    </>
  );
};
