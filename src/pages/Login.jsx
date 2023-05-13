/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
import Loader from "../components/Loader/Loader";
import useValidateLogin from "../hooks/useValidateLogin";
import ErrorComponent from "../components/ErrorBox/ErrorComponent";
import { getItemWithExpiration, setItemWithExpiration } from "../hooks/handleSession";

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
  })

  // REMOVE O ERRO DA TELA DE LOGIN APÓS 3 SEGUNDOS
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setError("");
  //   }, 3000);
  //   return () => clearTimeout(timer);
  // }, [error]);

  useEffect(() => {
    const token = getItemWithExpiration("sessionID");
    if (token) {
      navigate("/main/home");
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const { email, password } = user;
    const response = await useValidateLogin(email, password);
    if (response.status === 200) {
      setIsLoading(false);
      setItemWithExpiration("sessionID", response.data);
      navigate("/main/home");
    } else {
      setIsLoading(false);
      setError(response.data);
    }
  };

  return (
    <Container>
      {!isLoading ? (
        <FormContainer>
        <FormWrapper onSubmit={(e) => handleSubmit(e)}>
          <FormTitle>Sign in</FormTitle>
          <InputBox>
            <Input type="text" required value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} autoComplete="on" />
            <LabelSpan>Email</LabelSpan>
            <I></I>
          </InputBox>
          <InputBox>
            <Input type="password" required value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} autoComplete="on" />
            <LabelSpan>Password</LabelSpan>
            <I></I>
          </InputBox>
          <Links>
            <Redirect to={"/forgot"}>Forgot your password?</Redirect>
            <Redirect to={"/register"}>Sign up</Redirect>
          </Links>
          <Button type="submit">Login</Button>
          {error !== "" && <ErrorComponent message={error} />}
        </FormWrapper>
      </FormContainer>
      ) : (
        <Loader position={'absolute'} />
      )}
    </Container>
  );
};

export default Login;