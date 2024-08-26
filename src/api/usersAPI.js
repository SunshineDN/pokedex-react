import axios from "axios";

const usersAPI = axios.create({
  baseURL: "//aiatende.com:8001/users/",
});

export default usersAPI;