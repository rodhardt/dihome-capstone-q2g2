import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100%;
  height: 50px;
  background-color: var(--darkBlue);
  color: var(--mainGray);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  padding: 5px;
  z-index: 1;

  .image-container {
    width: 40px;
    height: 40px;
    margin: 0 5px 0 2px;
  }
  .image-container img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .last {
    margin-left: auto;
    display: flex;
    align-items: center;
    margin-right: 5px;
  }

  .last svg {
    width: 25px;
    height: 25px;
  }

  .last svg:hover {
    color: #ffffff90;
  }

  .link {
    font-size: 14px;
    padding: 5px;
  }
  .link:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  .login {
    border: 1px solid var(--mainGray);
    border-radius: 15px;
    padding: 2px 10px;
  }

  .login:hover {
    background-color: var(--mainGray);
    color: var(--darkBlue);
    font-weight: bold;
    border: none;
    padding: 3px 11px;
  }

  @media screen and (min-width: 430px) {
    .text {
      margin: 0px 10px;
    }
  }

  @media screen and (min-width: 700px) {
    padding: 5px 20px;

    .text {
      font-size: 18px;
      margin: 0px 40px;
    }
    .image-container {
      width: 50px;
      height: 50px;
    }
  }
  @media screen and (min-width: 1000px) {
    padding: 0px calc(50vw - 500px);
  }
`;
