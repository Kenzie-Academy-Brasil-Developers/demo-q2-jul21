import { createContext, ReactNode, useContext, useState } from "react";

interface FavoriteDigimonsProviderProps {
  children: ReactNode;
}

const FavoriteDigimonContext = createContext({});

export const FavoriteDigimonsProvider = ({
  children,
}: FavoriteDigimonsProviderProps) => {
  return (
    <FavoriteDigimonContext.Provider value={{}}>
      {children}
    </FavoriteDigimonContext.Provider>
  );
};

export const useFavoriteDigimons = () => useContext(FavoriteDigimonContext);
