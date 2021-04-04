import React from "react";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormInput,
  FormH1,
  FormLabel,
  FormButton,
  Text,
} from "../../Signin/SigninElements";

const SignInForm = () => {
  return (
    <div style={{ paddingTop: 100, paddingBottom: 100 }}>
      {/* <Container> */}
      <FormWrap>
        {/* <Icon to='/'>OnCall System</Icon> */}

        <FormContent>
          <Form action="#">
            <FormH1>Sign in to your account</FormH1>

            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput htmlFor="email" required />

            <FormLabel htmlFor="for">Password</FormLabel>
            <FormInput htmlFor="password" required />

            <FormButton type="submit">Sign In</FormButton>
            {/* <Text>Forgot password</Text> */}
          </Form>
        </FormContent>
      </FormWrap>
      {/* </Container> */}
    </div>
  );
};

export default SignInForm;
