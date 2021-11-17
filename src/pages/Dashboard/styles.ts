import styled from "styled-components";

export const DashboardStyled = styled.main`
  position: relative;
  .slider {
    width: 80%;
    max-width: 380px;
    margin: auto;
    display: flex;
    position: relative;
    height: 400px;
    align-items: center;
  }

  .boxSlider {
    background-color: var(--darkBlue);
    border-radius: 10px;
    width: 100%;
  }

  .image-container {
    width: 100%;
    height: 150px;
  }
  .boxSlider img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
  }

  .slider button {
    position: absolute;
    top: 50%;
    transform: translateX(-25%);
    width: 25px;
    height: 25px;
    color: var(--darkblue);
    border: 1px solid var(--darkBlue);
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .slider button svg {
    color: var(--darkBlue);
    width: 100%;
    height: 100%;
  }

  .slider button:last-child {
    left: 100%;
    transform: translateX(-75%);
  }

  .slider .slider-text {
    font-size: 12px;
    margin: 5px auto;
    height: 80px;
    padding: 5px 10px;
    color: var(--mainGray);
    display: flex;
    align-items: center;
  }

  .filter {
    color: var(--orange);
    border: 2px solid var(--orange);
    border-radius: 7px;
    background-color: #ffffff00;
    display: flex;
    align-items: center;
    padding: 2px 6px;

    margin: 10px auto 25px;
  }

  .filter svg {
    margin: 0 5px 0 0;
  }

  .filter:hover {
    color: white;
    background-color: var(--lightOrange);
  }
`;
