import { createContext, ReactNode, useContext, useState } from "react";
import { Digimon } from "../types/Digimon";
import { History } from "history";

interface FavoriteDigimonsProviderProps {
  children: ReactNode;
}

interface FavoriteDigimonsProviderData {
  favorites: Digimon[];
  addDigimon: (digimon: Digimon) => void;
  deleteDigimon: (digimonToBeDeleted: Digimon) => void;
}

// Tipar props, state, parametro = obrigatório
// opcional é tipar os retornos de função
// void;
const FavoriteDigimonContext = createContext<FavoriteDigimonsProviderData>(
  {} as FavoriteDigimonsProviderData
);

export const FavoriteDigimonsProvider = ({
  children,
}: FavoriteDigimonsProviderProps) => {
  const [favorites, setFavorites] = useState<Digimon[]>([]);

  const addDigimon = (digimon: Digimon): void => {
    setFavorites((oldState) => [...oldState, digimon]);
  };

  const deleteDigimon = (digimonToBeDeleted: Digimon) => {
    const filteredDigimons = favorites.filter(
      (digimon) => digimon.name !== digimonToBeDeleted.name
    );

    setFavorites(filteredDigimons);
  };

  return (
    <FavoriteDigimonContext.Provider
      value={{
        addDigimon,
        deleteDigimon,
        favorites,
      }}
    >
      {children}
    </FavoriteDigimonContext.Provider>
  );
};

export const useFavoriteDigimons = () => useContext(FavoriteDigimonContext);
