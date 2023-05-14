import { useEffect, useState } from "react"
import { ProfileContainer } from "../components/Profile/Profile"
import ProfileHeader from "../components/Profile/ProfileHeader"
import usersAPI from "../api/usersAPI";
import { getItemWithExpiration } from "../hooks/handleSession";
import ProfileDataEdit from "../components/Profile/ProfileDataEdit";

const Profile = () => {
  const [user, setUser] = useState({});
  
  useEffect(() => {
    const getUserData = async () => {
      await usersAPI.get("/data", {
        headers: {
          "Authorization": getItemWithExpiration("sessionID"),
      }})
      .then((response) => {
        setUser(response.data.user);
      })
      .catch((error) => {
        console.log("Error in getUserData(): " + error.response.data.error);
        if (error.response.data.error === "Não autorizado!") {
          window.localStorage.removeItem("sessionID");
          window.location.reload();
        }
      })
  };
    getUserData();
  }, []);
  
  const handleChangeProfileImage = (newProfileImage) => {
    setUser({
      ...user,
      profileImage: newProfileImage
    })
  }

  const handleChangeUsernameEmail = (username, email) => {
    if(username !== "" || email !== "") {
      if (username !== "") {
        setUser({
          ...user,
          username: username
        })
        return;
      }
      if (email !== "") {
        setUser({
          ...user,
          email: email
        })
        return;
      }

      setUser({
        ...user,
        username: username,
        email: email
      })
    }
  }
  
  return (
    <ProfileContainer>
      <ProfileHeader username={user?.username} profileImage={user?.profileImage} setProfileImage={handleChangeProfileImage} />
      <ProfileDataEdit handleChangeUsernameEmail={handleChangeUsernameEmail} username={user?.username} email={user?.email} />
    </ProfileContainer>
  )
}

export default Profile