import styled from "styled-components";

export const HeaderStyled = styled.div`
  .lastBox {
    background-color: #0f9194;
    position: absolute;
    top: 0px;
    min-width: 100%;
    height: 20vh;
  }
  @media only screen and (max-width: 320px) {
    .lastBox {
      background-color: #0f9194;
      position: absolute;
      top: 0px;
      min-width: 100%;
      height: 15vh;
    }
    .notLoged {
      display: flex;
      .Link {
        margin-top: 8%;
        text-decoration: none;
        color: #ffffff;
        margin-left: 4%;
        margin-right: 2%;
        font-size: 3vh;
      }
      .LinkImage {
        height: 13vh;
        width: 100%;
      }
      .LinkFont {
        height: 5vh;
        width: 100%;
      }
    }

    .Logged {
      display: flex;
      .Link {
        margin-top: 8%;
        text-decoration: none;
        color: #ffffff;
        margin-left: 4%;
        margin-right: 4%;
        font-size: 3.5vh;
      }
      .LinkImage {
        margin-top: 5%;
        height: 13vh;
        width: 100%;
      }
      .LinkFont {
        height: 5vh;
        width: 100%;
      }
    }
  }

  @media only screen and (min-width: 321px) and (max-width: 375px) {
    .lastBox {
      background-color: #0f9194;
      position: absolute;
      top: 0px;
      min-width: 100%;
      height: 15vh;
    }
    .notLoged {
      display: flex;
      .Link {
        margin-top: 4vh;
        text-decoration: none;
        color: #ffffff;
        margin-left: 7.5%;
        font-size: 3.5vh;
      }
      .LinkImage {
        margin-top: 1vh;
        height: 12vh;
        width: 100%;
      }
      .LinkFont {
        height: 5vh;
        width: 100%;
      }
    }

    .Logged {
      display: flex;
      .Link {
        margin-top: 5vh;
        text-decoration: none;
        color: #ffffff;
        margin-left: 9%;
        font-size: 4vh;
      }
      .LinkImage {
        margin-top: 2vh;
        height: 12vh;
        width: 100%;
      }
      .LinkFont {
        margin-top: 20%;
        height: 5vh;
        width: 100%;
      }
    }
  }
  @media only screen and (min-width: 376px) and (max-width: 425px) {
    .lastBox {
      background-color: #0f9194;
      position: absolute;
      top: 0px;
      min-width: 100%;
      height: 15vh;
    }
    .notLoged {
      display: flex;
      .Link {
        margin-top: 5vh;
        text-decoration: none;
        color: #ffffff;
        margin-left: 8%;
        font-size: 3.5vh;
      }
      .LinkImage {
        height: 15vh;
        width: 100%;
      }
      .LinkFont {
        height: 6vh;
        width: 100%;
      }
    }

    .Logged {
      display: flex;
      .Link {
        margin-top: 5vh;
        text-decoration: none;
        color: #ffffff;
        margin-left: 10%;
        font-size: 3.5vh;
      }
      .LinkImage {
        height: 15vh;
        width: 100%;
      }
      .LinkFont {
        margin-top: 0.5vh;
        height: 5vh;
        width: 100%;
      }
    }
  }
  @media only screen and (min-width: 426px) and (max-width: 767px) {
    .notLoged {
      display: flex;
      .Link {
        margin-top: 5.5vh;
        text-decoration: none;
        color: #ffffff;
        margin-left: 10%;
        font-size: 6vh;
      }
      .LinkImage {
        margin-right: 5vh;
        height: 18vh;
        width: 100%;
      }
      .LinkFont {
        height: 6vh;
        width: 100%;
      }
    }

    .Logged {
      display: flex;
      .Link {
        margin-top: 5.5vh;
        text-decoration: none;
        color: #ffffff;
        margin-left: 10%;
        font-size: 6vh;
      }
      .LinkImage {
        margin-right: 5vh;
        height: 18vh;
        width: 100%;
      }
      .LinkFont {
        margin-right: 1vh;
        margin-top: 0.9vh;
        height: 8vh;
        width: 100%;
      }
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    .notLoged {
      display: flex;
      .Link {
        margin-top: 6vh;
        text-decoration: none;
        color: #ffffff;
        margin-left: 10%;
        font-size: 6vh;
      }
      .LinkImage {
        margin-right: 5vh;
        height: 18vh;
        width: 100%;
      }
      .LinkFont {
        height: 7vh;
        width: 100%;
      }
    }

    .Logged {
      display: flex;
      .Link {
        margin-top: 6vh;
        text-decoration: none;
        color: #ffffff;
        margin-left: 10%;
        font-size: 6vh;
      }
      .LinkImage {
        margin-right: 5vh;
        height: 18vh;
        width: 100%;
      }
      .LinkFont {
        margin-top: 1.5vh;
        height: 7vh;
        width: 100%;
      }
    }
  }

  @media only screen and (min-width: 1024px) {
    .notLoged {
      display: flex;
      .Link {
        margin-top: 8vh;
        text-decoration: none;
        color: #ffffff;
        margin-left: 13%;
        font-size: 6vh;
      }
      .LinkImage {
        height: 18vh;
        width: 100%;
      }
      .LinkFont {
        height: 7vh;
        width: 100%;
      }
    }

    .Logged {
      display: flex;
      .Link {
        margin-top: 5vh;
        text-decoration: none;
        color: #ffffff;
        margin-left: 12%;
        font-size: 8vh;
      }
      .LinkImage {
        height: 18vh;
        width: 100%;
      }
      .LinkFont {
        margin-top: 3.3vh;
        height: 7vh;
        width: 100%;
      }
    }
  }
`;
