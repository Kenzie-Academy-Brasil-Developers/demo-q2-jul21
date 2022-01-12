import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Digimons from "./components/Digimons";
import { useFavoriteDigimons } from "./hooks/FavoriteDigimons";
import { Container, FavoriteListContainer, ListContainer } from "./styles";
import { Digimon } from "./types/Digimon";
import { useForm } from "react-hook-form";

function App() {
  const { favorites } = useFavoriteDigimons();
  const [digimons, setDigimons] = useState<Digimon[]>([]);

  // const [digimon, setDigimon] = useState<Digimon>({} as Digimon)

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    axios
      .get<Digimon[]>("https://digimon-api.vercel.app/api/digimon")
      .then((response) => {
        setDigimons(response.data);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <FavoriteListContainer>
            <Digimons digimons={favorites} isFavorite />
          </FavoriteListContainer>

          <ListContainer>
            <Digimons digimons={digimons} />
          </ListContainer>
        </Container>
      </header>
    </div>
  );
}

export default App;
