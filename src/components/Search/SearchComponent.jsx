/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { SearchButton, SearchContainer, SearchErrorBox, SearchErrorText, SearchIcon, SearchInput, SearchInputBox, SearchTitle } from "./SearchPoke";

const SearchComponent = ({ handleSearchPokemon, error, setError }) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      setError("");
    }, 1800);
    return () => clearTimeout(timer);
  }, [error, setError]);

  return (
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
      {error &&
        <SearchErrorBox>
          <SearchErrorText>{error}</SearchErrorText>
        </SearchErrorBox>}
    </SearchContainer>
  )
}

export default SearchComponent