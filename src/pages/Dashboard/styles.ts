import styled from "styled-components";

export const DashboardStyled = styled.main`
  position: relative;

  .slider {
    width: 100%;

    margin: 50px auto 30px;
    display: flex;
    position: relative;
    height: 400px;
    align-items: center;
  }

  .boxSlider {
    background-color: var(--darkBlue);
    border-radius: 10px;
    width: 100%;
    height: 100%;
  }

  .image-container {
    width: 100%;
    height: 100%;
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
    transform: translateX(0%);
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
    transform: translateX(-100%);
  }

  .slider .slider-text {
    font-size: 12px;
    margin: 5px auto;
    height: 80px;
    padding: 5px 10px;
    color: var(--mainGray);
    display: flex;
    align-items: center;
    position: absolute;
    width: 100%;
  }

  .slider .description {
    margin: 0;
    background-color: #00000090;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .slider .comment {
    background-color: #00000090;
    bottom: 0;
    margin: 0;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
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

  .search-failed {
    margin: 50px auto 0;
    text-align: center;
    padding: 0 20px;
  }
  .search-failed p {
    font-size: 20px;
    margin-bottom: 10px;
    color: var(--darkGray);
  }
  .search-failed svg {
    width: 40px;
    height: 40px;
    color: var(--darkOrange);
  }

  ul {
    width: 95%;
    max-width: 1100px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  li {
    margin: auto 10px;
  }

  @media screen and (min-width: 900px) {
    .slider {
      height: 500px;
    }

    .slider .description {
      width: 300px;
      height: 150px;
      border-radius: 10px;
      font-size: 14px;
    }

    .slider .comment {
      width: 300px;
      height: 150px;
      border-radius: 10px;
      right: 0;
      font-size: 14px;
    }
  }
`;
