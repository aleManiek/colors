import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing:border-box
}

body{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.wrapper{
    display:flex;
    align-items:center;
    justify-content:center;
    width:100vw;
    height:100vh;
    background: linear-gradient(to right bottom, #4b4b4b, #000000);
    overflow:hidden;
}
`;

export default GlobalStyle;
