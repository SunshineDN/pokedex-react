import { useEffect, useState } from "react";
import {
  Divider,
  PokemonDetailsBackIcon,
  PokemonDetailsContainer,
  PokemonDetailsHeader,
  PokemonDetailsImg,
  PokemonDetailsImgBackground,
  PokemonDetailsImgContainer,
  PokemonDetailsInfoContainer,
  PokemonDetailsInfoDataContainer,
  PokemonDetailsInfoDataFrame,
  PokemonDetailsInfoDataTitle,
  PokemonDetailsInfoDataValue,
  PokemonDetailsInfoDesc,
  PokemonDetailsInfoTitle,
  PokemonDetailsInfoTypeWrapper,
  PokemonDetailsInfoTypeIcon,
  PokemonDetailsInfoTypeTag,
  PokemonDetailsInfoTypeTagContainer,
  PokemonDetailsInfoTypeTitle,
  PokemonDetailsInfoTypeWeaknessContainer,
  PokemonDetailsTitle,
  PokemonDetailsInfoTypeContainer,
  PokemonDetailsStatusBar,
  PokemonDetailsStatusBarContainer,
  PokemonDetailsStatusBarTitle,
  PokemonDetailsStatusContainer,
  PokemonDetailsStatusTitle,
  PokemonDetailsStatusBarProgress,
  PokemonDetailsStatusBarProgressValue,
  PokemonDetailsMovesContainer,
  PokemonDetailsMovesTitle,
  PokemonDetailsMovesName,
  PokemonDetailsMovesWrapper,
  PokemonDetailsMovesTagContainer,
  PokemonDetailsEvolutionContainer,
  PokemonDetailsEvolutionTitle,
  PokemonDetailsEvolutionWrapper,
  PokemonDetailsEvolutionBox,
  PokemonDetailsEvolutionImage,
  PokemonDetailsEvolutionName,
  PokemonDetailsInfoDataAbilitiesContainer,
  PokemonDetailsInfoDataAbilitiesIcon,
} from "../components/Pokemon";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import {
  Container,
  HeaderContainer,
  LogoutIcon,
  Title,
} from "../components/Main";
import { LinkPokemon } from "../components/Pokedex";

