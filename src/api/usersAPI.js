import axios from "axios";

const usersAPI = axios.create({
  baseURL: "https://pokeusers-service.cyclic.app/users/",
});

export default usersAPI;