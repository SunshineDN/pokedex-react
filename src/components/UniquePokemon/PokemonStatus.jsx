/* eslint-disable react/prop-types */
import { PokemonDetailsStatusBar, PokemonDetailsStatusBarContainer, PokemonDetailsStatusBarProgress, PokemonDetailsStatusBarProgressValue, PokemonDetailsStatusBarTitle, PokemonDetailsStatusContainer, PokemonDetailsStatusTitle } from "./Pokemon"

const PokemonStatus = ({ title, stats, type, maxValue }) => {
  return (
    <PokemonDetailsStatusContainer>
      <PokemonDetailsStatusTitle>{title}</PokemonDetailsStatusTitle>
      {stats?.map((item, index) => (
        <PokemonDetailsStatusBarContainer key={index}>
          <PokemonDetailsStatusBarTitle>
            {item?.name}
          </PokemonDetailsStatusBarTitle>
          <PokemonDetailsStatusBar>
            <PokemonDetailsStatusBarProgress
              value={item?.value}
              type={type}
            >
              <PokemonDetailsStatusBarProgressValue
                type={type}
              >
                {item?.value}/{maxValue}
              </PokemonDetailsStatusBarProgressValue>
            </PokemonDetailsStatusBarProgress>
          </PokemonDetailsStatusBar>
        </PokemonDetailsStatusBarContainer>
      ))}
    </PokemonDetailsStatusContainer>
  )
}

export default PokemonStatus