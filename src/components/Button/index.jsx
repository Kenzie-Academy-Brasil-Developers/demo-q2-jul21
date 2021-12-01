import { Container } from "./styles";

// o ...rest funciona muito bem quando são props que já são padrão
// onClick, type, placeholder
const Button = ({ primaryColor = true, children, ...rest }) => {
  return (
    <Container primaryColor={primaryColor} {...rest}>
      {children}
    </Container>
  );
};

export default Button;