const PokemonDetails = () => {
  const [pokemon, setPokemon] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const descFiltered = pokemon?.species?.flavor_text_entries?.filter(
    (item) => item?.language?.name === "en"
  )[0]?.flavor_text;
  const generaFiltered = pokemon?.species?.genera
    ?.filter((item) => item?.language?.name === "en")[0]
    ?.genus.split(" ");

  function handleChangeStatsName(stats) {
    if (stats === "hp") {
      return "HP";
    }
    if (stats === "attack") {
      return "ATK";
    }
    if (stats === "defense") {
      return "DEF";
    }
    if (stats === "special-attack") {
      return "SATK";
    }
    if (stats === "special-defense") {
      return "SDEF";
    }
    if (stats === "speed") {
      return "SPD";
    }
  }

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then(async ({ abilities, id, name, height, weight, sprites, types, stats, moves, species }) => {

        abilities = await Promise.all(
          abilities.map(
            async (item) =>
              await fetch(item.ability.url)
                .then((response) => response.json())
                .then((data) => {
                  return {
                    name: data?.name,
                    effect: data?.effect_entries?.filter(
                      (item) => item?.language?.name === "en"
                    )[0]?.effect,
                  }
                })
          )
        );

        let weaknesses = await Promise.all(
          types.map(
            async (item) =>
              await fetch(item.type.url)
                .then((response) => response.json())
                .then((data) => {
                  return {
                    double_damage_from: data.damage_relations.double_damage_from,
                    half_damage_from: data.damage_relations.half_damage_from,
                    no_damage_from: data.damage_relations.no_damage_from,
                  };
                })
          )
        );

        let weakPart1 = weaknesses[0]?.double_damage_from.filter((item) => {
          return weaknesses[1]?.half_damage_from.filter((item2) => {
            return item.name === item2.name;
          }).length === 0;
        });

        weakPart1 = weakPart1?.filter((item) => {
          return weaknesses[1]?.no_damage_from.filter((item2) => {
            return item.name === item2.name;
          }).length === 0;
        });

        let weakPart2 = weaknesses[1]?.double_damage_from.filter((item) => {
          return weaknesses[0]?.half_damage_from.filter((item2) => {
            return item.name === item2.name;
          }).length === 0;
        });

        weakPart2 = weakPart2?.filter((item) => {
          return weaknesses[0]?.no_damage_from.filter((item2) => {
            return item.name === item2.name;
          }).length === 0;
        });

        weaknesses = weaknesses.length > 1 ? [...weakPart1, ...weakPart2] : weaknesses[0]?.double_damage_from;
        
        stats = stats.map((item) => {
          return {
            name: handleChangeStatsName(item?.stat?.name),
            value: item.base_stat,
          };
        });

        let movesFiltered = moves.filter(
          (item) => item.version_group_details[0].level_learned_at !== 0
        );
        moves = movesFiltered.slice(0, 4);
        let movesType = await Promise.all(
          moves.map(
            async (item) =>
              await fetch(item.move.url)
                .then((response) => response.json())
                .then((data) => {
                  return data.type.name;
                })
          )
        );
        moves = moves.map((item, index) => {
          return {
            name: item.move.name,
            type: movesType[index],
          };
        });
        
        species = await fetch(species.url)
        .then((response) => response.json())
        .then(({ evolution_chain, genera, flavor_text_entries }) => {
          return {
            evolution_chain,
            genera,
            flavor_text_entries
          }
        })

        let evolutionChain = await fetch(species.evolution_chain.url)
          .then((response) => response.json())
          .then(({ chain }) => {
            return {
              chain
            }
          })

        let firstEvolution = evolutionChain.chain.evolves_to.map((item) => {
          return item.species.name
        })

        let secondEvolution = evolutionChain.chain.evolves_to.map((item) => {
          return item.evolves_to.map((item) => {
            return item.species.name
          })
        })

        let evolution = [evolutionChain?.chain?.species?.name, ...firstEvolution, ...secondEvolution[0] || []]

        let evolutionData = await Promise.all(
          evolution.map(
            async (item) =>
              await fetch(`https://pokeapi.co/api/v2/pokemon/${item}`)
                .then((response) => response.json())
                .then(({ id, sprites, types, name }) => {
                  return {
                    id,
                    name,
                    sprites,
                    types
                  }
                }
              )
            )
          )
        
        evolution = evolutionData.map((item) => {
          return {
            id: item.id,
            name: item.name,
            sprite: item.sprites.other["official-artwork"].front_default,
            type: item.types[0].type.name,
            selected: item.name === name ? true : false
          }
        })

        species["evolution_chain"] = evolution

        const newData = {
          id: id,
          abilities: abilities,
          name: name,
          height: height,
          weight: weight,
          sprites: sprites,
          types: types,
          weaknesses: weaknesses.filter((item, index) => item?.name !== types[index]?.type?.name),
          stats: stats,
          moves: moves,
          species: species
        };
        setPokemon(newData);
      });
  }, [id]);

  if (!pokemon) {
    return <Loader position={"absolute"} />;
  }

  return (
    <Container id="initial">
      <HeaderContainer>
        <Title to="initial" spy={true} smooth={true} offset={0} duration={500}>
          Pokédex
        </Title>
        <LogoutIcon onClick={() => navigate("/login")} />
      </HeaderContainer>
      <PokemonDetailsContainer>
        <PokemonDetailsHeader>
          <PokemonDetailsBackIcon onClick={() => navigate("/home")} />
          <PokemonDetailsTitle>
            {pokemon.name} #{pokemon.id}
          </PokemonDetailsTitle>
        </PokemonDetailsHeader>
        <PokemonDetailsImgContainer>
          <PokemonDetailsImgBackground />
          <PokemonDetailsImg
            image={pokemon.sprites.other["official-artwork"].front_default}
          />
        </PokemonDetailsImgContainer>
        <PokemonDetailsInfoContainer>
          <PokemonDetailsInfoTitle>About</PokemonDetailsInfoTitle>
          <PokemonDetailsInfoDesc>
            &quot;{descFiltered.split(/[\n\f]/).join(" ")}&quot;
          </PokemonDetailsInfoDesc>
          <PokemonDetailsInfoDataContainer>
            <PokemonDetailsInfoDataFrame>
              <PokemonDetailsInfoDataTitle>Height</PokemonDetailsInfoDataTitle>
              <PokemonDetailsInfoDataValue>
                {(pokemon.height / 3.281).toFixed(2)} m
              </PokemonDetailsInfoDataValue>
            </PokemonDetailsInfoDataFrame>
            <PokemonDetailsInfoDataFrame>
              <PokemonDetailsInfoDataTitle>
                Category
              </PokemonDetailsInfoDataTitle>
              <PokemonDetailsInfoDataValue>
                {generaFiltered[0]}
              </PokemonDetailsInfoDataValue>
            </PokemonDetailsInfoDataFrame>
            <PokemonDetailsInfoDataFrame>
              <PokemonDetailsInfoDataTitle>Weight</PokemonDetailsInfoDataTitle>
              <PokemonDetailsInfoDataValue>
                {(pokemon.weight / 2.205).toFixed(2)} kg
              </PokemonDetailsInfoDataValue>
            </PokemonDetailsInfoDataFrame>
            <PokemonDetailsInfoDataFrame>
              <PokemonDetailsInfoDataTitle>Gender</PokemonDetailsInfoDataTitle>
              <PokemonDetailsInfoDataValue>
                [Coming soon...]
              </PokemonDetailsInfoDataValue>
            </PokemonDetailsInfoDataFrame>
            <PokemonDetailsInfoDataFrame>
              <PokemonDetailsInfoDataTitle>Abilities</PokemonDetailsInfoDataTitle>
              <PokemonDetailsInfoDataAbilitiesContainer>
                {pokemon.abilities.map((item, index) => (
                  <PokemonDetailsInfoDataValue key={index}>
                    <abbr title={item?.effect} style={{
                      cursor: "help"
                    }}>
                      {item?.name?.charAt(0)?.toUpperCase() + item?.name?.slice(1)}
                      <PokemonDetailsInfoDataAbilitiesIcon />
                    </abbr>
                  </PokemonDetailsInfoDataValue>
                ))}
              </PokemonDetailsInfoDataAbilitiesContainer>
            </PokemonDetailsInfoDataFrame>
          </PokemonDetailsInfoDataContainer>
          <Divider />
          <PokemonDetailsInfoTypeWeaknessContainer>
            <PokemonDetailsInfoTypeWrapper>
              <PokemonDetailsInfoTypeTitle>Type</PokemonDetailsInfoTypeTitle>
              {pokemon.types.map((item, index) => (
                <PokemonDetailsInfoTypeTagContainer key={index}>
                  <PokemonDetailsInfoTypeTag type={item?.type?.name}>
                    <PokemonDetailsInfoTypeIcon type={item?.type?.name} />
                    {item?.type?.name}
                  </PokemonDetailsInfoTypeTag>
                </PokemonDetailsInfoTypeTagContainer>
              ))}
            </PokemonDetailsInfoTypeWrapper>
            <PokemonDetailsInfoTypeWrapper>
              <PokemonDetailsInfoTypeTitle>
                Weakness
              </PokemonDetailsInfoTypeTitle>
              <PokemonDetailsInfoTypeContainer>
                {pokemon.weaknesses
                  .filter(
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
          </PokemonDetailsInfoTypeWeaknessContainer>
        </PokemonDetailsInfoContainer>
        <PokemonDetailsStatusContainer>
          <PokemonDetailsStatusTitle>Stats</PokemonDetailsStatusTitle>
          {pokemon.stats.map((item, index) => (
            <PokemonDetailsStatusBarContainer key={index}>
              <PokemonDetailsStatusBarTitle>
                {item.name}
              </PokemonDetailsStatusBarTitle>
              <PokemonDetailsStatusBar>
                <PokemonDetailsStatusBarProgress
                  value={item.value}
                  type={pokemon?.types[0]?.type?.name}
                >
                  <PokemonDetailsStatusBarProgressValue
                    type={pokemon?.types[0]?.type?.name}
                  >
                    {item.value}/255
                  </PokemonDetailsStatusBarProgressValue>
                </PokemonDetailsStatusBarProgress>
              </PokemonDetailsStatusBar>
            </PokemonDetailsStatusBarContainer>
          ))}
        </PokemonDetailsStatusContainer>
        <PokemonDetailsMovesContainer>
          <PokemonDetailsMovesTitle>Moves</PokemonDetailsMovesTitle>
          {pokemon.moves.map((item, index) => (
            <PokemonDetailsMovesWrapper key={index}>
              <PokemonDetailsMovesName>{item?.name}</PokemonDetailsMovesName>
              <PokemonDetailsMovesTagContainer>
                <PokemonDetailsInfoTypeTag type={item?.type}>
                  <PokemonDetailsInfoTypeIcon type={item?.type} />
                  {item?.type}
                </PokemonDetailsInfoTypeTag>
              </PokemonDetailsMovesTagContainer>
              {(pokemon.moves.length > 1 && index < 3) && (
                <Divider />
              )}
            </PokemonDetailsMovesWrapper>
          ))}
        </PokemonDetailsMovesContainer>
        <PokemonDetailsEvolutionContainer>
          <PokemonDetailsEvolutionTitle>Evolution</PokemonDetailsEvolutionTitle>
          <PokemonDetailsEvolutionWrapper>
            {pokemon.species.evolution_chain.map((item) => (
              <LinkPokemon key={item?.id} to={`/pokemon/${item?.id}`}>
                <PokemonDetailsEvolutionBox type={item?.type} selected={item?.selected} >
                  <PokemonDetailsEvolutionImage image={item?.sprite} />
                  <PokemonDetailsEvolutionName>{item?.name}</PokemonDetailsEvolutionName>
                  <PokemonDetailsInfoTypeTag type={item?.type}>
                    <PokemonDetailsInfoTypeIcon type={item?.type} />
                    {item?.type}
                  </PokemonDetailsInfoTypeTag>
                </PokemonDetailsEvolutionBox>
              </LinkPokemon>
            ))}
          </PokemonDetailsEvolutionWrapper>
        </PokemonDetailsEvolutionContainer>
      </PokemonDetailsContainer>
    </Container>
  );
};

export default PokemonDetails;
