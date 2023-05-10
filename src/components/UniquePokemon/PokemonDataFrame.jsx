/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { PokemonDetailsInfoDataAbilitiesContainer, PokemonDetailsInfoDataAbilitiesIcon, PokemonDetailsInfoDataAbilitiesModalClose, PokemonDetailsInfoDataAbilitiesModalContainer, PokemonDetailsInfoDataAbilitiesModalDescription, PokemonDetailsInfoDataAbilitiesModalName, PokemonDetailsInfoDataAbilitiesModalTitle, PokemonDetailsInfoDataAbilitiesModalValues, PokemonDetailsInfoDataAbilitiesModalWrapper, PokemonDetailsInfoDataFrame, PokemonDetailsInfoDataTitle, PokemonDetailsInfoDataValue } from "./Pokemon"
import { useRef } from "react";

const PokemonDataFrame = ({ title, value, abilities, setAbilityModal, abilityModal }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutsideModal = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setAbilityModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutsideModal);

    return () => {
      document.addEventListener("mousedown", handleClickOutsideModal);
    };
  }, [setAbilityModal]);
  
  return (
    <>
      {!abilities ? (
        <PokemonDetailsInfoDataFrame>
          <PokemonDetailsInfoDataTitle>{title}</PokemonDetailsInfoDataTitle>
          <PokemonDetailsInfoDataValue>
            {value}
          </PokemonDetailsInfoDataValue>
        </PokemonDetailsInfoDataFrame>
      ) : (
        <PokemonDetailsInfoDataFrame>
              <PokemonDetailsInfoDataTitle>{title}</PokemonDetailsInfoDataTitle>
              <PokemonDetailsInfoDataAbilitiesContainer>
                {abilities?.map((item, index) => (
                  <PokemonDetailsInfoDataValue key={index} onClick={() => {
                    setAbilityModal(true)
                  }}>
                    <abbr title={item?.effect} style={{
                      cursor: "help"
                    }}>
                      {item?.name?.charAt(0)?.toUpperCase() + item?.name?.slice(1)}
                      <PokemonDetailsInfoDataAbilitiesIcon />
                    </abbr>
                  </PokemonDetailsInfoDataValue>
                ))}
                {abilityModal && (
                  <PokemonDetailsInfoDataAbilitiesModalContainer>
                    <PokemonDetailsInfoDataAbilitiesModalWrapper ref={modalRef}>
                    <PokemonDetailsInfoDataAbilitiesModalTitle>{title}</PokemonDetailsInfoDataAbilitiesModalTitle>
                    {abilities?.map((item, index) => (
                      <PokemonDetailsInfoDataAbilitiesModalValues key={index}>
                        <PokemonDetailsInfoDataAbilitiesModalName key={index} >
                          {item?.name?.charAt(0)?.toUpperCase() + item?.name?.slice(1)}
                        </PokemonDetailsInfoDataAbilitiesModalName>
                        <PokemonDetailsInfoDataAbilitiesModalDescription>
                          {item?.effect?.length > 0 ? item?.effect?.split(/[\n\f]/)?.join(" ") : "Unknown"}
                        </PokemonDetailsInfoDataAbilitiesModalDescription>
                        <PokemonDetailsInfoDataAbilitiesModalClose  onClick={() => {
                          setAbilityModal(!abilityModal)
                        }}/>
                      </PokemonDetailsInfoDataAbilitiesModalValues>
                    ))}
                    </PokemonDetailsInfoDataAbilitiesModalWrapper>
                  </PokemonDetailsInfoDataAbilitiesModalContainer>
                )}
              </PokemonDetailsInfoDataAbilitiesContainer>
            </PokemonDetailsInfoDataFrame>
      )}
    </>
  )
}

export default PokemonDataFrame