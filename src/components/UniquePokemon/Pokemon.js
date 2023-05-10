import styled from "styled-components";
import { IoMdArrowRoundBack } from "react-icons/io";
import PokemonBG from "../../assets/pokemon-bg.svg";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdSwitchAccessShortcut } from "react-icons/md";
import { MdFavorite } from "react-icons/md";

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

export const PokemonDetailsTitle = styled.div`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.5rem;
    font-weight: 700;
    text-align: right;
    text-transform: capitalize;
    display: inline-block;
    position: relative;
`;

export const PokemonDetailsFavorite = styled(MdFavorite)`
    color: ${(props) => props.isfavorite !== "false" ? props.theme.colors.favorite : props.theme.colors.primary};
    font-size: 1.5rem;
    cursor: pointer;
    position: relative;
    top: 4px;
    margin-left: 8px;
    transition: all 0.3s ease-in-out;

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

export const PokemonDetailsImgSwitch = styled(MdSwitchAccessShortcut)`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 2.2rem;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.containerHighlight};
    border-radius: 50%;
    padding: 4px;
    position: absolute;
    z-index: 3;
    bottom: 0;
    right: -24%;
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
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 23px;
    flex-wrap: wrap;
`;

export const PokemonDetailsInfoDataFrame = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: baseline;
    width: 50%;

    &:nth-child(-n+2) {
        margin-bottom: 16px;
    }

    &:nth-child(3) {
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

export const PokemonDetailsInfoDataValue = styled.div`
    color: ${({ theme }) => theme.colors.primary};
    font-size: .75rem;
    font-weight: 400;
    text-align: left;
    position: relative;
`;

export const PokemonDetailsInfoDataAbilitiesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px 0;
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: flex-start;
`;

export const PokemonDetailsInfoDataAbilitiesIcon = styled(BsFillQuestionCircleFill)`
    color: ${({ theme }) => theme.colors.primary};
    font-size: .75rem;
    position: absolute;
    right: -15px;
    top: 2px;
`;

export const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.border};
    border-radius: 1px;
    margin-bottom: 20px;
`;

export const PokemonDetailsInfoTypeWeaknessContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    gap: 0 10px;
`;

export const PokemonDetailsInfoTypeContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 4px 0;
`;

export const PokemonDetailsInfoTypeWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;

export const PokemonDetailsInfoTypeTitle = styled.h3`
    color: ${({ theme }) => theme.colors.primary};
    font-size: .75rem;
    font-weight: 700;
    text-align: right;
    text-transform: capitalize;
    margin-top: 1.5%;
`;

export const PokemonDetailsInfoTypeTagContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

export const PokemonDetailsInfoTypeTag = styled.span`
    color: ${(props) => props?.theme?.colors?.types?.[props.type]?.color};
    font-size: .55rem;
    font-weight: 400;
    text-align: left;
    text-transform: lowercase;
    background-color: ${(props) => props?.theme?.colors?.types?.[props.type]?.bg};
    border-radius: 25px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 4px;
    text-transform: capitalize;
    font-weight: 700;
    width: 55px;
    height: 20px;
    margin-left: 4px;
`;

export const PokemonDetailsInfoTypeIcon = styled.div`
    background: url(${(props) => props?.theme?.colors?.types?.[props.type]?.icon}) no-repeat center;
    background-size: contain;
    width: 10px;
    height: 10px;
    margin-top: 1px;
`;

export const PokemonDetailsStatusContainer = styled.div`
    margin-top: 24px;
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    padding: 16px;
    background-color: ${({ theme }) => theme.colors.containerHighlight};
    border-radius: 8px;
`;

export const PokemonDetailsStatusTitle = styled.h2`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1rem;
    font-weight: 700;
    text-align: left;
    text-transform: capitalize;
    margin-bottom: 16px;
`;

export const PokemonDetailsStatusBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;
    margin-bottom: 17px;

    &:nth-last-child(1) {
        margin-bottom: 0;
    }
`;

export const PokemonDetailsStatusBarTitle = styled.h3`
    color: ${({ theme }) => theme.colors.primary};
    font-size: .75rem;
    font-weight: 700;
    text-align: right;
    text-transform: uppercase;
    margin-right: 8px;
`;

export const PokemonDetailsStatusBar = styled.div`
    width: 89%;
    height: 15px;
    background-color: ${({ theme }) => theme.colors.border};
    border-radius: 25px;
    position: relative;
    z-index: 1;
    box-shadow: inset 2px 2px 5px ${({ theme }) => theme.colors.border},
    inset -3px -3px 7px #7f7f7f;
`;

