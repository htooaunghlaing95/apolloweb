import { createGlobalStyle } from "styled-components";
import "@fontsource/kaushan-script";
import "@fontsource/sirin-stencil";

const GlobalStyles = createGlobalStyle`
 *,*::before,*::after{
    margin: 0;
    padding: 0;
 }

 body{
    font-family: "Sirin Stencil";
    overflow-x: hidden;
    background: #000000;
    background-size: cover; 

    @media (min-width: 1920px) {
      padding: 0rem 30rem;
    }
   
    @media (min-width: 1080px) {
      margin: 0rem;
    }
 }
 h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
 }
 a{
    color: inherit;
    text-decoration: none;
 }


`

export default GlobalStyles;