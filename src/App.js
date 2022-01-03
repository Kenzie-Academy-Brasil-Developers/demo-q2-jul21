import "./app.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Projeto - testes
        <Card isShowPersonalInfo={true} name="Gabriel" />
      </header>
    </div>
  );
}

export default App;
