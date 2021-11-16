import styled from "styled-components";

export const DashboardStyled = styled.main`
  @media only screen and (min-width: 120px) and (max-width: 425px) {
    .filter {
      margin-left: 5px;
      margin-bottom: 7px;
      color: red;
      background-color: #0f9;
      border: 0.5px solid green;
      border-radius: 8px;
    }
    .slider {
      margin: 10px;
      background-color: #0f9;
      display: flex;
      margin-botton: 3px;
      border-radius: 8px;
      img {
        margin-top: 4px;
        margin-left: 15px;
        height: 100px;
        width: 260px;
      }
      p {
        color: blue;
        margin-left: 5px;
      }
      .lastResidentComent {
        color: red;
      }
      button {
        color: grey;
        border: solid 0.5px blue;
        border-radius: 10px;
        margin-top: 35%;
        background-color: #0f9;
        height: 20px;
        font-size: 10px;
      }
    }
  }

  @media only screen and (min-width: 426px) and (max-width: 768px) {
    .filter {
      margin-left: 5px;
      margin-bottom: 7px;
      color: red;
      background-color: #0f9;
      border: 0.5px solid green;
      border-radius: 8px;
    }
    .slider {
      margin: 10px;
      background-color: #0f9;
      display: flex;
      margin-botton: 3px;
      border-radius: 8px;
      img {
        margin-top: 4px;
        margin-left: 15px;
        height: 100px;
        width: 260px;
      }
      p {
        color: blue;
        margin-left: 5px;
      }
      .lastResidentComent {
        color: red;
      }
      button {
        color: grey;
        border: solid 0.5px blue;
        border-radius: 10px;
        margin-top: 13%;
        background-color: #0f9;
        height: 20px;
        font-size: 10px;
      }
    }
  }

  @media only screen and (min-width: 769px) {
    .filter {
      margin-left: 5px;
      margin-bottom: 7px;
      color: red;
      background-color: #0f9;
      border: 0.5px solid green;
      border-radius: 8px;
    }
    .slider {
      margin: 10px;
      background-color: #0f9;
      display: flex;
      margin-botton: 3px;
      border-radius: 8px;
      height: 250px;
      img {
        margin-top: 4px;
        margin-left: 15px;
        height: 100px;
        width: 260px;
      }
      p {
        color: blue;
        margin-left: 5px;
      }
      .lastResidentComent {
        color: red;
      }
      button {
        color: grey;
        border: solid 0.5px blue;
        border-radius: 10px;
        margin-top: 15%;
        background-color: #0f9;
        height: 20px;
        font-size: 10px;
      }
    }
  }
`;
