import styled from "styled-components";
export const ContainerGlobal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
`;
export const ContainerPropertyCard = styled.div`
  background-color: #96ced0;
  width: 250px;
  height: 305px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  border-radius: 10px;
  img {
    width: 90%;
    border-radius: 10px;
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
  align-items: flex-flex-start;
  p {
    ::first-letter {
      text-transform: uppercase;
    }
    font-size: 13px;
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
`;
