import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import {commonStyle} from "@components/Layouts/Theme";
const calcRem = (size: number) => `${size / 16}rem`;

const GlobalStyles = createGlobalStyle`
    ${reset}
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
    }

    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
      display: block;
    }

    body {
      line-height: 1;
    }

    ol, ul {
      list-style: none;
    }

    blockquote, q {
      quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
      content: '';
      content: none;
    }

    table {
      border-collapse: collapse;
      border-spacing: 0;
    }
     a{
         text-decoration:none;
         color:inherit;
     }
     *{
         box-sizing: border-box;
     }
     html,
     body {
      padding: 0;
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      color : ${({theme}) => theme.body.fgColor};
      background : ${({theme}) => theme.body.bgColor};
       font-size: 1.05em;
       letter-spacing :0.5px;
       word-spacing:5px;
       line-height:1.2;
     }

     //h1{font-size: 26px;}
     button {
        cursor:pointer;
     }
     button:hover{
        //background: blue;
     }
     button:active{
        background: rgba(0,0,0,0.15);
     }
     h1,h2,h3,h4,h5,h6{  display: block; font-weight: bold;}
     h1 {  font-size: 2em; margin: 0.67em 0;  }
     h2 {  font-size: 1.5em; margin: 0.83em 0; }
     h3 {  font-size: 1.17em; margin: 1em 0;}
     h4 {  font-size: 1em; margin: 1.33em 0;}
     h5 {  font-size: .83em; margin: 1.67em 0;}
     h6 {  font-size: .67em; margin: 2.33em 0;}
     p {margin: 0.7em;}
    
    @media(max-width: 1150px){
      .headerMenu{
        //display:block;
      }
      .toc{
        grid-row: 4 / 5;
        grid-column: 1 / 4;
      }
      //.home-toc{
      //  display: none;
      //}
      .blog-main{
        grid-column: 1 / 4;
      }
      /* aside{
          grid-row: 3 / 5;
          grid-column: 1 / 4;
      } */
    }
    @media(max-width: 800px){
      //.top-hero{display: none}
      .home-card-wrap{
        grid-column: 1 / 4;
      }
      .aside_hero{
        display: none;
      }
      .blog-sidebar{
        background: #fff;
        position: fixed;
        width: 400px;
        height: 1600px;
        top:-70px;
        border-left: 1px solid red;
        right: 0;
        bottom: 0;
        opacity: 1;
        .side-sticky{
          position: relative;
        }
      }
    }
    .blog-sidebar-ative{
      
    }
 
 `;

export default GlobalStyles;
