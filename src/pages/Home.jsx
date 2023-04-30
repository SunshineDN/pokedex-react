import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  HeaderContainer,
  LogoutIcon,
  Title,
  Container,
  HomeContainer,
  ImgHeaderContainer,
  ImgHeader,
} from "../components/Main";
import {
  PokedexCard,
  PokedexCardId,
  PokedexCardImg,
  PokedexCardName,
  PokedexCardsContainer,
  PokedexContainer,
  PokedexTitle,
} from "../components/Pokedex";

import {
  SearchButton,
  SearchContainer,
  SearchIcon,
  SearchInput,
  SearchInputBox,
  SearchTitle,
} from "../components/SearchPoke";
import Loader from "../components/Loader/Loader";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getPokemons = async () => {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
        .then((response) => response.json())
        .then((data) => {
          setPokemons(data.results);
        });
    };
    getPokemons();
  }, []);

  return (
    <Container>
        {pokemons.length === 0 ? (
        <Loader position={"absolute"} />
        ) : (
        <HomeContainer id="initial">
            <HeaderContainer>
            <Title
                to="initial"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >
                Pokédex
            </Title>
            <LogoutIcon onClick={() => navigate('/login')} />
            </HeaderContainer>
            <ImgHeaderContainer>
            <ImgHeader></ImgHeader>
            </ImgHeaderContainer>
            <SearchContainer>
            <SearchTitle>What Pokémon are you looking for?</SearchTitle>
            <SearchInputBox>
                <SearchInput type="text" placeholder="Search" />
                <SearchIcon />
                <SearchButton>Search</SearchButton>
            </SearchInputBox>
            </SearchContainer>
            <PokedexContainer>
            <PokedexTitle>Todos os pokémons</PokedexTitle>
            <PokedexCardsContainer>
                {pokemons.map((pokemon, index) => (
                    <PokedexCard key={index}>
                    <PokedexCardId>#{index + 1}</PokedexCardId>
                    <PokedexCardName>{pokemon.name}</PokedexCardName>
                    <PokedexCardImg
                        image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                        index + 1
                        }.png`}
                        alt={pokemon.name}
                    />
                    </PokedexCard>
                ))}
            </PokedexCardsContainer>
            </PokedexContainer>
        </HomeContainer>)}
    </Container>
  );
};

export default Home;
