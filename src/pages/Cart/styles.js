import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 15px;
`;

export const Image = styled.img`
  width: 120px;
  height: 220px;
  margin-left: 15px;
`;

export const CardContainer = styled(Container)`
  padding: 0 0 8px;
  justify-content: space-between;
  margin-top: 15px;
`;

export const Container404 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    margin-top: 15px;
  }
`;
