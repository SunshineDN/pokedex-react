import { createGlobalStyle } from "styled-components";

import FlexoBold from "../assets/fonts/Flexo-Bold.ttf";
import FlexoRegular from "../assets/fonts/Flexo-Regular.ttf";
import FlexoItalic from "../assets/fonts/Flexo-It.ttf";
import PokemonSolid from "../assets/fonts/PokemonSolid.ttf";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Flexo Regular';
        src: url(${FlexoRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Flexo Italic';
        src: url(${FlexoItalic}) format('truetype');
        font-weight: 400;
        font-style: italic;
    }

    @font-face {
        font-family: 'Flexo Bold';
        src: url(${FlexoBold}) format('truetype');
        font-weight: 700;
        font-style: normal;
    }

    @font-face {
        font-family: 'Pokemon Solid';
        src: url(${PokemonSolid}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Flexo Regular', sans-serif;
    }
`;
