import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 1200px) {
    justify-content: space-between;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 25px;
  background-color: #fff;
  padding: 10px 20px;
  height: 100%;
  width: 25%;
  min-width: 250px;
`;

export const SectionHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 240px;
`;

export const TechButton = styled.button`
  background: #11995e;
  border-radius: 5px;
  color: #fff;
  width: 43px;
  height: 34px;

  font-size: 24px;

  svg {
    margin-top: 3px;
  }
`;

export const WorkButton = styled(TechButton)`
  background: #403caa;
`;

export const ContactSession = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 25px;
  background-color: #fff;
  border: 2px solid #f5f5f5;
  flex-direction: column;
  height: 100%;
  min-width: 360px;
  max-width: 600px;

  border-radius: 16px;

  div {
    margin: 20px 0px;
  }
`;

export const ContactHeader = styled.header`
  display: flex;
  background: #403caa;

  padding: 20px 10px;
  align-items: center;
  width: 100%;
  border-radius: 10px 10px 0px 0px;
  box-sizing: border-box;

  img {
    width: 70px;
    height: 70px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 16px;
    margin-left: 16px;
  }

  h3,
  em {
    margin: 0px;
    color: white;
  }

  em {
    margin-top: 8px;
  }
`;

export const ProfileBadge = styled.div`
  display: flex;
  padding: 0 10px;
  border-radius: 5px;
  min-width: 280px;
  background-color: ${(props) =>
    props.blueSchema ? "#403CAA1A" : "#11995E1A"};

  div {
    color: #fff;
    padding: 16px 16px;
    margin-right: 10px;
    border-radius: 5px;
    background-color: ${(props) => (props.blueSchema ? "#403CAA" : "#11995E")};
    font-size: 20px;
  }

  h3 {
    margin: 0px;
  }

  section {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0px 30px 0px 0px;

    em {
      color: #fff;
    }

    span {
      color: #999999;
    }
  }
`;
