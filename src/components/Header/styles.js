import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavLink = styled(Link)`
  margin: 10px;
  font-size: 18px;

  color: #333;

  > svg {
    transform: translateY(3.5px);
    margin-right: 10px;
  }

  span {
    margin-left: 5px;
  }
`;
