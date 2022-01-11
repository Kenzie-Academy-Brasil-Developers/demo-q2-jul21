import React, { useEffect, useState } from "react";
import "./App.css";
import Digimons from "./components/Digimons";
import { Container, ListContainer } from "./styles";
import { Digimon } from "./types/Digimon";

function App() {
  const [digimons, setDigimons] = useState<Digimon[]>([]);

  // const [digimon, setDigimon] = useState<Digimon>({} as Digimon)

  useEffect(() => {
    fetch("https://digimon-api.vercel.app/api/digimon")
      .then((response) => response.json())
      .then((response: Digimon[]) => {
        setDigimons(response);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <ListContainer>
            <Digimons digimons={digimons} />
          </ListContainer>
        </Container>
      </header>
    </div>
  );
}

export default App;
