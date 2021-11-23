import { useSelector } from "react-redux";
import Product from "../Product";

const Cart = () => {
  /*  const [cart, setCart] = useState()
      o cart seria o useSelector acessando 
      o setCart seria o dispatch com a action para alterar.
*/

  const cart = useSelector((store) => store.cart);

  return (
    <div>
      <h1> Carrinho de compras </h1>
      {cart.map((product) => (
        <Product key={product.id} product={product} isRemovable />
      ))}
    </div>
  );
};

export default Cart;
