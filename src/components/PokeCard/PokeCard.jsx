/* eslint-disable react/prop-types */
import { useState } from "react";
import handleChangeID from "../../hooks/handleChangeID"
import { LinkPokemon, PokedexCard, PokedexCardId, PokedexCardImg, PokedexCardName, PokedexFavorite } from "./Pokedex"

const PokeCard = ({ id, name, favorites, addFavorite, removeFavorite }) => {
  //Verifica se o pokemon é favorito
  const [isFavorite, setIsFavorite] = useState(favorites.filter((item) => item.id.toString() === id.toString()).length > 0 ? true : false)

  const handleClick = () => {
    setIsFavorite(!isFavorite);
    if(!isFavorite) {
      addFavorite({
        id: Number(id),
        name: name
      })
      console.log("Adicionou")
    } else {
      removeFavorite(Number(id))
      console.log("Removeu")
    }
  }

  return (
    <LinkPokemon to={`/main/home/pokemon/${id}`} key={id} id={id}>
      <PokedexCard>
        <PokedexCardId>#{handleChangeID(id)}</PokedexCardId>
        <PokedexCardName>{name}</PokedexCardName>
        <PokedexFavorite isfavorite={isFavorite.toString()} onClick={(e) => {
          handleClick();
          e.preventDefault();
          }} />
        <PokedexCardImg
            image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
            id
            }.png`}
            alt={name}
        />
      </PokedexCard>
    </LinkPokemon>
  )
}

export default PokeCard