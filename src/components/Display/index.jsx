import { useState } from "react";
import { useSelector } from "react-redux";

const Display = () => {
  // Situações que são especificas não são necessárias no redux.
  // Podem continuar na lógica que ja conhecemos
  const [visible, setVisible] = useState(true);

  const result = useSelector((store) => store.result);

  // Posso trabalhar com os dados que vem através do useSelector.
  // fazer filtros, armazenar em um state do componente etc.
  console.log(result);

  return (
    <div>
      {visible && <div>Valor atual: {result}</div>}
      <button onClick={() => setVisible(false)}>Esconder</button>
    </div>
  );
};

export default Display;
