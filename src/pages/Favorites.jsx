/* eslint-disable react/prop-types */
import { useState } from "react";
import { ClearFavorites, ConfirmClearFavoritesModal, ConfirmClearFavoritesModalButton, ConfirmClearFavoritesModalButtonsContainer, ConfirmClearFavoritesModalContainer, ConfirmClearFavoritesModalTitle, Container } from "../components/Main"
import PokeCard from "../components/PokeCard/PokeCard";
import { PokedexCardsContainer, PokedexContainer, PokedexTitle } from "../components/PokeCard/Pokedex"
import { useRef } from "react";
import { useEffect } from "react";
import usersAPI from "../api/usersAPI";
import { getItemWithExpiration } from "../hooks/handleSession";

const Favorites = ({ favorites, alter, setAlter, addFavorite, removeFavorite }) => {
  favorites.sort((a, b) => {
    if(a.id > b.id){
      return 1;
    } else return -1
  })
  const [isModal, setIsModal] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutsideModal = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutsideModal);

    return () => {
      document.addEventListener("mousedown", handleClickOutsideModal);
    };
  }, [setIsModal]);

  const handleRemoveAllFavorites = () => {
    usersAPI.put("favorites", {
      favorites: [],
    }, {
      headers: {
        Authorization: getItemWithExpiration("sessionID"),
      },
    })
      .then((response) => {
        console.log('Favorites cleared!\nStatus', response.status);
        setAlter(!alter);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <PokedexContainer style={{margin: "0 auto", padding: "16px"}}>
        <PokedexTitle style={{marginTop: "60px"}}>Favorites</PokedexTitle>
        <PokedexCardsContainer>
          {favorites?.map((pokemon) => (
            <PokeCard addFavorite={addFavorite} removeFavorite={removeFavorite} favorites={favorites} key={pokemon.id} id={pokemon.id} name={pokemon.name} />
          ))}
        </PokedexCardsContainer>
        <ClearFavorites onClick={() => setIsModal(true)} />
      </PokedexContainer>
      {isModal && (
        favorites.length > 0 ? (
          <ConfirmClearFavoritesModalContainer>
          <ConfirmClearFavoritesModal ref={modalRef}>
            <ConfirmClearFavoritesModalTitle>Are you sure you want to clear your favorites?</ConfirmClearFavoritesModalTitle>
            <ConfirmClearFavoritesModalButtonsContainer>
              <ConfirmClearFavoritesModalButton onClick={() => setIsModal(false)}>Cancel</ConfirmClearFavoritesModalButton>
              <ConfirmClearFavoritesModalButton onClick={() => {
                handleRemoveAllFavorites();
                setIsModal(false);
              }}>Clear</ConfirmClearFavoritesModalButton>
            </ConfirmClearFavoritesModalButtonsContainer>
          </ConfirmClearFavoritesModal>
        </ConfirmClearFavoritesModalContainer>
        ) : (
          <ConfirmClearFavoritesModalContainer>
          <ConfirmClearFavoritesModal ref={modalRef}>
            <ConfirmClearFavoritesModalTitle>You don&apos;t have any favorites to clear!</ConfirmClearFavoritesModalTitle>
            <ConfirmClearFavoritesModalButtonsContainer>
              <ConfirmClearFavoritesModalButton onClick={() => setIsModal(false)}>Ok</ConfirmClearFavoritesModalButton>
            </ConfirmClearFavoritesModalButtonsContainer>
          </ConfirmClearFavoritesModal>
        </ConfirmClearFavoritesModalContainer>
        )
      )}
    </Container>
  )
}

export default Favorites