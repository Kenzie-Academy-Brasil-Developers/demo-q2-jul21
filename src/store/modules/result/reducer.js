// Todo reducer é uma função com 2 parametros, sendo o primeiro o seu state
// e o segundo a action que está sendo direcionada.
// Todo reducer é composto de um switch case em seu corpo da função. O type da action
// é seu parametro para retornar a alteração que será feita

// state = 0 representa o valor inicial do state. Assim como no useState(0)
const resultReducer = (state = 0, action) => {
  console.log(action);

  switch (action.type) {
    case "ADD_NUMBER":
      const newState = state + action.number;

      return newState;

    case "SUB_NUMBER":
      if (state > 0) {
        return state - action.number;
      }
      return state;

    default:
      return state;
  }
};

export default resultReducer;
