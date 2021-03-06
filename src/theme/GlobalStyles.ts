import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*{
    padding:0;
    margin:0;
    box-sizing:border-box;
  }
  body{
    overflow-y: hidden;
    font-family: 'PT Sans', sans-serif;
  }
  button{
    cursor:pointer;
    border:0;
    background:transparent;
    outline:none;
  }
  ul{
    list-style:none;
  }
`;
