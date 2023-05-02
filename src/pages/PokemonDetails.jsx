import { useEffect, useState } from "react"
import { Divider, PokemonDetailsBackIcon, PokemonDetailsContainer, PokemonDetailsHeader, PokemonDetailsImg, PokemonDetailsImgBackground, PokemonDetailsImgContainer, PokemonDetailsInfoContainer, PokemonDetailsInfoDataContainer, PokemonDetailsInfoDataFrame, PokemonDetailsInfoDataTitle, PokemonDetailsInfoDataValue, PokemonDetailsInfoDesc, PokemonDetailsInfoTitle, PokemonDetailsInfoTypeContainer, PokemonDetailsInfoTypeTag, PokemonDetailsInfoTypeTagContainer, PokemonDetailsInfoTypeTitle, PokemonDetailsInfoTypeWeaknessContainer, PokemonDetailsTitle } from "../components/Pokemon"
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import { Container, HeaderContainer, LogoutIcon, Title } from "../components/Main";

const PokemonDetails = () => {
    const [pokemon, setPokemon] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams();
    const descFiltered = pokemon?.species?.flavor_text_entries?.filter((item) => item?.language?.name === 'en')[0]?.flavor_text;
    const generaFiltered = pokemon?.species?.genera?.filter((item) => item?.language?.name === 'en')[0]?.genus.split(" ");

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((response) => response.json())
        .then(async (data) => {
            const newData = {
                id: data.id,
                name: data.name,
                height: data.height,
                weight: data.weight,
                sprites: data.sprites,
                types: data.types,
                stats: data.stats,
                abilities: data.abilities,
                moves: data.moves,
                species: await fetch(data.species.url)
                    .then((response) => response.json())
                    .then((data) => {
                        return data;
                    }),
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
        <PokemonDetailsContainer>
            <PokemonDetailsHeader>
                <PokemonDetailsBackIcon onClick={() => navigate('/home/' + id)} />
                <PokemonDetailsTitle>{pokemon.name} #{pokemon.id}</PokemonDetailsTitle>
            </PokemonDetailsHeader>
            <PokemonDetailsImgContainer>
                <PokemonDetailsImgBackground />
                <PokemonDetailsImg image={pokemon.sprites.other['official-artwork'].front_default} />
            </PokemonDetailsImgContainer>
            <PokemonDetailsInfoContainer>
                <PokemonDetailsInfoTitle>About</PokemonDetailsInfoTitle>
                <PokemonDetailsInfoDesc>
                &quot;{descFiltered.split(/[\n\f]/).join(" ")}&quot;
                </PokemonDetailsInfoDesc>
                <PokemonDetailsInfoDataContainer>
                    <PokemonDetailsInfoDataFrame>
                        <PokemonDetailsInfoDataTitle>Height</PokemonDetailsInfoDataTitle>
                        <PokemonDetailsInfoDataValue>{(pokemon.height / 3.281).toFixed(2)} m</PokemonDetailsInfoDataValue>
                    </PokemonDetailsInfoDataFrame>
                    <PokemonDetailsInfoDataFrame>
                        <PokemonDetailsInfoDataTitle>Category</PokemonDetailsInfoDataTitle>
                        <PokemonDetailsInfoDataValue>{generaFiltered[0]}</PokemonDetailsInfoDataValue>
                    </PokemonDetailsInfoDataFrame>
                    <PokemonDetailsInfoDataFrame>
                        <PokemonDetailsInfoDataTitle>Weight</PokemonDetailsInfoDataTitle>
                        <PokemonDetailsInfoDataValue>{(pokemon.weight / 2.205).toFixed(2)} kg</PokemonDetailsInfoDataValue>
                    </PokemonDetailsInfoDataFrame>
                    <PokemonDetailsInfoDataFrame>
                        <PokemonDetailsInfoDataTitle>Gender</PokemonDetailsInfoDataTitle>
                        <PokemonDetailsInfoDataValue>[Coming soon...]</PokemonDetailsInfoDataValue>
                    </PokemonDetailsInfoDataFrame>
                </PokemonDetailsInfoDataContainer>
                <Divider />
                <PokemonDetailsInfoTypeWeaknessContainer>
                    <PokemonDetailsInfoTypeContainer>
                        <PokemonDetailsInfoTypeTitle>Type</PokemonDetailsInfoTypeTitle>
                        {pokemon.types.map((item, index) => (
                            <PokemonDetailsInfoTypeTagContainer key={index}>
                                <PokemonDetailsInfoTypeTag type={item?.type?.name}>{item?.type?.name}</PokemonDetailsInfoTypeTag>
                            </PokemonDetailsInfoTypeTagContainer>
                        ))}
                    </PokemonDetailsInfoTypeContainer>
                </PokemonDetailsInfoTypeWeaknessContainer>
            </PokemonDetailsInfoContainer>
        </PokemonDetailsContainer>
    </Container>
  )
}

export default PokemonDetails