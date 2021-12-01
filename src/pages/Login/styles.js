import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const ContainerMessage = styled.div`
  text-align: center;
  width: 100%;

  span {
    font-size: 14px;
    color: #999999;
    margin-top: 10px;

    strong {
      margin: 0px;
      color: #333;
      font-weight: normal;
    }
  }
`;

export const Form = styled.form`
  background-color: #fff;
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  padding: 38px 18px 24px 18px;

  @media (min-width: 800px) {
    width: 400px;
  }

  button {
    margin-top: 8px;
    margin-bottom: 8px;
  }
`;