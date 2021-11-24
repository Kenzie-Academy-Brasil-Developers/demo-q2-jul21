import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addPokemonThunk } from "../../store/modules/pokemons/thunks";

const Search = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const toastError = (errorMessage) => {
    toast.error(errorMessage);
  };

  // Agora o nosso componente, importa as actions de dentro do middleware (thunks)
  const handleSearch = () => {
    // se o pokemonName for falsy, não vamos executar o thunk
    if (!pokemonName) {
      return toastError("Adicione um nome de pokemon na caixa de texto");
    }

    // tratativa do dado vindo do state
    const name = pokemonName.trim().toLowerCase();

    // setError(false);
    // nessa função handle search, poderiamos tratar os dados

    // utilizando setError, podemos fazer renderização condicional com algum gatilho do thunk
    setLoading(true);
    dispatch(addPokemonThunk(name, toastError, setLoading));
  };

  return (
    <div>
      <input
        onChange={(e) => setPokemonName(e.target.value)}
        placeholder="Pesquise um pokemon, ex: Pikachu"
      />
      {/* <span> {error && <p> Pokemon não encontrado </p>} </span> */}
      <button onClick={() => handleSearch()}> Enviar </button>
      {loading && <span>Carregando...</span>}
    </div>
  );
};

export default Search;