export const PokemonDetailsStatusBarProgress = styled.span`
    display: block;
    width: calc((${(props) => props?.value} * 100%) / 255);
    height: 100%;
    background-color: ${(props) => props?.theme?.colors?.types?.[props.type]?.bg};
    border-radius: 25px;
    box-shadow: inset 2px 2px 5px ${({ theme }) => theme.colors.insetGlow},
    inset -3px -3px 7px ${(props) => props?.theme?.colors?.types?.[props.type]?.bg};
    transition: all .7s ease-in-out;
`;

export const PokemonDetailsStatusBarProgressValue = styled.span`
    position: absolute;
    top: -10px;
    right: 7px;
    font-size: .55rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
    text-align: left;
    text-transform: uppercase;
`;

export const PokemonDetailsMovesContainer = styled.div`
    margin-top: 24px;
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    padding: 16px;
    background-color: ${({ theme }) => theme.colors.containerHighlight};
    border-radius: 8px;
`;

export const PokemonDetailsMovesTitle = styled.h2`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1rem;
    font-weight: 700;
    text-align: left;
    text-transform: capitalize;
`;

export const PokemonDetailsMovesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    & > ${Divider} {
        margin-top: 16px;
        margin-bottom: 0;
    }
`;

export const PokemonDetailsMovesName = styled.h3`
    color: ${({ theme }) => theme.colors.primary};
    font-size: .75rem;
    font-weight: 700;
    text-align: left;
    text-transform: capitalize;
    margin: 16px 0 8px 0 ;
`;

export const PokemonDetailsMovesTagContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    & > ${PokemonDetailsInfoTypeTag} {
        margin-left: 0px;
    }
`;

export const PokemonDetailsEvolutionContainer = styled.div`
    margin-top: 24px;
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    padding: 16px;
    background-color: ${({ theme }) => theme.colors.containerHighlight};
    border-radius: 8px;
`;

export const PokemonDetailsEvolutionTitle = styled.h2`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1rem;
    font-weight: 700;
    text-align: left;
    text-transform: capitalize;
`;

export const PokemonDetailsEvolutionWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 16px;
    gap: 16px;
`;

export const PokemonDetailsEvolutionBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid ${(props) => props?.selected === true ? props?.theme?.colors?.types?.[props.type]?.bg : props?.theme?.colors?.border};
    border-radius: 8px;
    padding: 8px;
    box-shadow: ${(props) => props?.selected === true ? `0px 0px 20px -10px ${props?.theme?.colors?.types?.[props.type]?.bg}` : 'none'};
`;

export const PokemonDetailsEvolutionName = styled.h3`
    color: ${({ theme }) => theme.colors.primary};
    font-size: .75rem;
    font-weight: 700;
    text-align: left;
    text-transform: capitalize;
    margin: 0 0 8px 0 ;
`;

export const PokemonDetailsEvolutionImage = styled.div`
    background: url(${(props) => props.image}) no-repeat center;
    background-size: contain;
    width: 70px;
    height: 70px;
`;

export const PokemonDetailsInfoDataAbilitiesModalContainer = styled.div`
    height: 100vh;
    width: 100%;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,.5);
    top: 0;
    left: 0;
    z-index: 9998;
`;

export const PokemonDetailsInfoDataAbilitiesModalWrapper = styled.div`
    margin: 0 auto;
    height: 50%;
    max-width: 368px;
    position: relative;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 16px;
    background-color: ${({ theme }) => theme.colors.containerHighlight};
    border-radius: 8px;
    gap: 24px;
`;

export const PokemonDetailsInfoDataAbilitiesModalTitle = styled.h2`
    color: ${({ theme }) => theme.colors.primary};
    position: absolute;
    top: 16px;
    left: 16px;
    font-size: 1.2rem;
    font-weight: 700;
    text-align: left;
    text-transform: capitalize;
    margin-bottom: 16px;
`;

export const PokemonDetailsInfoDataAbilitiesModalName = styled.h2`
    color: ${({ theme }) => theme.colors.primary};
    font-size: .85rem;
    font-weight: 700;
    text-align: left;
    text-transform: capitalize;
    margin-bottom: 16px;
`;

export const PokemonDetailsInfoDataAbilitiesModalValues = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const PokemonDetailsInfoDataAbilitiesModalClose = styled(AiFillCloseCircle)`
    position: absolute;
    top: 16px;
    right: 16px;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

export const PokemonDetailsInfoDataAbilitiesModalDescription = styled.p`
    color: ${({ theme }) => theme.colors.primary};
    font-size: .75rem;
    font-weight: 400;
    text-align: left;
`;