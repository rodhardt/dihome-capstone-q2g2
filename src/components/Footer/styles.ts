import styled from "styled-components";

import cityFooter from "../../assets/Images/cityFooter.png";

export const FooterStyled = styled.footer`
  background-image: url(${cityFooter});
  width: 100vw;
  height: calc(100vw * 520 / 1114);
  background-size: cover;
  background-repeat: no-repeat;
`;
