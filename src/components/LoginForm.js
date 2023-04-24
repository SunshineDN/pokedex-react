/* eslint-disable no-undef */
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background-color: #1f1f1f;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const FormContainer = styled.div`
  background-color: #1c1c1c;
  width: 380px;
  height: 420px;
  border-radius: 8px;
`;

export const FormWrapper = styled.form`
`;

export const FormTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  padding: 0;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  
`;

export const Input = styled.input``;

export const LabelSpan = styled.span``;

export const I = styled.i``;

export const Links = styled.div``;

export const Redirect = styled(Link)``;
