/* eslint-disable react/prop-types */
import { useState } from "react";
import { ProfileHeaderImage,
  ProfileHeaderUserImage,
  ProfileHeaderUserImageEdit,
  ProfileHeaderUserModalContainer,
  ProfileHeaderUserModalWrapper,
  ProfileHeaderUserModalClose,
  ProfileHeaderUserImageEditIcon,
  ProfileHeaderWrapper,
  ProfileUserInfoButton,
  InputRadioWrapper,
  InputRadioTitle,
  InputRadioBox,
  InputRadio,
  LabelRadio} from "./Profile"
import SuccessComponent from "../SuccessBox/SuccessComponent";
import ErrorComponent from "../ErrorBox/ErrorComponent";
import { useEffect } from "react";
import { useRef } from "react";
import usersAPI from "../../api/usersAPI";
import { getItemWithExpiration } from "../../hooks/handleSession";
import boy1 from "../../assets/img/boy_profile01.png";
import boy2 from "../../assets/img/boy_profile02.png";
import girl1 from "../../assets/img/girl_profile01.png";
import girl2 from "../../assets/img/girl_profile02.png";

const ProfileHeader = ({ username, profileImage, setProfileImage }) => {
  const [modal, setModal] = useState(false);
  const modalRef = useRef(null);
  console.log("Perfil menino 01: ", boy1)
  console.log(boy1)

  const [profileImageState, setProfileImageState] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const handleClickOutsideModal = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutsideModal);

    return () => {
      document.addEventListener("mousedown", handleClickOutsideModal);
    };
  }, [setModal]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccess("");
      setError("");
    }, 3000);
    return () => clearTimeout(timer);
  }, [success, error]);

  const handleSendProfileImage = async () => {
    await usersAPI.patch("/"+username, {
      profileImage: profileImageState
    }, {
      headers: {
        "Authorization": getItemWithExpiration("sessionID")
      }
    })
    .then((response) => {
      setSuccess(response.data.message);
      setProfileImage(profileImageState);
      setProfileImageState("");
      setModal(false);
    })
    .catch((error) => {
      setError(error.response.data.message);
      console.log(error.response.data)
    })
  }

  return (
    <ProfileHeaderWrapper>
      {success !== "" && <SuccessComponent component={"profile"} message={success} />}
      {error !== "" && <ErrorComponent component={"profile"} message={error} />}
      <ProfileHeaderImage></ProfileHeaderImage>
      <ProfileHeaderUserImage img={"/src/assets/img/" + profileImage}>
        <ProfileHeaderUserImageEdit>
          <ProfileHeaderUserImageEditIcon onClick={() => setModal(true)} />
        </ProfileHeaderUserImageEdit>
      </ProfileHeaderUserImage>
      {modal && (
        <ProfileHeaderUserModalContainer>
          <ProfileHeaderUserModalWrapper ref={modalRef}>
            <ProfileHeaderUserModalClose onClick={() => setModal(false)} />
            <InputRadioWrapper>
              <InputRadioTitle>Profile image</InputRadioTitle>
              <InputRadioBox onChange={e => setProfileImageState(e.target.value)}>
                <InputRadio type="radio" name="profileImage" id="boy_profile01" value="boy_profile01.png" />
                <LabelRadio img={boy1} htmlFor="boy_profile01"></LabelRadio>
                
                <InputRadio type="radio" name="profileImage" id="boy_profile02" value="boy_profile02.png" />
                <LabelRadio img={boy2} htmlFor="boy_profile02"></LabelRadio>
                
                <InputRadio type="radio" name="profileImage" id="girl_profile01" value="girl_profile01.png" />
                <LabelRadio img={girl1} htmlFor="girl_profile01"></LabelRadio>
                
                <InputRadio type="radio" name="profileImage" id="girl_profile02" value="girl_profile02.png" />
                <LabelRadio img={girl2} htmlFor="girl_profile02"></LabelRadio>
              </InputRadioBox>
            </InputRadioWrapper>
            <ProfileUserInfoButton onClick={() => handleSendProfileImage()} disabled={profileImageState === "" || profileImage === profileImageState}>Change</ProfileUserInfoButton>
          </ProfileHeaderUserModalWrapper>
        </ProfileHeaderUserModalContainer>
      )}
    </ProfileHeaderWrapper>
  )
}

export default ProfileHeader