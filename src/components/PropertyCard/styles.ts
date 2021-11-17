import styled from "styled-components";
export const ContainerGlobal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;
export const ContainerPropertyCard = styled.div`
  background-color: var(--opacityBlue);
  width: 250px;
  height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  border-radius: 10px;
  @media (min-width: 700px) {
    width: 80%;
  }
`;
export const HeaderCard = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  p {
    font-size: 10px;
    font-weight: bold;
  }
`;
export const InfosCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: flex-start;
  p {
    ::first-letter {
      text-transform: uppercase;
    }
    font-size: 12px;
    font-weight: bold;
  }
`;
export const InfosHouse = styled.div`
  margin-top: 5px;
  display: flex;
  gap: 4px;
  p {
    font-size: 10px;
    font-weight: lighter;
  }
`;
export const ImgHouse = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  img {
    width: 90%;
    height: 111px;
    border-radius: 10px;
    position: relative;
    z-index: 1;
    right: 9px;
  }
  button {
    position: relative;
    left: 40px;
    top: 10px;
    height: 24px;
    width: 30px;
    border-radius: 70px;
    border: 1px solid black;

    background-color: var(--orange);
    :hover {
      background-color: var(--mainGray);
    }
    z-index: 2;
  }
`;
export const HousePrice = styled.div`
  width: 85%;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  button {
    background-color: transparent;
    border: none;

    img {
      width: 10px;
    }
  }
  position: relative;
  bottom: 50px;
  left: 10px;
  z-index: 2;
`;
export const SmallContainer = styled.div`
  background-color: var(--opacityBlue);
  width: 130px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  border-radius: 10px;
  p {
    font-size: 8px;
  }
  img {
    width: 90%;
    border-radius: 10px;
  }
`;
export const SmallInfos = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 7px;
`;
export const SmallCardInfo = styled.div`
  margin-top: 5px;
  display: flex;
  gap: 4px;
  p {
    font-size: 8px;
    font-weight: lighter;
  }
`;
export const SmallCardHeader = styled.div`
  p {
    ::first-letter {
      text-transform: uppercase;
    }
    font-size: 13px;
    font-weight: bold;
  }
`;
