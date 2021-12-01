import { Container } from "./styles";
import { FiCodesandbox, FiGitPullRequest } from "react-icons/fi";

const Card = ({ greenSchema, title, description, onClick }) => {
  return (
    <Container greenSchema={greenSchema} onClick={onClick}>
      {greenSchema ? <FiCodesandbox /> : <FiGitPullRequest />}
      <div>
        <h3>{title}</h3>
        {greenSchema ? <span>{description} </span> : <p> {description} </p>}
      </div>
    </Container>
  );
};

export default Card;