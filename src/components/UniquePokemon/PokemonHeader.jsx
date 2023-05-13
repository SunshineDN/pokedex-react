/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"
import { PokemonDetailsBackIcon, PokemonDetailsFavorite, PokemonDetailsHeader, PokemonDetailsTitle } from "./Pokemon"
import handleChangeID from "../../hooks/handleChangeID";

const PokemonHeader = ({ name, id, isFavorite, setIsFavorite, addFavorite, removeFavorite}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    setIsFavorite(!isFavorite);
    if(!isFavorite) {
      addFavorite({
        id: Number(id),
        name: name
      })
    } else {
      removeFavorite(Number(id))
    }
  }

  return (
    <PokemonDetailsHeader>
      <PokemonDetailsBackIcon onClick={() => navigate("/main/home")} />
      <PokemonDetailsTitle>
        {name} #{handleChangeID(id)}
        <PokemonDetailsFavorite isfavorite={isFavorite.toString()} onClick={(e) => {
          handleClick();
          e.preventDefault();
          }} />
      </PokemonDetailsTitle>
    </PokemonDetailsHeader>
  )
}

export default PokemonHeader