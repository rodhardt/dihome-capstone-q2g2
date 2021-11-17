import styled from "styled-components";

import cityFooter from "../../assets/Images/cityFooter.png";

export const FooterStyled = styled.footer`
  background-image: url(${cityFooter});
  width: 100%;
  height: calc(100vw * 520 / 1114);
  max-height: 300px;
  background-size: cover;
  background-repeat: no-repeat;
  color: #eaeaea;
  font-weight: bold;
  display: flex;
  align-items: center;
  padding-left: 20px;

  .footer-card {
    background-color: #0f919480;
    border: 1px solid var(--darkBlue);
    border-radius: 5px;
    width: 165px;
    padding: 3px 10px;
    transform: translateY(10px);
  }

  h4 {
    font-size: 14px;
  }

  p {
    padding-left: 3px;
    font-size: 12px;
    display: flex;
    align-items: center;
  }

  .icon-container {
    margin-right: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  .icon-container svg {
    font-size: 10px;
  }

  @media screen and (min-width: 520px) {
    .footer-card {
      width: 250px;
    }
    h4 {
      font-size: 18px;
    }

    p {
      padding-left: 3px;
      font-size: 16px;
    }
    .icon-container svg {
      font-size: 14px;
    }
  }

  @media screen and (min-width: 800px) {
    padding-left: 80px;

    .footer-card {
      width: 300px;
    }
    h4 {
      font-size: 22px;
    }

    p {
      padding-left: 3px;
      font-size: 20px;
    }
    .icon-container svg {
      font-size: 18px;
    }
  }
`;
