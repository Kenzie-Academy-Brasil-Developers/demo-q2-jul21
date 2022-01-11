import { Digimon } from "../../types/Digimon";
import DigimonCard from "../DigimonCard";

interface DigimonsProps {
  digimons: Digimon[];
}

const Digimons = ({ digimons }: DigimonsProps) => {
  return (
    <>
      {digimons.map((digimon) => (
        <DigimonCard digimon={digimon} key={digimon.name} />
      ))}
    </>
  );
};

export default Digimons;
