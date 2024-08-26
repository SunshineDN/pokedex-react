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
      console.log(error)
      return {
        data: error?.response?.data?.message || 'An error occurred',
        status: error?.response?.status || 500,
      }
    }
  );
  return response;
}

export default userRegister;