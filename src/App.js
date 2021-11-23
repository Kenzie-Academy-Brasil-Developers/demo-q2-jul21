import "./app.css";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProductList />
        <Cart />
      </header>
    </div>
  );
}

export default App;
