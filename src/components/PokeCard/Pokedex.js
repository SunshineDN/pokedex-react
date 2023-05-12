import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdFavorite } from "react-icons/md";

export const LinkPokemon = styled(Link)`
    text-decoration: none;
    user-select: none;
`;

export const PokedexContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.background};
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    margin: 24px auto 16px;
    max-width: 400px;
    padding: 0 16px;
    position: relative;
`;

export const PokedexFavorite = styled(MdFavorite)`
    color: ${(props) => props.isfavorite !== "false" ? props.theme.colors.favorite : props.theme.colors.primary};
    font-size: 1.2rem;
    cursor: pointer;
    position: absolute;
    top: 8px;
    right: 8px;
    transition: all 0.3s ease-in-out;
    z-index: 4;

    @keyframes pop {
        0% {
            transform: scale(.9);
        }
        50% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
        }
    }
`;

export const PokedexTitle = styled.h1`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1rem;
    font-weight: 400;
    text-decoration: none;
    letter-spacing: 1px;
    text-align: left;
    margin-bottom: 16px;
`;

export const PokedexCardsContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.background};
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: space-between;
    gap: 15px;
    max-width: 400px;
    position: relative;
    z-index: 1;
`;

export const PokedexCard = styled.div`
    background-color: ${({ theme }) => theme.colors.containerHighlight};
    width: 109px;
    height: 109px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 8px;
    border-radius: 8px;
    position: relative;
    z-index: 1;
    overflow: hidden;
    transition: all .2s ease-in-out;

    &:hover {
        background-color: ${({ theme }) => theme.colors.containerHighlightHover};
    }
`;

export const PokedexCardId = styled.p`
    color: ${({ theme }) => theme.colors.primary};
    font-size: .65rem;
    font-weight: 700;
    text-align: left;
`;

export const PokedexCardName = styled.h2`
    color: ${({ theme }) => theme.colors.primary};
    font-size: .65rem;
    font-weight: 400;
    text-align: left;
    text-transform: capitalize;
`;

export const PokedexCardImg = styled.div.attrs(props => ({
    style: {
        backgroundImage: `url(${props.image})`
    }
    }))`
    background-size: contain;
    width: 92%;
    height: 92%;
    position: absolute;
    bottom: -19px;
    right: -10px;
    z-index: 0;
`;