import usersAPI from "../api/usersAPI";

const userRegister = async (user) => {
  const { username, email, password, confirmPassword, profileImage } = user;
  const response = await usersAPI.post("register", {
    username,
    email,
    password,
    confirmPassword,
    profileImage
  })
    .then((response) => {
      return {
        data: null,
        status: response.status,
      }
    })
    .catch((error) => {
      return {
        data: error.response.data.message,
        status: error.response.status
      }
    }
  );
  return response;
}

export default userRegister;