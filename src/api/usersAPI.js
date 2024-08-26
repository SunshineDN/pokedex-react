import axios from "axios";
import https from "https";

https.globalAgent.options.rejectUnauthorized = false
const usersAPI = axios.create({
  baseURL: "http://aiatende.com:8001/users/",
});

export default usersAPI;