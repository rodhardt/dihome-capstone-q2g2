import styled from "styled-components";
import nightCity from "../../assets/Images/nightCity.jpg";

export const BlackFilter = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: #45454550;
`;

export const RegisterPageStyled = styled.main`
  width: 100vw;
  height: 100vh;

  background-image: url(${nightCity});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const FormRegister = styled.form`
  width: 70%;
  height: 70%;

  max-width: 450px;
  max-height: 400px;

  min-width: 200px;
  min-height: 300px;

  padding: 15px 0px 0px 0px;

  display: flex;
  flex-direction: column;
  align-items: center;

  border: 2px solid #909090;
  border-radius: 5px;

  background-color: #45454580;

  > .registerButton {
    width: 70%;
    height: 12%;

    margin-top: 15px;

    border-radius: 5px;
    border: none;

    font-size: 18px;
    color: var(--mainGray);
    background-color: var(--darkBlue);
  }

  > div {
    width: 80%;
    height: 17%;
  }

  > input {
    width: 80%;
    height: 40px;

    margin: 20px 0px 0px 0px;

    border: 2px solid #ababab;
    border-radius: 5px;
    background-color: #f5f5f5;
    color: #707070;

    padding: 5px;
  }
`;

export const BoxForm = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > img {
    width: 100px;
    height: 100px;
  }
`;

export const Title = styled.section`
  width: 100%;
  height: 20px;

  margin: 0px 0px 0px 40px;

  display: flex;
  align-items: flex-start;

  > h2 {
    font-size: 20px;
    color: var(--mainGray);
  }
`;

export const BackPage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  padding: 15px 0px 0px 15px;

  > svg {
    width: 20px;
    height: 20px;
  }

  > a {
    text-decoration: none;
    font-size: 15px;
    margin-left: 10px;
  }
`;
