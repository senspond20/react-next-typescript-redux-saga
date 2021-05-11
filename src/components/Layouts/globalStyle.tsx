import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import {commonStyle} from "@components/Layouts/Theme";
const calcRem = (size: number) => `${size / 16}rem`;

const GlobalStyles = createGlobalStyle`
     ${reset};
     a{
         text-decoration:none;
         color:inherit;
     }
     *{
         box-sizing: border-box;
     }
     body{
         font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
         font-size : ${commonStyle.fontSizes.small};
         color : ${({theme}) => theme.body.fgColor};
         background : ${({theme}) => theme.body.bgColor};
     }
     //h1{font-size: 26px;}
     button {
        cursor:pointer;
     }
     button:hover{
        background: blue;
     }
     button:active{
        background: rgba(0,0,0,0.15);
     }
 `;
export default GlobalStyles;