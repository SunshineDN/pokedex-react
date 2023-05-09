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
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;

  &.active svg, &.active span {
    transition: all 0.2s ease-in-out;
    color: #fff;
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.colors.border};
  font-size: 12px;
  font-weight: 700;
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