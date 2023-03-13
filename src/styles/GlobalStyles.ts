import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* Reset styles */
  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Global font setting */
  body {    
    font-family: Pretendard-Regular, sans-serif;
  }

  ul,li{
    list-style:none;
  }

  a{
    text-decoration:none;
    color: #000;
  }
`;

export default GlobalStyles;
