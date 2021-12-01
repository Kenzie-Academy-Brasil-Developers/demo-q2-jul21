import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  width: 100%;
  border-right: 4px solid
    ${(props) =>
      props.greenSchema ? "rgba(17, 153, 94, 0.1)" : "rgba(64, 60, 170, 0.1)"};

  border-radius: 5px;

  div {
    margin-right: 10px;
    background-color: ${(props) =>
      props.greenSchema ? "rgba(17, 153, 94, 0.1)" : "rgba(64, 60, 170, 0.1)"};
    border-radius: 5px;
    padding: 20px;

    svg {
      color: ${(props) => (props.greenSchema ? "#11995E" : "#403CAA80")};
      font-size: 25px;
    }
  }

  section {
    margin-bottom: 16px;
    margin-left: 6px;
    span {
      background-color: #e7f5ef;
      padding: 8px;
      border-radius: 6px;
    }
    p {
      color: #999;
    }
  }

  :hover {
    cursor: pointer;

    border-right: 4px solid
      ${(props) => (props.greenSchema ? "#11995E" : "#403CAA")};

    div {
      background-color: ${(props) =>
        props.greenSchema ? "#11995E" : "#403CAA80"};
    }

    svg {
      color: #fff;
    }
  }
`;
