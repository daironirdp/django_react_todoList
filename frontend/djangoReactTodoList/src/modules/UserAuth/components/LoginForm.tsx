import { Formik, Form } from "formik";
import { LoginSchema } from "./ValidationSchema";
import { Button } from "react-bootstrap";
import { MyTextInput } from "../../../generalComponents/formInputs/FieldsComponents/MyTextInput";
import { Link } from "react-router-dom";

interface formProps {
  username: string;
  password: string;
  login: (newUser: User) => Promise<void>;
}

export const LoginForm: React.FC<formProps> = ({
  username,
  password,
  login,
}) => {
  return (
    <Formik
      initialValues={{ username, password }}
      validationSchema={LoginSchema}
      onSubmit={async (values, actions) => {
        //finding the last user's id

        login(values);

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
          <h2>Login form</h2>
          <MyTextInput
            label="Username"
            name="username"
            type="text"
            placeholder="Your username please"
            id="username"
          />

          <MyTextInput
            label="Password"
            name="password"
            type="password"
            placeholder="Write a good password"
            id="password"
          />

          <span style={{ display: "flex" }}>
            Do you want to
            <span>
              <Link
                to="/signup/"
                style={{ color: "blue", marginLeft: "5px" }}
                className="nav-link"
              >
                Register
              </Link>
            </span>
          </span>

          <Button style={{ width: "100px" }} type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </Formik>
  );
};
