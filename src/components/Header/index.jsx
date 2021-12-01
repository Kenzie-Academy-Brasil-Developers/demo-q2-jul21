import profile from "../../assets/profile.png";
import { Container, EmText } from "./styles";

const Header = () => {
  return (
    <Container>
      <div>
        <span>Kenzie</span>
        <EmText>Hub</EmText>
      </div>
      <img src={profile} alt="Foto de perfil" />
    </Container>
  );
};

export default Header;
