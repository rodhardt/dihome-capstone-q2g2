import styled from "styled-components";

import bannerCidade from "../../assets/Images/banner-cidade.png";

export const FooterStyled = styled.footer`
  background-image: url(${bannerCidade});
  width: 100%;
  height: calc(100vw * 200 / 718);
  min-height: 200px;
  max-height: 320px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: calc(50% + 8px);
  color: #eaeaea;
  font-weight: bold;
  display: flex;
  align-items: center;
  padding-left: 20px;

  .footer-card {
    background-color: #0f919450;
    border: 1px solid var(--darkBlue);
    border-radius: 5px;
    width: 160px;
    padding: 3px 10px;
    transform: translateY(30px);
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

  @media screen and (min-width: 680px) {
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

  @media screen and (min-width: 980px) {
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
