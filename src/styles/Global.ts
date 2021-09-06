import { createGlobalStyle } from "styled-components";
import { lightTheme } from "./Theme";
type ThemeType = typeof lightTheme;
const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  :root {
    font-size: 14px;
  }
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif; 
  }
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
  button {
    cursor: pointer;
  }
  h1 {
    font-size: 2.5rem;
  }
  h3{
    font-size: 1.78rem;
  }
  p{
    margin: 8px;
    font-size: 15px;
  }
  @media screen and (max-width: 768px){
    h1{
      font-size: 2rem;
    }
    p{
      font-size: 13px;
    }
  }
`;

export default GlobalStyles;
