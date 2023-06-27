import { Formik, Form } from "formik";
import { AddingSubmittingSchema } from "./ValidationSchema";
import { Button } from "react-bootstrap";
import { MyTextInput } from "../../../../generalComponents/formInputs/FieldsComponents/MyTextInput";
import TodoServices from "../../services/TodoServices";
import { Todo } from "../../models/Todo";

interface formProps {
  title: string;
  memo: string;
  id?: string;
  token: string;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

type valuesForm = {
  id?: string;
  title: string;
  memo: string;
};

export const TodoForm: React.FC<formProps> = ({
  title,
  memo,
  token,
  setTodos,
}) => {
  const addTodo = (token: string, values: Todo) => {
    TodoServices.createTodo(values, token)

      .then((response) => {
        console.log(response.data)
        setTodos((prev) => [...prev, response.data]);
      })
      .catch((e) => {});
  };

  const editTodo = (url: string, values: valuesForm) => {};

  return (
    <Formik
      initialValues={{ title, memo }}
      validationSchema={AddingSubmittingSchema}
      onSubmit={(values, actions) => {
        //finding the last user's id

        addTodo(token, values);

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
