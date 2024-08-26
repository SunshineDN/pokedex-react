/* eslint-disable react/prop-types */
import { useState } from "react"
import { ProfileUserInfoContainer,
  ProfileUserInfoTitle,
  ProfileUserInfoWrapper,
  ProfileUserInfoDataForm,
  ProfileUserInfoInputBox,
  ProfileUserInfoLabelSpan,
  ProfileUserInfoI,
  ProfileUserInfoInput,
  ProfileUserInfoButton, 
  ProfileUserInfoButtonPassword,
  ProfileUserInfoButtonWrapper,
  ProfileUserInfoTitleEdit,
  ProfileUserInforTitleClose,
  ProfileInfoUserName,
  ProfileInfoUserEmail} from "./Profile"
import { useEffect } from "react";
import usersAPI from "../../api/usersAPI";
import { getItemWithExpiration, setItemWithExpiration } from "../../hooks/handleSession";
import SuccessComponent from "../SuccessBox/SuccessComponent";
import ErrorComponent from "../ErrorBox/ErrorComponent";

const ProfileDataEdit = ({ handleChangeUsernameEmail, username, email }) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [changePassword, setChangePassword] = useState(false);
  const [newUser, setNewUser] = useState({
    username: "",
    email: ""
  });
  const [newPassword, setNewPassword] = useState({
    password: "",
    confirmPassword: ""
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccess("");
      setError("");
    }, 3000);
    return () => clearTimeout(timer);
  }, [success, error]);

  useEffect(() => {
    setNewPassword({
      password: "",
      confirmPassword: ""
    });

    setNewUser({
      username: "",
      email: ""
    });
  }, [changePassword, isEditing]);

  const handleSendNewPassword = async (e) => {
    e.preventDefault();
    await usersAPI.patch("/"+username, {
      password: newPassword.password,
      confirmPassword: newPassword.confirmPassword
    }, {
      headers: {
        "Authorization": getItemWithExpiration("sessionID")
    }})
    .then((response) => {
      setSuccess(response.data.message);
      setChangePassword(false);
      setIsDisabled(true);
    })
    .catch((error) => {
      setError(error?.response?.data?.message);
      console.log(error?.response?.data)
    });
  };

  const handleSendNewUser = async (e) => {
    e.preventDefault();

    await usersAPI.patch("/"+username, {
      username: newUser.username,
      email: newUser.email
    }, {
      headers: {
        "Authorization": getItemWithExpiration("sessionID")
    }})
    .then((response) => {
      if(response.data.token) {
        setItemWithExpiration("sessionID", response.data.token);
      }
      setSuccess(response.data.message);
      setIsDisabled(true);
      setIsEditing(false);
      handleChangeUsernameEmail(newUser.username, newUser.email);
    })
    .catch((error) => {
      setError(error?.response?.data?.message);
      console.log(error?.response?.data)
    });
  };

  return (
    <ProfileUserInfoContainer>
      <ProfileUserInfoWrapper>
        <ProfileInfoUserName>{username}</ProfileInfoUserName>
        <ProfileInfoUserEmail>{email}</ProfileInfoUserEmail>
        <ProfileUserInfoTitle>Edit profile {isDisabled ? <ProfileUserInfoTitleEdit onClick={() => {
          setIsDisabled(false);
          setIsEditing(true);
        }} /> : <ProfileUserInforTitleClose onClick={() => {
          setIsDisabled(true);
          setIsEditing(false);
        }} />}</ProfileUserInfoTitle>
        <ProfileUserInfoDataForm autoComplete="off">
          {!changePassword ? (
            <>
              <ProfileUserInfoInputBox>
                <ProfileUserInfoInput type="text" value={newUser.username} required disabled={isDisabled} onChange={e => setNewUser({...newUser, username: e.target.value})} />
                <ProfileUserInfoLabelSpan>New username</ProfileUserInfoLabelSpan>
                <ProfileUserInfoI></ProfileUserInfoI>
              </ProfileUserInfoInputBox>
              <ProfileUserInfoInputBox>
                <ProfileUserInfoInput type="text" value={newUser.email} required disabled={isDisabled} onChange={e => setNewUser({...newUser, email: e.target.value})} />
                <ProfileUserInfoLabelSpan>New email</ProfileUserInfoLabelSpan>
                <ProfileUserInfoI></ProfileUserInfoI>
              </ProfileUserInfoInputBox>
              <ProfileUserInfoButtonWrapper>
                <ProfileUserInfoButton type="button" disabled={newUser.username === "" && newUser.email === ""} onClick={(e) => {
                  handleSendNewUser(e);
                }}>Save</ProfileUserInfoButton>
                <ProfileUserInfoButtonPassword type="button" onClick={() => {
                  setChangePassword(true);
                  setIsDisabled(false);
                }}>Change password</ProfileUserInfoButtonPassword>
              </ProfileUserInfoButtonWrapper>
            </>
          ) : (
            <>
              <ProfileUserInfoInputBox>
                <ProfileUserInfoInput type="password" required disabled={isDisabled} value={newPassword.password} onChange={e => setNewPassword({...newPassword, password: e.target.value})} />
                <ProfileUserInfoLabelSpan>New password</ProfileUserInfoLabelSpan>
                <ProfileUserInfoI></ProfileUserInfoI>
              </ProfileUserInfoInputBox>
              <ProfileUserInfoInputBox>
                <ProfileUserInfoInput type="password" required disabled={isDisabled} value={newPassword.confirmPassword} onChange={e => setNewPassword({...newPassword, confirmPassword: e.target.value})} />
                <ProfileUserInfoLabelSpan>Confirm new password</ProfileUserInfoLabelSpan>
                <ProfileUserInfoI></ProfileUserInfoI>
              </ProfileUserInfoInputBox>
              <ProfileUserInfoButtonWrapper>
                <ProfileUserInfoButton type="submit" disabled={newPassword.password === "" || newPassword.confirmPassword === "" || newPassword.password !== newPassword.confirmPassword} onClick={(e) => {
                  handleSendNewPassword(e);
                }}>Save</ProfileUserInfoButton>
                <ProfileUserInfoButtonPassword type="button" onClick={() => {
                  setChangePassword(false);
                  setIsDisabled(true);
                }}>Cancel</ProfileUserInfoButtonPassword>
              </ProfileUserInfoButtonWrapper>
            </>
          )}
        </ProfileUserInfoDataForm>
      </ProfileUserInfoWrapper>
      {error && <ErrorComponent message={error} />}
      {success && <SuccessComponent message={success} />}
    </ProfileUserInfoContainer>
  )
}

export default ProfileDataEdit;