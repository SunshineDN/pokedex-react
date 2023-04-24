/* eslint-disable no-unused-vars */
import React from "react";
import {
  FormContainer,
  FormWrapper,
  FormTitle,
  I,
  Input,
  InputBox,
  LabelSpan,
  Redirect,
  Links,
  Container,
} from "../components/LoginForm";

const Login = () => {
  return (
    <Container>
      <FormContainer>
        <FormWrapper>
          <FormTitle>Sign in</FormTitle>
          <InputBox>
            <Input type="text" required />
            <LabelSpan>Username</LabelSpan>
            <I></I>
          </InputBox>
          <InputBox>
            <Input type="password" required />
            <LabelSpan>Password</LabelSpan>
            <I></I>
          </InputBox>
          <Links>
            <Redirect to={"/forgot"}>Forgot password</Redirect>
            <Redirect to={"/register"}>Signup</Redirect>
          </Links>
          <Input type="submit" value="Login" />
        </FormWrapper>
      </FormContainer>
    </Container>
  );
};

export default Login;
