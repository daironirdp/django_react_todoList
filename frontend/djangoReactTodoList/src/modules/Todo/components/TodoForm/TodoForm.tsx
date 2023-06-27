import { Formik, Form } from "formik";
import { AddingSubmittingSchema } from "./ValidationSchema";
import { Button } from "react-bootstrap";
import { MyTextInput } from "../../../../generalComponents/formInputs/FieldsComponents/MyTextInput";
import TodoServices from "../../services/TodoServices";
import { Todo } from "../../models/Todo";

interface formProps {
  title: string,
  memo: string,
  id?: string,
  token: string,
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
  setError: React.Dispatch<React.SetStateAction<string>>,
  action:string,
}

export const TodoForm: React.FC<formProps> = ({
  title,
  memo,
  token,
  setTodos,
  setError,
  action,
  id,
}) => {
  const addTodo = (token: string, values: Todo) => {
    TodoServices.createTodo(values, token)

      .then((response) => {
        console.log(response.data);
        setTodos((prev) => [...prev, response.data]);
      })
      .catch((e) => {
        console.log("adding", e);
        setError(e.toString());
      });
  };

  const editTodo = (token: string, values: Todo) => {
    if (values.id != undefined)
      TodoServices.updateTodo(values.id, values, token)

        .then((response) => {
          console.log(response.data);
          
          setTodos((prev) => {

             const newValue = prev.map((obj)=>{ return  obj.id == values.id? ({ ...obj,...values,}) : (obj) });
             return newValue;

          });

        })
        .catch((e) => {
          console.log("adding", e);
          setError(e.toString());
        });
    else {
      console.log("adding");
      setError("This todo has not an ID so it can't be updated.");
    }
  };

  return (
    <Formik
      initialValues={{ title, memo }}
      validationSchema={AddingSubmittingSchema}
      onSubmit={(values, actions) => {

       if (action == "creating"){
        addTodo(token, values);
       }else{
        editTodo(token,{id, ...values})
       }
       

        actions.setSubmitting(false);
      }}
    >
      <Form
        style={{ display: "flex", justifyContent: "center", paddingTop: "10%" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "420px",
            padding: "60px",
            backgroundColor: "black",
            color: "beige",
            borderRadius: "15px",
          }}
        >
          <MyTextInput
            label="Todo title"
            name="title"
            type="text"
            placeholder="write the title"
            id="title"
          />

          <MyTextInput
            label="Description"
            name="memo"
            type="text"
            placeholder="Write a good description"
            id="memo"
          />

          <Button style={{ width: "100px" }} type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </Formik>
  );
};
