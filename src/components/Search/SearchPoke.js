import styled, {keyframes} from "styled-components";
import {AiOutlineSearch} from "react-icons/ai";

export const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
    background-color: ${({ theme }) => theme.colors.containerHighlight};
    justify-content: center;
    align-items: center;
    margin: 0 16px;
    border-radius: 8px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.16);
    position: relative;
    z-index: 1;
`;

export const fadeIn = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-10px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const SearchErrorBox = styled.div`
    position: absolute;
    z-index: 2;
    bottom: -30px;
    left: auto;
    right: auto;
    width: 75%;
    background-color: ${({ theme }) => theme.colors.errorBox};
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    padding: 10px;
    color: ${({ theme }) => theme.colors.errorText};
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    animation: ${fadeIn} .2s ease-in-out 1 forwards;

    &::before {
        content: "";
        position: absolute;
        z-index: 5;
        top: -12px;
        border-bottom: 20px solid ${({ theme }) => theme.colors.errorBox};
        left: 0;
        border-right: 22px solid transparent;
    }
`;

export const SearchErrorText = styled.p`
    margin: 0;
    padding: 0;
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    color: ${({ theme }) => theme.colors.errorText};
`;

export const SearchTitle = styled.h2`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.5rem;
    font-weight: 700;
    text-align: left;
    margin-bottom: 16px;
`;

export const SearchInputBox = styled.div`
    border-radius: 10px;
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
    position: relative;
    gap: 16px;
    z-index: 1;
`;

export const SearchInput = styled.input`
    border: 2px solid ${({ theme }) => theme.colors.border};
    outline: none;
    height: 52px;
    width: 100%;
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 0.05em;
    background-color: transparent;
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.primary};
    padding: 0 5px 0 50px;
`;

export const SearchIcon = styled(AiOutlineSearch)`
    color: ${({ theme }) => theme.colors.border};
    font-size: 1.3rem;
    position: absolute;
    top: 14px;
    left: 18px;
`;

export const SearchButton = styled.button`
    background-color: #4BC9FF;
    border: none;
    outline: none;
    height: 52px;
    width: 50%;
    font-size: 1rem;
    font-weight: 400;
    color: #222;
    letter-spacing: 0.05em;
    font-weight: 700;
    cursor: pointer;
    border-radius: 8px;

    &:hover, &:active {
        background-color: #3CA1CC;
    }
`;