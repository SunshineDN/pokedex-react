/* eslint-disable no-undef */
import styled from "styled-components";

export const Container = styled.div`
  background-color: #1A1A1A;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  & > div {
    height: 600px;

    &::before {
        background: none;
    }

    &::after {
        top: 0;
        left: 0;
        height: 600px;
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
  color: #8f8f8f;
  font-size: 0.75em;
  text-decoration: none;
`;