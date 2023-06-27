import React from "react";
import { Todo } from "../../models/Todo";
import { MyCheckbox } from "../../../../generalComponents/formInputs/FieldsComponents/MyCheckbox";

type TodoProps = {
  handleShowEdit: () => void;
  todo: Todo;
};

export const TodoItem: React.FC<TodoProps> = ({ handleShowEdit, todo }) => {
  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <div
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "45px",
            borderRadius: "15px",
          }}
        >
          <div>
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
              onClick={handleShowEdit}
              className="btn btn-primary"
            >
              Edit
            </button>
            <button className="btn btn-danger">Done</button>
          </div>
        </div>
      </div>
    </>
  );
};
