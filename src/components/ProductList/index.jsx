import { useSelector } from "react-redux";
import Product from "../Product";

import axios from "axios";
import { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  // isso aqui retorna um array de objetos que vem da store
  // o parametro da função é a store, e podemos retornar um reducer de dentro dela
  // const products = useSelector((store) => store.products);

  // poderia ter um useEffect, contendo a listagem dos produtos, no lugar do useSelector.

  useEffect(() => {
    axios.get("https://kenzieshop.herokuapp.com/products/").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <section>
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </section>
  );
};

export default ProductList;
