import React from "react";
import { Todo } from "../../models/Todo";
import { MyCheckbox } from "../../../../generalComponents/formInputs/FieldsComponents/MyCheckbox";

export const TodoItem: React.FC<Todo> = ({
  memo,
  completed,
  created,
  title,
}) => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", marginTop:'20px' }}>
        <div
          style={{ backgroundColor: "black", color: "bisque", padding: "45px", borderRadius:'15px' }}
        >
          <div>
            <div>{/*} <MyCheckbox  name='completed'  children=''/> {*/}</div>

            <div>{title}</div>
            <div>{memo}</div>
          </div>
          <div>{created}</div>
          <div style={{ display: "flex", justifyContent: "end", marginTop:'10px' }}>
            <button style={{marginRight:'10px'}} className="btn btn-primary">Edit</button>
            <button className="btn btn-danger">Done</button>
          </div>
        </div>
      </div>
    </>
  );
};
