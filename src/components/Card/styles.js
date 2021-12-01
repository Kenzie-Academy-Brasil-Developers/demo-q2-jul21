import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  margin-bottom: 10px;
  width: 100%;
  display: flex;
  border-right: 4px solid;
  ${(props) =>
    props.greenSchema ? "rgba(17, 153, 94, 0.1)" : "rgba(64, 60, 170, 0.1)"};
  border-radius: 5px;

  h3 {
    margin: 0;
    cursor: pointer;
  }
  p {
    margin: 0;
    font-size: 12px;
    margin-top: 5px;
    margin-right: 10px;
  }
  svg {
    padding: 30px;
    margin-right: 10px;
    background-color: ${(props) =>
      props.greenSchema ? "rgba(17, 153, 94, 0.1)" : "rgba(64, 60, 170, 0.1)"};
    border-radius: 5px;
  }

  :hover {
    cursor: pointer;

    border-right: 4px solid
      ${(props) => (props.greenSchema ? "#11995E" : "#403CAA")};

    img {
      background-color: ${(props) =>
        props.greenSchema ? "#11995E80" : "#403CAA80"};
    }
  }
`;
