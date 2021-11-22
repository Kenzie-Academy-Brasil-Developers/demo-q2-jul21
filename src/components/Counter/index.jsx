import { useDispatch } from "react-redux";
import { addNumber, subNumber } from "../../store/modules/result/actions";

const Counter = () => {
  // dispatch é a função que interage com as nossas actions
  // as actions são chamadas em conjunto com o dispatch, em eventos como onClick.
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(addNumber(1))}>
        Aumentar a contagem
      </button>
      <button onClick={() => dispatch(subNumber(1))}>
        Diminuir a contagem
      </button>
    </div>
  );
};

export default Counter;
