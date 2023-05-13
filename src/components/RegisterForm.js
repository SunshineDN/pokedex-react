/* eslint-disable no-undef */
import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  & > div {
    height: 830px;

    &::before {
        background: none;
    }

    &::after {
        top: 0;
        left: 0;
        height: 830px;
        background: radial-gradient(circle, transparent, #f25e5e);
        animation: pulse 3s linear infinite;
        transform-origin: center ;
    }
  }

  & a {
      text-decoration: underline;
      font-size: 1em;
  }
`;

export const Span = styled.span`
  margin: 10px 0;
  color: ${({ theme }) => theme.colors.formWaiting};
  font-size: 0.75em;
  text-decoration: none;
`;

export const InputRadioWrapper = styled.div`
  margin: 10px 0 0;
`;

export const InputRadioTitle = styled.h3`
  margin: 10px 0;
  color: ${({ theme }) => theme.colors.formWaiting};
  font-size: 1em;
  text-decoration: none;
`;

export const InputRadioBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 8px 16px;
  flex-wrap: wrap;
  margin: 10px 0 0;
`;

export const InputRadio = styled.input`
  display: none;

  &:checked + label { 
    border: 1px solid #f25e5e;
    background-color: #f25e5e;
  }
`;

export const LabelRadio = styled.label`
  width: 100px;
  height: 100px;
  cursor: pointer;
  border: 1px solid transparent;
  background: url(${props => props.img}) no-repeat center center / cover;
  border-radius: 50%;
  transition: all 0.3s ease-in-out;
`;