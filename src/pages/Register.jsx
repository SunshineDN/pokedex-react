import { useNavigate } from "react-router-dom";

import { Container,
  Span,
  InputRadioBox,
  InputRadio,
  LabelRadio,
  InputRadioWrapper,
  InputRadioTitle} from "../components/RegisterForm";

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
} from "../components/Form";
import { useState } from "react";
import userRegister from "../hooks/userRegister";
import { useEffect } from "react";
import { getItemWithExpiration } from "../hooks/handleSession";
import Loader from "../components/Loader/Loader";
import ErrorComponent from "../components/ErrorBox/ErrorComponent";


const Register = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    profileImage: "boy_profile01.png",
  });

  useEffect(() => {
    const token = getItemWithExpiration("sessionID");
    if (token) {
      navigate("/main/home");
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const response = await userRegister(user);
    if (response.status === 201) {
      setIsLoading(false);
      navigate("/login");
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
          <FormTitle>Sign up</FormTitle>
          <InputRadioWrapper>
            <InputRadioTitle>Choose your profile image</InputRadioTitle>
            <InputRadioBox onChange={(e) => setUser({...user, profileImage: e.target.value})}>
              <InputRadio id="boy_profile01" type="radio" name="profileImage" defaultChecked value={"boy_profile01.png"}/>
              <LabelRadio htmlFor="boy_profile01" img={"/pokedex-react/src/assets/img/boy_profile01.png"} ></LabelRadio>

              <InputRadio id="girl_profile01" type="radio" name="profileImage" value={"girl_profile01.png"}/>
              <LabelRadio htmlFor="girl_profile01" img={"/pokedex-react/src/assets/img/girl_profile01.png"} ></LabelRadio>
            
              <InputRadio id="boy_profile02" type="radio" name="profileImage" value={"boy_profile02.png"}/>
              <LabelRadio htmlFor="boy_profile02" img={"/pokedex-react/src/assets/img/boy_profile02.png"} ></LabelRadio>
              
              <InputRadio id="girl_profile02" type="radio" name="profileImage" value={"girl_profile02.png"}/>
              <LabelRadio htmlFor="girl_profile02" img={"/pokedex-react/src/assets/img/girl_profile02.png"} ></LabelRadio>
              
            </InputRadioBox>
          </InputRadioWrapper>
          <InputBox>
            <Input type="text" required value={user.username} onChange={(e) => setUser({...user, username: e.target.value})}/>
            <LabelSpan>Username</LabelSpan>
            <I></I>
          </InputBox>
          <InputBox>
            <Input type="text" required value={user.email} onChange={(e) => setUser({...user, email: e.target.value})}/>
            <LabelSpan>Email</LabelSpan>
            <I></I>
          </InputBox>
          <InputBox>
            <Input type="password" required value={user.password} onChange={(e) => setUser({...user, password: e.target.value})}/>
            <LabelSpan>Password</LabelSpan>
            <I></I>
          </InputBox>
          <InputBox>
            <Input type="password" required value={user.confirmPassword} onChange={(e) => setUser({...user, confirmPassword: e.target.value})}/>
            <LabelSpan>Confirm Password</LabelSpan>
            <I></I>
          </InputBox>
          <Links>
            <Span>Already have an account? <Redirect to={"/login"}>Sign in</Redirect></Span>
          </Links>
          <Button type="submit">Register</Button>
          {error !== "" && <ErrorComponent message={error} />}
        </FormWrapper>
      </FormContainer>
      ) : (
        <Loader position={"absolute"} />
      )}
    </Container>
  )
}

export default Register