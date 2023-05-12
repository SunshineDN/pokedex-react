import usersAPI from "../api/usersAPI";

const useValidateLogin = async (email, password) => {
  const response = await usersAPI.post("login", {
    email,
    password,
  })
    .then((response) => {
      return {
        data: response.data.token,
        status: response.status,
      };
    })
    .catch((error) => {
      return {
        data: error.response.data.message,
        status: error.response.status,
      };
    });
  return response;
}

export default useValidateLogin;