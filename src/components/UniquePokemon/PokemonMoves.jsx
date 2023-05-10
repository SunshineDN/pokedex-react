/* eslint-disable react/prop-types */
import { Divider, PokemonDetailsInfoTypeIcon, PokemonDetailsInfoTypeTag, PokemonDetailsMovesContainer, PokemonDetailsMovesName, PokemonDetailsMovesTagContainer, PokemonDetailsMovesTitle, PokemonDetailsMovesWrapper } from "./Pokemon"

const PokemonMoves = ({ title, moves }) => {
  return (
    <PokemonDetailsMovesContainer>
      <PokemonDetailsMovesTitle>{title}</PokemonDetailsMovesTitle>
      {moves?.map((item, index) => (
        <PokemonDetailsMovesWrapper key={index}>
          <PokemonDetailsMovesName>{item?.name}</PokemonDetailsMovesName>
          <PokemonDetailsMovesTagContainer>
            <PokemonDetailsInfoTypeTag type={item?.type}>
              <PokemonDetailsInfoTypeIcon type={item?.type} />
              {item?.type}
            </PokemonDetailsInfoTypeTag>
          </PokemonDetailsMovesTagContainer>
          {(moves?.length > 1 && index < 3) && (
            <Divider />
          )}
        </PokemonDetailsMovesWrapper>
      ))}
    </PokemonDetailsMovesContainer>
  )
}

export default PokemonMoves