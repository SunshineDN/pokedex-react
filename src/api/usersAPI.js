import axios from "axios";

const usersAPI = axios.create({
  baseURL: "http://aiatende.com:8000/users/"
});

export default usersAPI;