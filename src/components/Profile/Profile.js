import styled from "styled-components";
import Image from "../../assets/img/profile_header_img.jpg"
import { HiOutlineCamera } from "react-icons/hi";
import { AiFillCloseCircle, AiFillEdit } from "react-icons/ai";
import { BiBlock } from "react-icons/bi";

export const ProfileContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 400px;
  min-height: 100vh;
`;

export const ProfileHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const ProfileHeaderImage = styled.div`
  background-image: url(${Image});
  background-size: cover;
  background-position: center;
  height: 200px;
  width: 100%;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border: 2px solid ${({ theme }) => theme.colors.imageBorder};
`;

export const ProfileHeaderUserImage = styled.div`
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: center;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.imageBorder};
  background-color: ${({ theme }) => theme.colors.imageBorder};
  margin-top: -50px;
  position: relative;
  z-index: 2;
`;

export const ProfileHeaderUserImageEdit = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.imageBorder};
  position: absolute;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  top: 0;
  right: 0;
`;

export const ProfileHeaderUserImageEditIcon = styled(HiOutlineCamera)`
  color: ${({ theme }) => theme.colors.imageBorder};
  font-size: 1.2em;
`;

export const ProfileHeaderUserModalContainer = styled.div`
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

export const ProfileHeaderUserModalWrapper = styled.div`
    margin: 0 auto;
    height: fit-content;
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

export const InputRadioWrapper = styled.div`
  margin: 10px 0 0;
`;

export const InputRadioTitle = styled.h3`
  margin: 10px 0;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1em;
  text-decoration: none;
`;

export const InputRadioBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 8px 16px;
  flex-wrap: wrap;
  margin: 10px 0 0;
`;

export const InputRadio = styled.input`
  display: none;

  &:checked + label { 
    border: 1px solid #f25e5e;
    background-color: #f25e5e;
  }
`;

export const LabelRadio = styled.label`
  width: 100px;
  height: 100px;
  cursor: pointer;
  border: 1px solid transparent;
  background: url(${props => props.img}) no-repeat center center / cover;
  border-radius: 50%;
  transition: all 0.3s ease-in-out;
`;

export const ProfileHeaderUserModalClose = styled(AiFillCloseCircle)`
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

export const ProfileUserInfoContainer = styled.div`
    position: relative;
    top: -49px;
    padding: 0 16px;
`;

export const ProfileUserInfoWrapper = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 16px;
  width: 100%;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.containerHighlight};
`;

export const ProfileUserInfoTitle = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.2em;
  font-weight: 700;
  margin-top: 42px;
  position: relative;
`;

export const ProfileUserInfoTitleEdit = styled(AiFillEdit)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.2em;
  margin-left: 10px;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: -30px;
`;

export const ProfileUserInforTitleClose = styled(BiBlock)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.2em;
  margin-left: 10px;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: -30px;
`;

export const ProfileInfoUserName = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.2em;
  margin-top: 50px;
  font-weight: 700;
`;

export const ProfileInfoUserEmail = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  font-size: .75em;
  font-weight: 400;
`;

export const ProfileUserInfoDataForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ProfileUserInfoInputBox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 300px;
  margin-top: 35px;
`;

export const ProfileUserInfoLabelSpan = styled.span`
  position: absolute;
  left: 0;
  padding: 20px 0px 10px;
  color: ${({ theme }) => theme.colors.formWaiting};
  pointer-events: none;
  font-size: 1em;
  letter-spacing: 0.05em;
  transition: 0.5s;
  `;

export const ProfileUserInfoI = styled.i`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: ${({ theme }) => theme.colors.primary};
  overflow: hidden;
  transition: 0.5s;
  pointer-events: none;
  border-radius: 4px;
  `;

export const ProfileUserInfoInput = styled.input`
  position: relative;
  width: 100%;
  padding: 20px 10px 10px;
  background: transparent;
  border: none;
  outline: none;
  box-shadow: none;
  color: #222;
  font-size: 1em;
  letter-spacing: 0.05em;
  transition: 0.5s;
  z-index: 10;

  &:valid ~ ${ProfileUserInfoLabelSpan}, &:focus ~ ${ProfileUserInfoLabelSpan} {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 0.75em;
    transform: translateY(-34px);
  }

  &:valid ~ ${ProfileUserInfoI}, &:focus ~ ${ProfileUserInfoI} {
    height: 44px;
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.background};
    cursor: not-allowed;
  }
`;

export const ProfileUserInfoButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 30px;
`;


export const ProfileUserInfoButton = styled.button`
  border: none;
  outline: none;
  padding: 9px 25px;
  background: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  border-radius: 4px;
  font-size: 0.8em;
  font-weight: 700;
  letter-spacing: 0.05em;
  width: 110px;
  user-select: none;

  &:active {
    opacity: 0.8;
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.formWaiting};
    cursor: not-allowed;
  }

  &:disabled:active {
    opacity: 1;
  }
`;

export const ProfileUserInfoButtonPassword = styled.button`
  border: none;
  outline: none;
  padding: 9px 25px;
  background: #4BC9FF;
  cursor: pointer;
  border-radius: 4px;
  font-size: 0.8em;
  font-weight: 700;
  letter-spacing: 0.05em;
  width: 110px;
  user-select: none;

  &:active {
    opacity: 0.8;
  }
`;