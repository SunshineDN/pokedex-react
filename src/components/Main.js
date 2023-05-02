import styled from "styled-components";
import { Link } from "react-scroll";
import { MdOutlineLogout } from "react-icons/md";
import HeaderImg from "../assets/img/img_header.png"

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.background};
`;

export const HomeContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.background};
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 400px;
`;

export const HeaderContainer = styled.header`
    background-color: ${({ theme }) => theme.colors.background};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    max-width: 400px;
    height: 70px;
    position: fixed;
    margin: 0 auto;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
`;

export const Title = styled(Link)`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.5rem;
    font-weight: 400;
    text-decoration: none;
    letter-spacing: 1px;
    font-family: 'Pokemon Solid', sans-serif;
    cursor: pointer;
    user-select: none;
`;

export const LogoutIcon = styled(MdOutlineLogout)`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.5rem;
    cursor: pointer;
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