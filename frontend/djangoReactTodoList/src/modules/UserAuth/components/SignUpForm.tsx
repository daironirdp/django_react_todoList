import { Formik, Form } from "formik";
import { SignupSchema } from "./ValidationSchema";
import { Button } from "react-bootstrap";
import { MyTextInput } from "../../../generalComponents/formInputs/FieldsComponents/MyTextInput";

interface formProps {
  username: string;
  password: string;
  email: string;
  passwordConfirmation: string;
}

export const SignUpForm: React.FC<formProps> = ({
  username,
  password,
  email,
  passwordConfirmation,
}) => {
  return (
    <Formik
      initialValues={{ username, password, email, passwordConfirmation }}
      validationSchema={SignupSchema}
      onSubmit={(values, actions) => {
        //finding the last user's id
        actions.setSubmitting(false);
      }}
    >
      <Form>
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            marginTop: "0.8rem",
          }}
        >
          <MyTextInput
            label="Name"
            name="name"
            type="text"
            placeholder="Your name please"
            id=""
          />

          <MyTextInput
            label="Username"
            name="username"
            type="text"
            placeholder="Your username please"
            id=""
          />

          <MyTextInput
            label="Email"
            name="email"
            type="text"
            placeholder="Give us your email  please"
            id=""
          />

          <MyTextInput
            label="Password"
            name="password"
            type="password"
            placeholder="Write a good password"
            id=""
          />

          <MyTextInput
            label="Confirm your Password"
            name="passwordConfirmation"
            type="password"
            placeholder="Write it again"
            id=""
          />

          <Button type="submit">Submit</Button>
        </div>
      </Form>
    </Formik>
  );
};
