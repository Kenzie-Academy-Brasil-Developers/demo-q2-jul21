import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  justify-content: space-between;
  padding: 10px 24px;

  div {
    font-size: 22px;
    font-weight: 600;
  }

  img {
    border-radius: 50%;
    width: 50px;
  }
`;

export const EmText = styled.span`
  color: #fff;
  background-color: #403caa;
  margin-left: 4px;
  padding: 6px;
  border-radius: 2px;
`;
