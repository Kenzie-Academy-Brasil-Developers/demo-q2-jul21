import "./app.css";
import Pokemons from "./components/Pokemons";
import Search from "./components/Search";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Toaster position="top-center" />
        <Search />
        <Pokemons />
      </header>
    </div>
  );
}

export default App;
