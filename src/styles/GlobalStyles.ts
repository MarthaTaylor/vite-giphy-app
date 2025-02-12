import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 10;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color:rgb(209, 241, 235);
    color: white;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  a {
    color: #646cff;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  a:hover {
    color: #535bf2;
  }
`;

export default GlobalStyles;
