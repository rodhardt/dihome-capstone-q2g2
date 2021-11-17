import styled from "styled-components";

export const HomepageStyled = styled.main`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  min-height: 100vh;
  align-items: flex-start;
  background-color: var(--mainGray);
  img {
    width: 100%;
    height: 150px;
    @media screen and (min-width: 700px) {
      img {
        height: 300px;
      }
    }
  }
  h3 {
    font-size: 13px;
  }
`;

export const ContainerHome = styled.div`
  width: 95%;
  max-width: 1000px;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  p {
    font-size: 9px;
  }
`;
export const ButtonHome1 = styled.div`
  button {
    color: var(--orange);
    border-color: var(--orange);
    text-transform: none;
    margin-right: 15px;
  }
  @media screen and (min-width: 470px) {
    button p {
      font-size: 13px;
    }
  }
  @media screen and (min-width: 680px) {
    button {
      margin-bottom: 30px;
    }
  }
`;
export const ButtonHome2 = styled.div`
  button {
    color: var(--darkBlue);
    border-color: var(--darkBlue);
    text-transform: none;
    margin-left: 15px;
  }
  @media screen and (min-width: 470px) {
    button p {
      font-size: 13px;
    }
  }
  @media screen and (min-width: 680px) {
    button {
      margin-bottom: 30px;
    }
  }
`;
export const ContentHome = styled.ul`
  margin: 0px;
  padding: 0px;
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 17px;
  justify-content: center;
  li {
    width: 135px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 10px;
    height: 150px;
    p {
      color: var(--lightGray);
      width: 80px;
    }
    img {
      width: 45px;
      height: 40px;
    }
  }
  @media screen and (min-width: 434px) {
    h4 {
      font-size: 18px;
    }
    li p {
      font-size: 11px;
      width: 100px;
    }
    li {
      width: 49%;
      height: 180px;
    }
  }
  @media screen and (min-width: 680px) {
    ul {
      justify-content: space-between;
    }
    li {
      width: 24%;
    }
    h4 {
      font-size: 20px;
    }
    li p {
      font-size: 13px;
      width: 120px;
    }
    li img {
    }
  }
`;
export const Unstyled = styled.div`
  width: 100%;
  margin-bottom: 25px;
  img {
    width: 200px;
    height: 28px;
  }
  @media screen and (min-width: 780px) {
    img {
      width: 30%;
      height: 32px;
    }
  }
`;
export const Unstyled2 = styled.div`
  width: 100%;
  margin-bottom: 25px;
  display: flex;

  img {
    width: 200px;
    height: 28px;
  }
  flex-direction: row-reverse;
  @media screen and (min-width: 780px) {
    img {
      width: 30%;
      height: 32px;
    }
  }
  @media screen and (min-width: 1150px) {
    margin-top: 50px;
  }
`;
export const Infos = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  p {
    width: 80%;
    max-width: 650px;
    text-align: center;
    font-size: 11px;
    color: var(--lightGray);
    margin: 15px auto;
  }
  h2 {
    font-size: 20px;
  }
  @media screen and (min-width: 680px) {
    h2 {
      font-size: 24px;
    }
    p {
      font-size: 14px;
    }
  }
`;
export const PropertyList = styled.ul`
  margin-top: 30px;
  list-style: none;
  display: flex;
  max-width: 500px;
  min-height: 240px;
  flex-wrap: wrap;
  justify-content: center;

  h3 {
    width: 100%;
    text-align: center;
    height: 20px;
  }
  li {
    margin: 10px;
    height: 200px;
  }
  button {
    width: 100px;
  }
`;
export const ImgCity = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: 100px;
  }
`;
