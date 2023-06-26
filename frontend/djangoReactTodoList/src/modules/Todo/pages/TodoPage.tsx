import React from "react";
import { useState, useEffect } from "react";
import TodoDataService from "../services/TodoServices";
import { useNavigate } from "react-router-dom";
import { Todo } from "../models/Todo";
import { TodoItem } from "../components/Todo/Todo";

type todoProps = {
  token: string;
};
export const TodoPage: React.FC<todoProps> = ({ token }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

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
              memo={item.memo}
              completed={item.completed}
              created={item.created}
              title={item.title}
              key={item.id}
            />
          );
        })}
      </>
    );
  };

  return (
    <>
      <div style={{marginTop:'20px'}}>
        <h2 style={{marginLeft:"15px"}}>Todos</h2>
        
       <div style={{ display:'flex', justifyContent:'space-around', flexWrap:'wrap'}}>{token == "" ? "No items to show" : showTodos()}</div> 
        
        <div style={{ position: "fixed", top: "80%", left: "50%" }}>
          <button className="btn btn-primary">Add</button>
        </div>
      </div>
    </>
  );
};
