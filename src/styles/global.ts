import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        box-sizing:border-box;
        margin: 0;
        padding: 0;
        outline: 0;
        font-size: 16px;
        font-family: 'Space Mono', monospace;
    }

    :root {
        --ligthGray:#606060;
        --mainGray: #F1F1F1;
        --darkOrange: #E08043;
        --orange: #F08847;
        --lightOrange: #FFA166;
        --darkBlue: #0F9194;
        --lightBlue: #43DCE0;
        --opacityBlue: #0F919425;
        --opacityOrange: #F0884790;
        --mainFont: 'Space Mono', monospace;
    }

    button:hover {
        cursor: pointer;
    }
`;
