import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProductList = styled.ul`
  margin-top: 45px;
  row-gap: 15px;
  column-gap: 20px;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  list-style-type: none;
  @media (max-width: 945px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 590px) {
    grid-template-columns: repeat(1, 1fr);
  }
  li {
    width: 300px;
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    &:hover figure img {
      opacity: 0.9;
    }
    figure {
      display: flex;
      justify-content: center;
      position: relative;
      max-height: 250px;
      padding-top: 90%;
      text-align: center;
      border-bottom: 1px solid #ddd;
      @media (max-width: 490px) {
        padding-top: 60%;
      }
      img,
      span {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        max-height: 100%;
        margin: 0 auto;
        transition: opacity 150ms ease-in-out;
      }
    }
    strong {
      font-size: 16px;
      line-height: 20px;
      margin-top: 8px;
      margin-bottom: 8px;
    }
    div {
      display: flex;
      flex-direction: column;
      margin-top: auto;
      > span {
        font-size: 21px;
        margin: 5px 0 20px;
      }
      button {
        background: #8884ff;
        color: #fff;
        border: 0;
        border-radius: 4px;
        overflow: hidden;
        position: relative;
        display: flex;
        align-items: center;
        transition: 200ms ease-in-out;

        span {
          padding: 12px;
          flex: 1;
          text-align: center;
          font-weight: bold;
        }

        :hover {
          background-color: ${darken(0.04, "#8884ff")};
        }
      }
    }
  }
`;
