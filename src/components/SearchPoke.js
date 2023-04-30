import styled from "styled-components";
import {AiOutlineSearch} from "react-icons/ai";

export const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
    background-color: #1F1F1F;
    justify-content: center;
    align-items: center;
    margin: 0 16px;
    border-radius: 8px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.16);
    position: relative;
    z-index: 1;
`;

export const SearchTitle = styled.h2`
    color: #f5f5f5;
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
    border: 2px solid #535353;
    outline: none;
    height: 52px;
    width: 100%;
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 0.05em;
    background-color: transparent;
    border-radius: 8px;
    color: #f5f5f5;
    padding: 0 5px 0 50px;
`;

export const SearchIcon = styled(AiOutlineSearch)`
    color: #535353;
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

    &:hover, &:focus {
        background-color: #3CA1CC;
    }
`;