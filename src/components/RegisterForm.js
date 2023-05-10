/* eslint-disable no-undef */
import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  & > div {
    height: 650px;

    &::before {
        background: none;
    }

    &::after {
        top: 0;
        left: 0;
        height: 650px;
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