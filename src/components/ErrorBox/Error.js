import styled, { keyframes } from "styled-components";
import { BiError } from "react-icons/bi";

const wiggle = keyframes`
    0% { transform: translateX(0) }
    25% { transform: translateX(5px) }
    50% { transform: translateX(-5px) }
    75% { transform: translateX(5px) }
    100% { transform: translateX(0) }
`;

const fadeIn = keyframes`
    0% { transform: translateY(-53px); opacity: 0 }
    100% { transform: translateY(0); opacity: 1 }
`;

export const ErrorBox = styled.div`
  margin-top: 13px;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.errorBox};
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.errorText};
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${wiggle} .2s .48s ease-in-out 2 forwards;
`;

export const ErrorBoxRelative = styled.div`
  position: absolute;
  z-index: 1;
  top: 70px;
  left: 0;
  width: 100%;
  height: fit-content;
  background-color: ${({ theme }) => theme.colors.errorBox};
  border-radius: 5px;
  padding: 10px;
  color: ${({ theme }) => theme.colors.errorText};
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-53px);
  animation: ${fadeIn} .6s .48s ease-in-out forwards;
`;

export const ErrorText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.colors.errorText};
`;

export const ErrorIcon = styled(BiError)`
  margin-right: 5px;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.errorText};
`;