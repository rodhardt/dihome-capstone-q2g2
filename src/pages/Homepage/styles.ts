import styled from "styled-components";

export const HomepageStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
  align-items: center;
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

export const Header = styled.div`
  width: 100%;
  height: 3vh;
  background-color: #0f9194;
`;
export const ContainerHome = styled.div`
  width: 87%;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
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
  }
`;
export const ButtonHome2 = styled.div`
  button {
    color: var(--darkBlue);
    border-color: var(--darkBlue);
    text-transform: none;
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
      color: var(--ligthGray);
      width: 80px;
    }
    img {
      width: 45px;
      height: 40px;
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
`;
export const Infos = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  p {
    width: 80%;
    text-align: center;
    font-size: 11px;
    color: var(--ligthGray);
  }
  h2 {
    font-size: 20px;
  }
`;
export const PropertyList = styled.ul`
  margin-top: 10px;
  list-style: none;
  display: flex;

  flex-wrap: wrap;
  justify-content: center;
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
