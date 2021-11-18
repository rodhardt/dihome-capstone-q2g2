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
        --lightGray:#606060;
        --mainGray: #F1F1F1;
        --darkOrange: #E08043;
        --orange: #F08847;
        --lightOrange: #FFA166;
        --darkBlue: #0F9194;
        --lightBlue: #43DCE0;
        --opacityBlue: #0F919425;
        --opacityOrange: #F0884790;
        --mainFont: 'Space Mono', monospace;
        --darkGray: #404040;
        --darkerGray: #303030;
    }

    button:hover {
        cursor: pointer;
    }

    body {
        background-color: var(--mainGray);
        min-height: 100vh;
        position: absolute;
        max-width: 100vw;
        width: 100%;
        height: 100%;
    }

    main, section {
        background-color: var(--mainGray);
    }

    ul {
        list-style: none;
    }

    a, a:hover, a:focus, a:active {
      text-decoration: none;
      color: inherit;
    }

    main {
        margin-top: 50px;
    }
`;
