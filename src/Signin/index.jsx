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
} from "./SigninElements";
import "./SignUp.css";

const SignIn = () => {
  return (
    <>
      {/* <Container> */}
      <FormWrap>
        {/* <Icon to='/'>OnCall System</Icon> */}

        <FormContent>
          <Form action="#">
            <FormH1>Sign in to your account</FormH1>
            <img
              src="https://lh3.googleusercontent.com/ytP9VP86DItizVX2YNA-xTYzV09IS7rh4WexVp7eilIcfHmm74B7odbcwD5DTXmL0PF42i2wnRKSFPBHlmSjCblWHDCD2oD1oaM1CGFcSd48VBKJfsCi4bS170PKxGwji8CPmehwPw=w200-h247-no"
              alt="Person"
              className="card__image d-flex justify-content-center"
            />
           
            <FormLabel htmlFor="for">User Name</FormLabel>
            <FormInput htmlFor="userName" required />
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput htmlFor="email" required />

            <FormButton type="submit">Update</FormButton>
            {/* <Text>Forgot password</Text> */}
          </Form>
        </FormContent>
      </FormWrap>
      {/* </Container> */}
    </>
  );
};

export default SignIn;
