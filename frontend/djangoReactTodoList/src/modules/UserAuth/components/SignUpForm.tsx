import { Formik, Form } from "formik";
import { SignupSchema } from "./ValidationSchema";
import { Button } from "react-bootstrap";
import { MyTextInput } from "../../../generalComponents/formInputs/FieldsComponents/MyTextInput";

interface formProps {
  username: string;
  password: string;
  email: string;
  passwordConfirmation: string;
  signUp: (newUser: User) => Promise<void>;
}

export const SignUpForm: React.FC<formProps> = ({
  username,
  password,
  email,
  passwordConfirmation,
  signUp,
}) => {
  return (
    <Formik
      initialValues={{ username, password, email, passwordConfirmation }}
      validationSchema={SignupSchema}
      onSubmit={(values, actions) => {
        actions.setSubmitting(false);
        signUp(values);
      }}
    >
      <Form
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "30%",
            backgroundColor: "black",
            color: "white",
            padding: "30px 80px",
            borderRadius: "15px",
          }}
        >
          <h2>Register form</h2>
          <MyTextInput
            label="Name"
            name="name"
            type="text"
            placeholder="Your name please"
            id="name"
          />

          <MyTextInput
            label="Username"
            name="username"
            type="text"
            placeholder="Your username please"
            id="username"
          />

          <MyTextInput
            label="Email"
            name="email"
            type="text"
            placeholder="Give us your email  please"
            id="email"
          />

          <MyTextInput
            label="Password"
            name="password"
            type="password"
            placeholder="Write a good password"
            id="password"
          />

          <MyTextInput
            label="Confirm your Password"
            name="passwordConfirmation"
            type="password"
            placeholder="Write it again"
            id="passwordConfirmation"
          />

          <Button
            style={{
              width: "50%",
              marginTop: "10px",
            }}
            type="submit"
          >
            Submit
          </Button>
        </div>
      </Form>
    </Formik>
  );
};
