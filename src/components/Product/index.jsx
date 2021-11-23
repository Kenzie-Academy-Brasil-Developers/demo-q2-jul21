import { useDispatch } from "react-redux";
import { addToCart } from "../../store/modules/cart/actions";
import { removeFromCart } from "../../store/modules/cart/actions";

const Product = ({ product, isRemovable = false }) => {
  const { title, price, id } = product;

  const dispatch = useDispatch();

  return (
    <div>
      <span>{title}</span>
      <p>{price}</p>
      {isRemovable ? (
        <button onClick={() => dispatch(removeFromCart(id))}>
          Remover item do carrinho
        </button>
      ) : (
        <button onClick={() => dispatch(addToCart(product))}>
          Adicionar item no carrinho
        </button>
      )}
    </div>
  );
};

export default Product;
