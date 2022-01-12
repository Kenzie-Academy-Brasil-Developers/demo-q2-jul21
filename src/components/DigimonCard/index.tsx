import { useFavoriteDigimons } from "../../hooks/FavoriteDigimons";
import { Digimon } from "../../types/Digimon";
import Button from "../Button";
import { Container, Image } from "./styles";

interface DigimonCardProps {
  digimon: Digimon;
  isFavorite?: boolean;
}

const DigimonCard = ({ digimon, isFavorite = false }: DigimonCardProps) => {
  const { addDigimon, deleteDigimon } = useFavoriteDigimons();

  return (
    <Container>
      <Image src={digimon.img} />
      <h4>{digimon.name}</h4>
      <span>{digimon.level}</span>
      {isFavorite ? (
        <div>
          <Button deleted={true} onClick={() => deleteDigimon(digimon)}>
            Remover dos favoritos
          </Button>
        </div>
      ) : (
        <div>
          <Button onClick={() => addDigimon(digimon)}>
            Adicionar aos favoritos
          </Button>
        </div>
      )}
    </Container>
  );
};

export default DigimonCard;
