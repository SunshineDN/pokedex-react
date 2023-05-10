/* eslint-disable react/prop-types */
import { Link } from "react-scroll"
import { PokemonDetailsEvolutionBox, PokemonDetailsEvolutionContainer, PokemonDetailsEvolutionImage, PokemonDetailsEvolutionName, PokemonDetailsEvolutionTitle, PokemonDetailsEvolutionWrapper, PokemonDetailsInfoTypeIcon, PokemonDetailsInfoTypeTag } from "./Pokemon"
import { useNavigate } from "react-router-dom"

const PokemonEvolutions = ({ title, evolutions }) => {
  const navigate = useNavigate();
  
  return (
    <PokemonDetailsEvolutionContainer>
      <PokemonDetailsEvolutionTitle>{title}</PokemonDetailsEvolutionTitle>
      <PokemonDetailsEvolutionWrapper>
        {evolutions?.map((item) => (
          <Link key={item?.id} to="initial" spy={true} smooth={true} offset={0} duration={1500} onClick={() => navigate(`/main/home/pokemon/${item?.id}`)} style={{textDecoration: "none", cursor: "pointer", userSelect: "none"}}>
            <PokemonDetailsEvolutionBox type={item?.type} selected={item?.selected} to="initial" spy={true} smooth={true} offset={0} duration={500} >
              <PokemonDetailsEvolutionImage image={item?.sprite} />
              <PokemonDetailsEvolutionName>{item?.name}</PokemonDetailsEvolutionName>
              <PokemonDetailsInfoTypeTag type={item?.type}>
                <PokemonDetailsInfoTypeIcon type={item?.type} />
                {item?.type}
              </PokemonDetailsInfoTypeTag>
            </PokemonDetailsEvolutionBox>
          </Link>
        ))}
      </PokemonDetailsEvolutionWrapper>
    </PokemonDetailsEvolutionContainer>
  )
}

export default PokemonEvolutions