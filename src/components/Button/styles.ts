import styled, { css } from "styled-components";

interface ButtonStyledProps {
  isDeleted: boolean;
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
  margin-top: 5px;
  width: 95%;
  font-size: 12px;
  height: 30px;
  border: none;
  border-radius: 10px;
  background-color: #0000ff;
  outline: none;
  cursor: pointer;
  color: #fff;
  font-weight: bold;

  ${(props) =>
    props.isDeleted &&
    css`
      background: white;
      color: red;
    `}
`;
