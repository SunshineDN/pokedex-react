/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  Divider,
  PokemonDetailsContainer,
  PokemonDetailsInfoContainer,
  PokemonDetailsInfoDataContainer,
  PokemonDetailsInfoDesc,
  PokemonDetailsInfoTitle,
  PokemonDetailsInfoTypeWeaknessContainer,
} from "../components/UniquePokemon/Pokemon";
import PokemonImgContainer from "../components/UniquePokemon/PokemonImgContainer";
import PokemonDataFrame from "../components/UniquePokemon/PokemonDataFrame";
import PokemonHeader from "../components/UniquePokemon/PokemonHeader";
import PokemonTypeWeakness from "../components/UniquePokemon/PokemonTypeWeakness";
import PokemonStatus from "../components/UniquePokemon/PokemonStatus";
import PokemonMoves from "../components/UniquePokemon/PokemonMoves";
import PokemonEvolutions from "../components/UniquePokemon/PokemonEvolutions";
import Loader from "../components/Loader/Loader";
import { Container } from "../components/Main";

const PokemonDetails = ({ favorites, addFavorite, removeFavorite }) => {
  const [pokemon, setPokemon] = useState(null);
  const { id } = useParams();
  const [abilityModal, setAbilityModal] = useState(false);
  const [isShiny, setIsShiny] = useState(false);
  const [isFavorite, setIsFavorite] = useState(favorites.filter((item) => item.id.toString() === id.toString()).length > 0 ? true : false);
  
  useEffect(() => {
    setIsFavorite(favorites.filter((item) => item.id.toString() === id.toString()).length > 0 ? true : false);
  }, [favorites, id])

  const descFiltered = pokemon?.species?.flavor_text_entries?.filter(
    (item) => item?.language?.name === "en"
  )[0]?.flavor_text;
  const generaFiltered = pokemon?.species?.genera
    ?.filter((item) => item?.language?.name === "en")[0]
    ?.genus?.split(" ");

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
          });

        let firstEvolution = evolutionChain.chain.evolves_to.map((item) => {
          return item.species.url.split('/')[6]
        })

        let secondEvolution = evolutionChain.chain.evolves_to.map((item) => {
          return item.evolves_to.map((item) => {
            return item.species.url.split('/')[6]
          })
        })

        let evolution = [evolutionChain?.chain?.species?.url.split('/')[6], ...firstEvolution, ...secondEvolution[0] || []]

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
              .catch((error) => console.log(error))
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
      <PokemonDetailsContainer>
        <PokemonHeader removeFavorite={removeFavorite} addFavorite={addFavorite} name={pokemon?.name} id={pokemon?.id} isFavorite={isFavorite} setIsFavorite={setIsFavorite} />
        <PokemonImgContainer isShiny={isShiny} sprite_default={pokemon?.sprites?.other["official-artwork"]?.front_default} sprite_shiny={pokemon?.sprites?.other["official-artwork"]?.front_shiny} setIsShiny={setIsShiny} />
        
        <PokemonDetailsInfoContainer>
          <PokemonDetailsInfoTitle>About</PokemonDetailsInfoTitle>
          <PokemonDetailsInfoDesc>
            &quot;{descFiltered?.length > 0 ? descFiltered?.split(/[\n\f]/)?.join(" ") : "Unknown"}&quot;
          </PokemonDetailsInfoDesc>

          <PokemonDetailsInfoDataContainer>
            <PokemonDataFrame title={"Height"} value={`${(pokemon?.height / 10).toFixed(2)} m`} />
            <PokemonDataFrame title={"Category"} value={generaFiltered?.length > 0 ? generaFiltered[0] : "Unknown"} />
            <PokemonDataFrame title={"Weight"} value={`${(pokemon?.weight / 10).toFixed(2)} kg`} />
            <PokemonDataFrame title={"Gender"} value={`[Coming soon...]`} />
            <PokemonDataFrame title={"Abilities"} abilities={pokemon?.abilities} abilityModal={abilityModal} setAbilityModal={setAbilityModal} />
          </PokemonDetailsInfoDataContainer>

          <Divider />

          <PokemonDetailsInfoTypeWeaknessContainer>
            <PokemonTypeWeakness title={"Type"} types={pokemon?.types} />
            <PokemonTypeWeakness title={"Weakness"} weaknesses={pokemon?.weaknesses} />
          </PokemonDetailsInfoTypeWeaknessContainer>

        </PokemonDetailsInfoContainer>
        <PokemonStatus title={"Stats"} stats={pokemon?.stats} type={pokemon?.types[0]?.type?.name} maxValue={255} />
        <PokemonMoves title={"Moves"} moves={pokemon?.moves} />
        <PokemonEvolutions title={"Evolution chain"} evolutions={pokemon?.species?.evolution_chain} />
      </PokemonDetailsContainer>

    </Container>
  );
};

export default PokemonDetails;