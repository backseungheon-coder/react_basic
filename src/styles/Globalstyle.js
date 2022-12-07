import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  html{
    width:100%;
    height:100%;
  }
  body {
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
    width:100%;
    height:100%;
  }
  #root{
    width:100%;
    height:100%;
  }
  li{
    list-style: none;
  }
`;

export default GlobalStyle;