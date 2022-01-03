const Card = ({ isShowPersonalInfo, name }) => {
  return (
    <div>
      <h2>Card</h2>
      {isShowPersonalInfo && <div>Meus dados pessoais - Nome: {name} </div>}
    </div>
  );
};

export default Card;
