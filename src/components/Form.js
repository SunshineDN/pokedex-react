/* eslint-disable no-undef */
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @keyframes appear {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const FormContainer = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.formBackside};
  width: 380px;
  height: 420px;
  border-radius: 8px;
  overflow: hidden;
  
  animation: appear 0.5s ease-in-out forwards;

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(5);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  &::before {
    content: "";
    position: absolute;
    width: 380px;
    height: 420px;
    top: -50%;
    left: -50%;
    background: linear-gradient(0deg, transparent, transparent, #f25e5e, #f25e5e, #f25e5e);
    transform-origin: bottom right;
    z-index: 1;
    animation: animate 6s linear infinite;
  }

  &::after {
    content: "";
    position: absolute;
    width: 380px;
    height: 420px;
    top: -50%;
    left: -50%;
    background: linear-gradient(0deg, transparent, transparent, #45f3ff, #45f3ff, #45f3ff);
    transform-origin: bottom right;
    z-index: 1;
    animation: animate 6s -3s linear infinite;
  }
`;

export const FormWrapper = styled.form`
  position: absolute;
  inset: 4px;
  background: ${({ theme }) => theme.colors.background};
  padding: 50px 40px;
  border-radius: 8px;
  z-index: 2;
  display: flex;
  flex-direction: column;
`;

export const FormTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  letter-spacing: 0.1em;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 300px;
  margin-top: 35px;
`;

export const LabelSpan = styled.span`
  position: absolute;
  left: 0;
  padding: 20px 0px 10px;
  color: ${({ theme }) => theme.colors.formWaiting};
  pointer-events: none;
  font-size: 1em;
  letter-spacing: 0.05em;
  transition: 0.5s;
  `;

export const I = styled.i`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: ${({ theme }) => theme.colors.primary};
  overflow: hidden;
  transition: 0.5s;
  pointer-events: none;
  border-radius: 4px;
  `;

export const Input = styled.input`
  position: relative;
  width: 100%;
  padding: 20px 10px 10px;
  background: transparent;
  border: none;
  outline: none;
  box-shadow: none;
  color: #222;
  font-size: 1em;
  letter-spacing: 0.05em;
  transition: 0.5s;
  z-index: 10;

  &:valid ~ ${LabelSpan}, &:focus ~ ${LabelSpan} {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 0.75em;
    transform: translateY(-34px);
  }

  &:valid ~ ${I}, &:focus ~ ${I} {
    height: 44px;
  }
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Redirect = styled(Link)`
  margin: 10px 0;
  color: ${({ theme }) => theme.colors.formWaiting};
  font-size: 0.75em;
  text-decoration: none;

  &:hover, &:nth-child(2) {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Button = styled.button`
  border: none;
  outline: none;
  padding: 9px 25px;
  background: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  border-radius: 4px;
  font-size: 0.9em;
  font-weight: 700;
  letter-spacing: 0.05em;
  width: 140px;
  margin-top: 10px;
  user-select: none;

  &:active {
    opacity: 0.8;
  }
`;