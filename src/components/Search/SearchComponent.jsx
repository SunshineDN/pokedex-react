/* eslint-disable react/prop-types */
import { SearchButton, SearchContainer, SearchIcon, SearchInput, SearchInputBox, SearchTitle } from "./SearchPoke";

const SearchComponent = ({ handleSearchPokemon }) => {
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
    </SearchContainer>
  )
}

export default SearchComponent