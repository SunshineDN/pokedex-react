import { MdOutlineLogout } from "react-icons/md";
import { Link } from "react-scroll";
import styled from "styled-components";

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