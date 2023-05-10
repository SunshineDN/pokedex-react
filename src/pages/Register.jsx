import { Container, Span } from "../components/RegisterForm";

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
  Button,
  Select,
} from "../components/Form";


const Register = () => {
  return (
    <Container>
      <FormContainer>
        <FormWrapper>
          <FormTitle>Sign up</FormTitle>
          <InputBox>
            <Select type="select" required>
              <option value={""} selected disabled></option>
              <option value={"Boy"}>Boy</option>
              <option value={"Girl"}>Girl</option>
            </Select>
            <LabelSpan>What you are?</LabelSpan>
            <I></I>
          </InputBox>
          <InputBox>
            <Input type="text" required />
            <LabelSpan>Username</LabelSpan>
            <I></I>
          </InputBox>
          <InputBox>
            <Input type="email" required />
            <LabelSpan>Email</LabelSpan>
            <I></I>
          </InputBox>
          <InputBox>
            <Input type="password" required />
            <LabelSpan>Password</LabelSpan>
            <I></I>
          </InputBox>
          <InputBox>
            <Input type="password" required />
            <LabelSpan>Confirm Password</LabelSpan>
            <I></I>
          </InputBox>
          <Links>
            <Span>Already have an account? <Redirect to={"/login"}>Sign in</Redirect></Span>
          </Links>
          <Button type="submit">Register</Button>
        </FormWrapper>
      </FormContainer>
    </Container>
  )
}

export default Register