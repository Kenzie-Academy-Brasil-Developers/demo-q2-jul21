import { useSelector } from "react-redux";

const Pokemons = () => {
  const pokemons = useSelector((store) => store.pokemons);

  return (
    <ul>
      {pokemons.map((pokemon) => (
        <li key={pokemon.id}>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          Nome: {pokemon.name} - Peso: {pokemon.weight}
        </li>
      ))}
    </ul>
  );
};

export default Pokemons;
