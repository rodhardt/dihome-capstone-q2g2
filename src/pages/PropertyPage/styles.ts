import styled from "styled-components";

export const PropertyPageStyled = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const MaxWidthAdapter = styled.div`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ImageBoxes = styled.section`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;

  .mainImage {
    width: 60%;
    margin: 10px;
    border-radius: 5px;
  }

  .otherImages {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 30%;

    img {
      width: 90%;
      margin: 10px 10px 5px 10px;
      border-radius: 5px;
    }
  }
`;

export const BackButton = styled.div`
  width: 100%;
  height: 5%;
  padding: 10px 10px 10px 10px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;

  svg {
    width: 20px;
    height: 20px;
  }

  h2 {
    margin-left: 10px;
    font-weight: lighter;
  }
`;

export const TitleAnounce = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;

  h2 {
    font-weight: lighter;
    font-size: 13px;
  }

  button {
    height: 35px;
    width: 38px;
    border-radius: 100%;
    border: 1px solid black;
    background-color: var(--orange);
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 70%;
      height: 70%;
    }

    :hover {
      background-color: var(--mainGray);
    }
  }
`;

export const ContactOwner = styled.section`
  width: 88%;
  height: 170px;
  margin-top: 20px;
  background-color: var(--opacityBlue);
  border-radius: 5px;
  padding: 5px 5px 5px 10px;

  

  .user {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
    margin: 5px 0px 0px 0px;

    svg {
      height: 30px;
      width: 30px;
    }

    h3 {
      margin-left: 10px;
      border-bottom: 2px solid var(--darkBlue);
    }
  }

  .contact {
    display: flex;
    align-items: center;
    flex-direction: column;

    button {
      width: 70%;
      height: 30px;
      font-size: 13px;
      margin-top: 15px;
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      color: var(--darkBlue);
      background-color: var(--mainGray);
      border: 2px solid var(--darkBlue);
      max-width: 200px;

      :hover {
        background-color: var(--darkBlue);
        color: var(--mainGray);
        border: none;
        transition: 250ms;
      }

      svg {
        width: 18px;
        height: 18px;
        margin-left: 8px;
      }
    }
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    width: 60%;
    height: 110px;

    .contact {
      
    button {
      width: 110%;
      }
    }

    .userAndTitle {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  } 

  }
`;

export const Linha = styled.div`
  width: 95%;
  height: 2px;

  background-color: var(--mainGray);

  margin: 25px 0px 25px 0px;
`;

export const PropertyInfos = styled.div`
  width: 80%;

  .propertyList {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    @media (min-width: 768px) {
      flex-direction: row;
    }
  }


  div {
    display: flex;
    align-items: center;
    flex-direction: row;

    svg {
      width: 30px;
      height: 30px;
      margin-right: 10px;
    }
  }

  ul {
    width: 100%;
    display: flex;
    list-style: none;
    flex-direction: column;
    justify-content: center;
  }
  li {
    display: flex;
    align-items: center;
    margin: 10px 0px 0px 0px;
    border-bottom: 1px solid var(--opacityBlue);

    :hover {
      border-bottom: 2px solid var(--opacityBlue);
      transition: 500ms;
    }

    svg {
      width: 20px;
      height: 20px;

      margin-right: 15px;
    }
  }

`;

export const PropertyDiscription = styled.section`
  width: 80%;
  margin: 20px 0px 20px 0px;

  div {
    display: flex;
    align-items: center;
    flex-direction: row;

    svg {
      width: 30px;
      height: 30px;
      margin: 5px 0px 10px 10px;
    }
  }
`;

export const MapSection = styled.section`
  width: 80%;
  height: 200px;
  background-color: #cccccc;
  border-radius: 10px;
  margin-bottom: 20px;
`

export const WithoutMapSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  h3 {
    text-align: center;
    margin: 10px 0px 20px 0px;
  }

  button {
    margin-bottom: 20px;
    padding: 5px 10px 5px 10px;
    border: 2px solid var(--darkBlue);
    color: var(--darkBlue);
    border-radius: 5px;

    :hover {
      border: 2px solid var(--mainGray);
      color: var(--mainGray);
      background-color: var(--darkBlue);
      transition: 200ms;
    }
  }

`