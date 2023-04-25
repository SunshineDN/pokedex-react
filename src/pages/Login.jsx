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
  Button,
} from "../components/Form";

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
            <Redirect to={"/forgot"}>Forgot your password?</Redirect>
            <Redirect to={"/register"}>Sign up</Redirect>
          </Links>
          <Button type="submit">Login</Button>
        </FormWrapper>
      </FormContainer>
    </Container>
  );
};

export default Login;
