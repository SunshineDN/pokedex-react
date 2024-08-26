import axios from "axios";
import https from "https";

const usersAPI = axios.create({
  baseURL: "http://aiatende.com:8001/users/",
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

export default usersAPI;