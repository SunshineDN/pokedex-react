import styled from "styled-components";
import { GiPokecog } from "react-icons/gi";
import { MdCatchingPokemon } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { TiHome } from "react-icons/ti";
import { NavLink } from "react-router-dom";

export const TabBarContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.containerHighlight};
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 89px;
  max-width: 400px;
  padding: 0 16px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  box-shadow: 0px -4px 8px rgba(0, 0, 0, 0.25);
  z-index: 1;
`;

export const TabBarLink = styled(NavLink)`
  text-decoration: none;
  
  &.active {
    position: relative;

    &::after {
      content: "";
      height: 4px;
      width: 50px;
      position: absolute;
      display: block;
      top: -60.5%;
      left: -11.5%;
      background-color: #4BC9FF;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      transition: all 0.3s ease-in-out;
    }
  }

  &.active svg, &.active span {
    transition: all 0.2s ease-in-out;
    font-weight: 700;
    color: #4BC9FF;
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.colors.border};
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0.1em;
`;

export const AdjustIcon = styled(GiPokecog)`
  color: ${({ theme }) => theme.colors.border};
  font-size: 24px;
  margin-bottom: 4px;
`;

export const HomeIcon = styled(TiHome)`
  color: ${({ theme }) => theme.colors.border};
  font-size: 24px;
  margin-bottom: 4px;
`;

export const FavoriteIcon = styled(MdCatchingPokemon)`
  color: ${({ theme }) => theme.colors.border};
  font-size: 24px;
  margin-bottom: 4px;
`;

export const UserIcon = styled(FaUserAlt)`
  color: ${({ theme }) => theme.colors.border};
  font-size: 24px;
  margin-bottom: 4px;
`;