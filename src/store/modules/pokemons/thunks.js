import axios from "axios";
import { addPokemon } from "./actions";

// A primeira função contém os nossos parametros. E a segunda do redux thunk - que contém dois parametros
// dispatch() e getState()
export const addPokemonThunk = (pokemonName, toastError, setLoading) => {
  return (dispatch, getState) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        // Irei chamar o dispatch, passando minha action
        dispatch(addPokemon(response.data));

        // GetState retorna o objeto da store, e podemos desestruturar o reducer que quisermos
        // É uma ferramenta mais situacional
        const { pokemons } = getState();

        console.log(pokemons);

        // salvar no localstorage
        localStorage.setItem("@pokemons", JSON.stringify(pokemons));

        setLoading(false);
      })
      .catch((err) => {
        toastError("Erro ao encontrar pokemon");
        setLoading(false);
      });
  };
};
