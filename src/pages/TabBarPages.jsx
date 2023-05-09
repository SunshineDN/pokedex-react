import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Favorites from "./Favorites";
import Adjust from "./Adjust";
import Profile from "./Profile";
import PokemonDetails from "./PokemonDetails";


const TabBarPages = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/adjust" element={<Adjust />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/home/pokemon/:id" element={<PokemonDetails />} />
    </Routes>
  )
}

export default TabBarPages