import styled from "styled-components";
import { IoMdArrowRoundBack } from "react-icons/io";
import PokemonBG from "../assets/pokemon-bg.svg";


export const PokemonDetailsContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.background};
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 400px;
    padding: 16px;
    min-height: 100vh;
`;

export const PokemonDetailsHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 54px;
`;

export const PokemonDetailsTitle = styled.h1`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.5rem;
    font-weight: 700;
    text-align: right;
    text-transform: capitalize;
`;

export const PokemonDetailsBackIcon = styled(IoMdArrowRoundBack)`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.5rem;
    cursor: pointer;
`;

export const PokemonDetailsImgContainer = styled.div`
    width: 249.14px;
    height: 249.34px;
    margin: 16px auto 23.66px;
    position: relative;
    z-index: 1;
`;

export const PokemonDetailsImgBackground = styled.div`
    background: url(${PokemonBG}) no-repeat center;
    background-size: contain;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
`;

export const PokemonDetailsImg = styled.div`
    background: url(${props => props.image}) no-repeat center;
    background-size: contain;
    width: 80%;
    height: 80%;
    position: absolute;
    z-index: 2;
    top: 10%;
    left: 10%;
`;

export const PokemonDetailsInfoContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 16px;
    background-color: ${({ theme }) => theme.colors.containerHighlight};
    border-radius: 8px;
`;

export const PokemonDetailsInfoTitle = styled.h2`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1rem;
    font-weight: 700;
    text-align: center;
    text-transform: capitalize;
    margin-bottom: 16px;
`;

export const PokemonDetailsInfoDesc = styled.p`
    color: ${({ theme }) => theme.colors.primary};
    font-size: .75rem;
    font-weight: 400;
    text-align: left;
    font-style: italic;
    margin-bottom: 24px;
`;

export const PokemonDetailsInfoDataContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 23px;
    flex-wrap: wrap;
`;

export const PokemonDetailsInfoDataFrame = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: baseline;
    width: 50%;

    &:nth-child(-n+2) {
        margin-bottom: 16px;
    }
`;

export const PokemonDetailsInfoDataTitle = styled.h3`
    color: ${({ theme }) => theme.colors.primary};
    font-size: .75rem;
    font-weight: 700;
    text-align: right;
    text-transform: capitalize;
    margin-right: 8px;
`;

export const PokemonDetailsInfoDataValue = styled.p`
    color: ${({ theme }) => theme.colors.primary};
    font-size: .75rem;
    font-weight: 400;
    text-align: left;
`;

export const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 20px;
`;

export const PokemonDetailsInfoTypeWeaknessContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const PokemonDetailsInfoTypeContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const PokemonDetailsInfoTypeTitle = styled.h3`
    color: ${({ theme }) => theme.colors.primary};
    font-size: .75rem;
    font-weight: 700;
    text-align: right;
    text-transform: capitalize;
    margin-right: 8px;
`;

export const PokemonDetailsInfoTypeTagContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

export const PokemonDetailsInfoTypeTag = styled.p`
    color: ${(props) => props?.theme?.colors?.types?.[props.type]?.color};
    font-size: .75rem;
    font-weight: 400;
    text-align: left;
    text-transform: capitalize;
    background-color: ${(props) => props?.theme?.colors?.types?.[props.type]?.bg};
    padding: 4px 8px;
    border-radius: 4px;
    margin-right: 8px;
`;