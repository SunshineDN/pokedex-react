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
  const [alter, setAlter] = useState(false);
  
  useEffect(() => {
    console.log("Favoritos carregados!")
    const token = getItemWithExpiration("sessionID");
    const getFavorites = async () => {
      await usersAPI.get("favorites", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        const check = response.data.favorites.map((item) => {
          return {
            id: Number(item.id),
            name: item.name,
          }
        });
        setFav(check);
        // console.log("response in getFavorites(): ", check);
        window.localStorage.setItem("favorites", JSON.stringify(check));
        return;
        })
        .catch((error) => {
          console.log("error in getFavorites(): " + error?.response?.data);
          if (error?.response?.data?.message === "Não autorizado!"){
            window.localStorage.removeItem("sessionID");
            window.location.reload();
          }
          return;
        });
    };
    getFavorites();
  }, [alter]);

  function handleAddFav(pokemon) {
    // console.log("Adicionado pokemonID:", pokemon.id)
    if(fav.find((item) => item.id.toString() === pokemon.id.toString())){
      // console.log("Retornou, já existe")
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
        .then(() => {
          // console.log("response in addFavorite(): ", response.status);
          setAlter(!alter);
        })
        .catch((error) => {
          console.log("error in addFavorite(): " + error);
        });
    }
    addFavorite();
  }

  function handleRemoveFav(pokemonID) {
    // console.log("Removido pokemonID:", pokemonID)
    setFav(fav.filter((item) => item.id !== pokemonID))
    const token = getItemWithExpiration("sessionID");
    const removeFavorite = async () => {
      await usersAPI.put("favorites", {favorites: fav.filter((item) => item.id !== pokemonID)}, {
        headers: {
          Authorization: token,
        },
      })
        .then(() => {
          // console.log("response in removeFavorite(): ", response.data.favorites);
          setAlter(!alter);
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
        <Route path="/favorites" element={<Favorites favorites={fav} alter={alter} setAlter={setAlter} addFavorite={handleAddFav} removeFavorite={handleRemoveFav} />} />
        <Route path="/adjust" element={<Adjust />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/home/pokemon/:id" element={<PokemonDetails favorites={fav} addFavorite={handleAddFav} removeFavorite={handleRemoveFav} />} />
      </Route>
    </Routes>
  )
}

export default TabBarRoutes;