import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonStyled } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  deleted?: boolean;
}

const Button = ({ deleted = false, children, ...rest }: ButtonProps) => {
  return (
    <ButtonStyled isDeleted={deleted} {...rest}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
