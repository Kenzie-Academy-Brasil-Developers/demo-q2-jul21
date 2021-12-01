import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ primaryColor }) =>
    primaryColor ? "#403caa" : "#f5f5f5"};
  color: ${({ primaryColor }) => (primaryColor ? "#fff" : "#999999")};
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  height: 60px;
`;
