import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Favorites from "../pages/Favorites";
import Adjust from "../pages/Adjust";
import Profile from "../pages/Profile";
import PokemonDetails from "../pages/PokemonDetails";
import { useState } from "react";
import { useEffect } from "react";
import ProtectedRoute from "./ProtectedRoute";
import usersAPI from "../api/usersAPI";
import { getItemWithExpiration } from "../hooks/handleSession";


const TabBarRoutes = () => {
  const [fav, setFav] = useState([]);
  
  useEffect(() => {
    const token = getItemWithExpiration("sessionID");
    const getFavorites = async () => {
      await usersAPI.get("favorites", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setFav(response?.data?.favorites);
        window.localStorage.setItem("favorites", JSON.stringify(fav));
        return;
        })
        .catch((error) => {
          console.log("error in getFavorites(): " + error);
          return;
        });
    };
    getFavorites();
  }, [fav]);

  function handleAddFav(pokemon) {
    if(fav.find((item) => item.id.toString() === pokemon.id.toString())){
      console.log("Retornou, já existe")
      return;
    }
    
    setFav([...fav, pokemon]);
    const token = getItemWithExpiration("sessionID");
    const addFavorite = async () => {
      await usersAPI.put("favorites", {favorites: [...fav, pokemon]}, {
        headers: {
          Authorization: token,
        },
      })
        .then((response) => {
          console.log("response in addFavorite(): ", response.status);
        })
        .catch((error) => {
          console.log("error in addFavorite(): " + error);
        });
    }
    addFavorite();
  }

  function handleRemoveFav(pokemonID) {
    setFav(fav.filter((item) => item.id !== pokemonID))
    const token = getItemWithExpiration("sessionID");
    const removeFavorite = async () => {
      await usersAPI.put("favorites", {favorites: fav.filter((item) => item.id !== pokemonID)}, {
        headers: {
          Authorization: token,
        },
      })
        .then((response) => {
          console.log("response in removeFavorite(): ", response.status);
        })
        .catch((error) => {
          console.log("error in removeFavorite(): " + error);
        });
    }
    removeFavorite();
  }

  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path="/home" element={<Home favorites={fav} addFavorite={handleAddFav} removeFavorite={handleRemoveFav} />} />
        <Route path="/favorites" element={<Favorites favorites={fav} addFavorite={handleAddFav} removeFavorite={handleRemoveFav} />} />
        <Route path="/adjust" element={<Adjust />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/home/pokemon/:id" element={<PokemonDetails favorites={fav} addFavorite={handleAddFav} removeFavorite={handleRemoveFav} />} />
      </Route>
    </Routes>
  )
}

export default TabBarRoutes;