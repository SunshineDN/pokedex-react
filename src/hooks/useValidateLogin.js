import usersAPI from "../api/usersAPI";

const useValidateLogin = async (email, password) => {
  const response = await usersAPI.post("login", {
    email,
    password,
  })
    .then((response) => {
      console.log(response)
      return {
        data: response.data.token,
        status: response.status,
      };
    })
    .catch((error) => {
      console.log(error)
      return {
        data: error?.response?.data?.message || 'An error occurred',
        status: error?.response?.status || 500,
      };
    });
  return response;
}

export default useValidateLogin;
