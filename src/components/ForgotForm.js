/* eslint-disable no-undef */
import styled from "styled-components";

export const Container = styled.div`
  background-color: #1A1A1A;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  & > div {
    height: 350px;

    &::before {
      background: none;
    }

    &::after {
      height: 350px;
      background: linear-gradient(0deg, transparent, transparent, #f25e5e, #f25e5e, #f25e5e);
      animation: animate 3s linear infinite;
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

  &:nth-child(2) {
    font-size: 0.8em;
    text-align: center;
  }
`;