import { useState } from "react";

const List = () => {
  const [nameList, setNameList] = useState([]);
  const [name, setName] = useState("");

  const handleClick = () => {
    setNameList((oldState) => [...oldState, name]);
  };

  return (
    <div>
      <input
        placeholder="Digite um nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button disabled={!name} onClick={handleClick}>
        Add
      </button>
      <ul>
        {nameList.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
