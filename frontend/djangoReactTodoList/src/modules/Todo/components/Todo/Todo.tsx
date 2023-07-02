import React from "react";
import { Todo } from "../../models/Todo";
import { useState } from "react";
import TodoDataService from '../../services/TodoServices';

type TodoProps = {
  handleShowEdit: (todo: Todo) => void,
  handleDelete: (id: string) => void,
  todo: Todo,
  token:string,
};

export const TodoItem: React.FC<TodoProps> = ({ handleShowEdit, handleDelete, todo, token }) => {
  const [done, setDone] = useState<boolean>(
    todo.completed != undefined ? todo.completed : false
  );

  const doneClass = {
    textDecoration: "line-through",
    color: "red",
  };

  const handleDone = () => {
    
    if (todo.id!= undefined)
    TodoDataService.completeTodo(todo.id,token)
    .then((response)=>{
      response
      setDone((prev) => !prev);
    }).catch((e)=>{
      console.log("Done error", e);
      //setError(e.toString());
    })
    
  };


  return (
    <>
      <div
        style={{  marginTop: "20px" }}
        className='col-md-4' 
      >
        <div
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "45px",
            borderRadius: "15px",
          }}
        >
          <div style={done ? doneClass : {}}>
            <div>{/*} <MyCheckbox  name='completed'  children=''/> {*/}</div>

            <div>{todo.title}</div>
            <div>{todo.memo}</div>
          </div>
          <div>{todo.created}</div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              marginTop: "10px",
            }}
          >
            <button
              style={{ marginRight: "10px" }}
              onClick={() => handleShowEdit(todo)}
              className="btn btn-primary"
            >
              Edit
            </button>
            <button className={done ? "btn btn-primary" : "btn btn-danger "} onClick={handleDone}>
            {done ? "Redo" : "Done"}
              
            </button>

            {done ? <button style={{marginLeft:'10px'}} onClick={()=>handleDelete(todo.id!)} className="btn btn-danger">Delete</button> : ""}
          </div>
        </div>
      </div>
    </>
  );
};
