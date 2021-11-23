const defaultState = [
  { id: 1, name: "Geladeira", price: 200 },
  { id: 2, name: "Fogão", price: 640 },
  { id: 3, name: "Máquina de lavar", price: 420 },
  { id: 4, name: "luminária", price: 45 },
  { id: 5, name: "Televisor", price: 500 },
  { id: 6, name: "Celular", price: 340 },
  { id: 7, name: "Notebook", price: 730 },
  { id: 8, name: "Cafeteira", price: 80 },
  { id: 9, name: "Cama", price: 280 },
];

const productsReducer = (state = defaultState, action) => {
  return state;
};

export default productsReducer;
