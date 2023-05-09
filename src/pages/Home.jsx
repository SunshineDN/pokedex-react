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
  LinkPokemon,
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

import handleChangeID from "../hooks/handleChangeID";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonsBkp, setPokemonsBkp] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  
  const navigate = useNavigate();
  
  function handleSearchPokemon() {
    const search = document?.querySelector('input')?.value?.split(" ")?.join("");
    const filter = pokemonsBkp.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(search.toLowerCase()) === true;
    });
    const sorted = filter.sort((a, b) => a.name < b.name ? -1 : true)
    
    if (search === document.querySelector("#initial > div.sc-ePzlA-D.kcZQfr > h1")?.textContent?.split(" ")?.pop()) {
      return;
    }

    if (search === '') {
      setPokemons(pokemonsBkp);
      setIsSearching(false);
      return;
    }

    if(filter.length === 0) {
      alert('Pokemon não encontrado');
      return;
    }
    setPokemons(sorted);
    setIsSearching(true);
  }

  useEffect(() => {
    const getPokemons = async () => {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=10000")
        .then((response) => response.json())
        .then((data) => {
          setPokemons(data.results);
          setPokemonsBkp(data.results);
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
                onClick={() => {
                  setPokemons(pokemonsBkp);
                  setIsSearching(false);
                } }
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
                <SearchButton onClick={
                  () => {
                    handleSearchPokemon();
                  }
                }>Search</SearchButton>
            </SearchInputBox>
          </SearchContainer>
          <PokedexContainer>
            <PokedexTitle>
              {isSearching ? `${pokemons.length} search results for: ${document.querySelector('input').value}` : 'All pokémon'}
            </PokedexTitle>
            <PokedexCardsContainer>
                {pokemons.map((pokemon) => (
                  <LinkPokemon to={`pokemon/${pokemon.url.split('/')[6]}`} key={pokemon.url.split('/')[6]} id={pokemon.url.split('/')[6]}>
                    <PokedexCard>
                      <PokedexCardId>#{handleChangeID(pokemon.url.split('/')[6])}</PokedexCardId>
                      <PokedexCardName>{pokemon.name}</PokedexCardName>
                      <PokedexCardImg
                          image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                          pokemon.url.split('/')[6]
                          }.png`}
                          alt={pokemon.name}
                      />
                    </PokedexCard>
                  </LinkPokemon>
                ))}
            </PokedexCardsContainer>
          </PokedexContainer>
        </HomeContainer>)}
    </Container>
  );
};

export default Home;
