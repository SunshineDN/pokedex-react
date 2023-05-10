/* eslint-disable react/prop-types */
import { PokemonDetailsInfoTypeContainer, PokemonDetailsInfoTypeIcon, PokemonDetailsInfoTypeTag, PokemonDetailsInfoTypeTagContainer, PokemonDetailsInfoTypeTitle, PokemonDetailsInfoTypeWrapper } from "./Pokemon"

const PokemonTypeWeakness = ({ title, types, weaknesses }) => {
  return (
    <>
      {!weaknesses ? (
        <PokemonDetailsInfoTypeWrapper>
          <PokemonDetailsInfoTypeTitle>{title}</PokemonDetailsInfoTypeTitle>
          {types?.map((item, index) => (
            <PokemonDetailsInfoTypeTagContainer key={index}>
              <PokemonDetailsInfoTypeTag type={item?.type?.name}>
                <PokemonDetailsInfoTypeIcon type={item?.type?.name} />
                {item?.type?.name}
              </PokemonDetailsInfoTypeTag>
            </PokemonDetailsInfoTypeTagContainer>
          ))}
        </PokemonDetailsInfoTypeWrapper>
      ): (
        <PokemonDetailsInfoTypeWrapper>
          <PokemonDetailsInfoTypeTitle>
            {title}
          </PokemonDetailsInfoTypeTitle>
          <PokemonDetailsInfoTypeContainer>
            {weaknesses
              ?.filter(
                (obj, index, self) =>
                  index ===
                  self.findIndex(
                    (t) => t.id === obj.id && t.name === obj.name
                  )
              )
              .map((item, index) => (
                <PokemonDetailsInfoTypeTagContainer key={index}>
                  <PokemonDetailsInfoTypeTag type={item?.name}>
                    <PokemonDetailsInfoTypeIcon type={item?.name} />
                    {item?.name}
                  </PokemonDetailsInfoTypeTag>
                </PokemonDetailsInfoTypeTagContainer>
              ))}
          </PokemonDetailsInfoTypeContainer>
        </PokemonDetailsInfoTypeWrapper>
      )}
    </>
  )
}

export default PokemonTypeWeakness