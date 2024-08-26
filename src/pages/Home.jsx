/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import {
  Container,
  HomeContainer,
  ImgHeaderContainer,
  ImgHeader,
} from "../components/Main";

import {
  PokedexCardsContainer,
  PokedexContainer,
  PokedexTitle,
} from "../components/PokeCard/Pokedex";
import SearchComponent from "../components/Search/SearchComponent";
import Loader from "../components/Loader/Loader";
import PokeCard from "../components/PokeCard/PokeCard";
import usersAPI from "../api/usersAPI";
import { getItemWithExpiration } from "../hooks/handleSession";

const Home = ({ favorites, addFavorite, removeFavorite }) => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonsBkp, setPokemonsBkp] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [page, setPage] = useState(0);
  const [itemsPerPage] = useState(100);
  const [error, setError] = useState("");

  const start = page * itemsPerPage;
  const end = start + itemsPerPage;

  const visiblePokemons = pokemons.slice(0, end);

  useEffect(() => {
    const token = getItemWithExpiration("sessionID");
    const getUser = async () => {
      await usersAPI.get("data", {
        headers: {
          Authorization: token,
        },
      })
        .then((response) => {
          window.localStorage.setItem("user", JSON.stringify(response.data.user));
        })
        .catch((error) => {
          console.log("error in getUser(): " + error);
          if (error?.response?.data?.message === "Não autorizado!") {
            window.localStorage.removeItem("sessionID");
            window.location.reload();
          }
        });
    };
    getUser();
  }, []);
  
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
      setError("No results found");
      return;
    }
    setPokemons(sorted);
    setIsSearching(true);
  }
  
  
  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop <=
      document.documentElement.offsetHeight - 500
    )
      return;
    setPage(page + 1);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // remove o event listener quando o componente é desmontado
    return () => window.removeEventListener("scroll", handleScroll);
  });

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
          <ImgHeaderContainer>
            <ImgHeader></ImgHeader>
          </ImgHeaderContainer>
          <SearchComponent handleSearchPokemon={handleSearchPokemon} error={error} setError={setError}/>
          <PokedexContainer>
            <PokedexTitle>
              {isSearching ? `${pokemons.length} search results for: ${document.querySelector('input').value}` : 'All pokémon'}
            </PokedexTitle>
            <PokedexCardsContainer>
                {visiblePokemons.map((pokemon) => (
                  <PokeCard addFavorite={addFavorite} removeFavorite={removeFavorite} favorites={favorites} key={pokemon.url.split('/')[6]} id={pokemon.url.split('/')[6]} name={pokemon.name} />
                ))}
            </PokedexCardsContainer>
          </PokedexContainer>
        </HomeContainer>)}
    </Container>
  );
};

export default Home;
