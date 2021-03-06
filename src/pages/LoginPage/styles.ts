import styled from "styled-components";
import nightCity from "../../assets/Images/nightCity.jpg";

export const BlackFilter = styled.div`
  width: 100vw;
  height: 100%;
  background-color: #45454550;
`;

export const LoginPageStyled = styled.main`
  margin-top: 0;
  width: 100vw;
  height: 100vh;
  background-image: url(${nightCity});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  .logo {
    width: 100px;
    height: 100px;
    margin: 25px 0px 25px 0px;
  }
`;

export const FormLogin = styled.form`
  width: 80%;
  height: 75%;
  max-width: 450px;
  max-height: 400px;
  min-width: 200px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #909090;
  border-radius: 5px;
  background-color: #45454580;
  > input {
    width: 80%;
    height: 40px;
    margin: 20px 0px 0px 0px;
    border: 2px solid #ababab;
    border-radius: 5px;
    background-color: #f5f5f5;
    color: #707070;
    padding: 5px;
    transition: 400ms;

    :hover {
      padding-left: 20px;
      transition: 150ms;
      box-shadow: 0px 0px 0px 1px white;
    }

    :focus {
      padding-left: 20px;
      border: 2px solid var(--darkBlue);
    }
  }
  > .loginButton {
    width: 80%;
    height: 35px;
    margin-top: 20px;
    border-radius: 5px;
    border: none;
    font-size: 18px;
    color: var(--mainGray);
    background-color: var(--darkBlue);
    :hover {
      transition: 300ms;
      background-color: var(--mainGray);
      color: var(--darkBlue);
      border: 1px solid var(--darkBlue);
      font-weight: bold;
    }
  }
  > .registerButton {
    width: 70%;
    height: 30px;
    border: none;
    border-radius: 5px;
    font-size: 13px;
    color: #707070;
    border: 2px solid var(--darkBlue);
    color: var(--darkBlue);
    background-color: var(--mainGray);

    :hover {
      transition: 300ms;
      background-color: var(--darkBlue);
      color: var(--mainGray);
      border: 1px solid var(--darkBlue);
    }
  }
  padding-bottom: 20px;
`;

export const Linha = styled.div`
  width: 80%;
  height: 2px;
  border-radius: 20px;
  opacity: 0.5;
  background-color: var(--mainGray);
  margin: 25px 0px 25px 0px;
`;

export const BoxForm = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
  width: 100%;
  padding-top: 10px;
  margin-left: 25px;
  margin-top: 10px;
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
    margin-right: 10px;
  }
  > a {
    text-decoration: none;
    font-size: 15px;
    margin-left: 10px;
  }
  :hover {
    text-decoration: underline;
  }
`;

export const FlexCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ErrorMessage = styled.p`
  color: #ff4500;
  text-align: center;
`;
