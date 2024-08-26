import axios from "axios";
import https from "https";

const usersAPI = axios.create({
  httpsAgent: new https.Agent({ rejectUnauthorized: false }),
  baseURL: "http://aiatende.com:8001/users/",
});

export default usersAPI;