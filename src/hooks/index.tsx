import { ReactNode } from "react";
import { FavoriteDigimonsProvider } from "./FavoriteDigimons";

interface ProviderProps {
  children: ReactNode;
}
const Providers = ({ children }: ProviderProps) => {
  return (
    <>
      <FavoriteDigimonsProvider>{children}</FavoriteDigimonsProvider>
    </>
  );
};

export default Providers;
