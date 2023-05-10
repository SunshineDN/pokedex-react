/* eslint-disable react/prop-types */
import { PokemonDetailsImg, PokemonDetailsImgBackground, PokemonDetailsImgContainer, PokemonDetailsImgSwitch } from "./Pokemon"

const PokemonImgContainer = ({ isShiny, sprite_default, sprite_shiny, setIsShiny }) => {
  return (
    <PokemonDetailsImgContainer>
      <PokemonDetailsImgBackground />
      <PokemonDetailsImg
        image={!isShiny ? sprite_default : sprite_shiny}
      />
      <PokemonDetailsImgSwitch onClick={() => setIsShiny(!isShiny)} />
    </PokemonDetailsImgContainer>
  )
}

export default PokemonImgContainer;