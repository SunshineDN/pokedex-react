import axios from "axios";

const usersAPI = axios.create({
  baseURL: "https://pokedex-react-thl7.onrender.com/users/"
});

export default usersAPI;