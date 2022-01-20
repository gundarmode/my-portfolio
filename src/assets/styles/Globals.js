import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle `
html, body, div, span, h1, h2, h3, h4, h5, h6, p, a, img, strong, ul, li, form, br {margin: 0; padding: 0; border: 0; font-size: 100%; vertical-align: top;}
html {height: 100%; overflow-x:hidden;}
body {background:#fff; position: relative; color: #000; font-family: "Montserrat", sans-serif; -webkit-text-size-adjust: none; transition: transform ease .4s; overflow-x:hidden; height:100%}
body{background-size: 5px 5px;
background-image: conic-gradient(
  #000 90deg,
  #000 90deg 180deg,
  #000 180deg 270deg,
  #191919 270deg
);
}
sup {padding: 0; margin: 0; font-size: 90%; line-height: normal;}
a {text-decoration: none; color: #003fb8;text-decoration:underline;}
a:hover {color: #0e91f5; }
a img {border: none;}
input[type=text], input[type=password], textarea {background: #F3F3F3; border: 1px solid #EEE; padding: 6px 5px; font: normal 1em/16px "Open Sans", sans-serif; outline: none; border-radius: 0; transition: .3s all ease-in-out; color: #555; -webkit-appearance: none;}
*, *:before, *:after {-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;}
li {list-style:none;}
sup {font-size: .65em;line-height: 0;}

h1,h2,h3,h4 {font-weight:700; letter-spacing:-1px;}

h1{font-size:60px;line-height:60px; margin-bottom:40px; }
h1:after {content:""; width:200px; height:2px; display:block; background: rgb(32,35,112);background: linear-gradient(90deg, rgba(32,35,112,1) 0%, rgba(236,0,140,1) 100%); margin-top:30px;}

h2 {font-size:30px;line-height:30px; margin-bottom:30px;}

`