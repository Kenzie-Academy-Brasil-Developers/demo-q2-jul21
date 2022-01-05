import axios from "axios";

import { useState } from "react";

const Pokemon = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonAbilities, setPokemonAbilities] = useState([]);
  const [error, setError] = useState(false);

  const handleFetch = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      setPokemonAbilities(response.data.abilities);
    } catch (err) {
      setPokemonAbilities([]);
      setError(true);
    }
  };

  return (
    <div>
      <h3>Procure o seu pokemon</h3>
      <input
        placeholder="Ex: Pikachu"
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
      />
      <button onClick={handleFetch}>Buscar habilidades</button>
      {error && <span>Algo deu errado</span>}
      <ul>
        {pokemonAbilities?.map((pokemon) => (
          <li key={pokemon.ability.name}>
            <a href={pokemon.ability.url}>{pokemon.ability.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pokemon;
