// Action = função que recebe uma informação (payload).
// Ela deve retornar um type e a informação recebida em um objeto

export const addNumber = (number) => {
  return {
    // O Type é necessário para conseguirmos identificar no nosso reducer
    type: "ADD_NUMBER",
    number,
  };
};

// Sintaxe utilizando retorno implicito.
export const subNumber = (number) => ({ type: "SUB_NUMBER", number });
