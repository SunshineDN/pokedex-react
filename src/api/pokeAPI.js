import axios from "axios";

const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2/",
});

export const getAllPokemon = async (limit = 20, offset = 0) => {
    await api.get(`pokemon?limit=${limit}&offset=${offset}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log("error in getAllPokemon()" + error);
        });
}

export const getPokemon = async (id, handleChangeStatsName) => {
    await api.get(`pokemon/${id}`)
        .then((response) => {
            return response.data;
        })
        .then((pokemon) => {
            return {
                abilities: pokemon?.abilities,
                id: pokemon?.id,
                name: pokemon?.name,
                height: pokemon?.height,
                weight: pokemon?.weight,
                sprites: pokemon?.sprites,
                types: pokemon?.types,
                stats: pokemon?.stats?.map((stat) => {
                    return {
                        name: handleChangeStatsName(stat?.stat?.name),
                        value: stat?.base_stat,
                    }
                }),
                moves: pokemon?.moves,
                species: pokemon?.species,
            }
        })
        .catch((error) => {
            console.log("error in getPokemon()" + error);
        });
}

export const getPokemonAbility = async (url) => {
    await axios.get(`${url}`)
        .then((response) => {
            return response.data;
        })
        .then((ability) => {
            return {
                name: ability?.name,
                effect: ability?.effect_entries.filter((effect) => effect?.language?.name === "en")[0]?.effect,
            }
        })
        .catch((error) => {
            console.log("error in getPokemonAbility()" + error);
        });
}

export const getPokemonWeakesses = async (url) => {
    await axios.get(`${url}`)
        .then((response) => {
            return response.data;
        })
        .then((weaknesses) => {
            return {
                double_damage_from: weaknesses?.damage_relations?.double_damage_from,
                half_damage_from: weaknesses?.damage_relations?.half_damage_from,
                no_damage_from: weaknesses?.damage_relations?.no_damage_from,
            }
        })
        .catch((error) => {
            console.log("error in getPokemonWeakesses()" + error);
        });
}

export const getPokemonSpecies = async (url) => {
    await axios.get(`${url}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log("error in getPokemonSpecies()" + error);
        });
}

export const getPokemonEvolutionChain = async (url) => await axios.get(`${url}`);

export const getPokemonType = async (url) => await axios.get(`${url}`);


export const getPokemonMove = async (url) => await axios.get(`${url}`);

export default api;