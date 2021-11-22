import "./app.css";
import Display from "./components/Display";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Display />
        <Counter />
      </header>
    </div>
  );
}

export default App;
