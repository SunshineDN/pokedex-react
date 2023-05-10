import styled from "styled-components";
import HeaderImg from "../assets/img/img_header.png"
import { BsFillTrash3Fill } from "react-icons/bs";

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.background};
    min-height: 100vh;
    padding-bottom: 85px;
`;

export const HomeContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.background};
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 400px;
`;

export const ImgHeaderContainer = styled.div`
    position: relative;
    top: 68px;
    left: 0px;
    max-width: 400px;
    height: 219px;
`;

export const ImgHeader = styled.div`
    background: linear-gradient(0deg, ${({ theme }) => theme.colors.background} 13.27%, rgba(26, 26, 26, 0) 143.36%),
    url(${HeaderImg}) no-repeat center;
    background-size: contain;
    width: 100%;
    height: 105%;
`;

export const ClearFavorites = styled(BsFillTrash3Fill)`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 2.3rem;
    cursor: pointer;
    position: absolute;
    top: 60px;
    right: 17px;
    transition: all 0.3s ease-in-out;
    padding: 7px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.containerHighlight};
    z-index: 4;

    &:hover {
        background-color: ${({ theme }) => theme.colors.containerHighlightHover};
    }
`;

export const ConfirmClearFavoritesModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ConfirmClearFavoritesModal = styled.div`
    background-color: ${({ theme }) => theme.colors.background};
    width: 300px;
    height: 200px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
`;

export const ConfirmClearFavoritesModalTitle = styled.h1`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.2rem;
    font-weight: 400;
    text-decoration: none;
    letter-spacing: 1px;
    text-align: center;
    margin-bottom: 16px;
`;

export const ConfirmClearFavoritesModalButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;

export const ConfirmClearFavoritesModalButton = styled.button`
    background-color: ${({ theme }) => theme.colors.containerHighlight};
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1rem;
    font-weight: 400;
    text-decoration: none;
    letter-spacing: 1px;
    text-align: center;
    padding: 8px 16px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: ${({ theme }) => theme.colors.containerHighlightHover};
    }
`;