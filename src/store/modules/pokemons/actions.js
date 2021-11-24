import { ADD_POKEMON } from "./actionTypes";

// O meu pokemon será o objeto que veio do thunk. Um objeto que veio de uma API
// Ao invés de passarmos o nome do pokemon para o reducer fazer essa requisição,
// nós já enviamos os dados prontos
export const addPokemon = (pokemon) => ({ type: ADD_POKEMON, pokemon });
