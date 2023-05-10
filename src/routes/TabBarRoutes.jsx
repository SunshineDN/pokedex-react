import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Favorites from "../pages/Favorites";
import Adjust from "../pages/Adjust";
import Profile from "../pages/Profile";
import PokemonDetails from "../pages/PokemonDetails";
import { useState } from "react";
import { useEffect } from "react";


const TabBarRoutes = () => {
  const [fav, setFav] = useState(
    window.localStorage.getItem("favorites") ?
    JSON.parse(window.localStorage.getItem("favorites")) : []
  );

  useEffect(() => {
    window.localStorage.setItem("favorites", JSON.stringify(fav));
  }, [fav])

  function handleAddFav(pokemon) {
    if(fav.find((item) => item.id.toString() === pokemon.id.toString())){
      console.log("Retornou, já existe")
      return;
    }
    setFav([...fav, pokemon]);
  }

  function handleRemoveFav(pokemonID) {
    console.log(fav)
    setFav(fav.filter((item) => item.id !== pokemonID))
  }

  return (
    <Routes>
      <Route path="/home" element={<Home favorites={fav} addFavorite={handleAddFav} removeFavorite={handleRemoveFav} />} />
      <Route path="/favorites" element={<Favorites favorites={fav} addFavorite={handleAddFav} removeFavorite={handleRemoveFav} />} />
      <Route path="/adjust" element={<Adjust />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/home/pokemon/:id" element={<PokemonDetails favorites={fav} addFavorite={handleAddFav} removeFavorite={handleRemoveFav} />} />
    </Routes>
  )
}

export default TabBarRoutes