import { Digimon } from "../../types/Digimon";
import DigimonCard from "../DigimonCard";

interface DigimonsProps {
  digimons: Digimon[];
  isFavorite?: boolean;
}

const Digimons = ({ digimons, isFavorite = false }: DigimonsProps) => {
  return (
    <>
      {digimons.map((digimon) => (
        <DigimonCard
          digimon={digimon}
          key={digimon.name}
          isFavorite={isFavorite}
        />
      ))}
    </>
  );
};

export default Digimons;
