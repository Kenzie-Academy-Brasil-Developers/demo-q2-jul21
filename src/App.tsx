import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Card from "./components/Card";

// Interface sempre representa um objeto
interface User {
  name: string;
  lastName: string;
  age: number;
}

function App() {
  const [count, setCount] = useState(0);

  const [user, setUser] = useState<User>({} as User);

  const increment = (number: number) => {
    setCount(number);
  };

  const gabriel = {
    name: "Gabriel",
    lastName: "Rudy",
    hobby: "Jogar",
    age: 20,
    img_url: "",
  };

  console.log(typeof NaN);

  return (
    <div className="App">
      <header className="App-header">
        Contagem atual = {count}
        <button onClick={() => increment(count + 1)}> + </button>
        <button onClick={() => setCount(count - 1)}> - </button>
        <button onClick={() => setUser(gabriel)}>Adicionar pessoa</button>
        <Card user={user} />
      </header>
    </div>
  );
}

export default App;
