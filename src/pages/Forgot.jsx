import { Container, Span } from "../components/ForgotForm";

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
  Button
} from "../components/Form";

const Forgot = () => {
  
  return(
    <Container>
      <FormContainer>
        <FormWrapper>
          <FormTitle>Forgot password</FormTitle>
          <Span>Enter your email address and we'll send you a link to reset your password.</Span>
          <InputBox>
            <Input type="email" required />
            <LabelSpan>Email</LabelSpan>
            <I></I>
          </InputBox>
          <Links>
            <Span>Don't have an account? <Redirect to={"/register"}>Sign up</Redirect></Span>
          </Links>
          <Button type="submit">Send</Button>
        </FormWrapper>
      </FormContainer>
    </Container>
  )
}

export default Forgot;