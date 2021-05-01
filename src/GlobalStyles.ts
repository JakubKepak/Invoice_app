import { createGlobalStyle } from 'styled-components';
import { device } from 'breakpoints';

export const GlobalStyle = createGlobalStyle`

  html {
    /* font sizes */
    --fontSizeXS: .6rem;
    --fontSizeSmall: .8rem;
    --fontSizeMedium: 1rem;
    --fontSizeLarge: 1.2rem;
    --fontSizeXXL: 1.5rem;

    /* misc */
    --borderRadius: 5px;
    --boxShadow: 1px 1px 5px 1px rgba(0,0,0,0.1)
  }

/* hide input spinners from number text field */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }

  *,
  *:before, 
  *:after {
    margin: 0;
    padding:0;
    box-sizing: border-box;
  }

*:focus {
  outline: none;
}

a, 
a:active, 
a:visited {
  text-decoration: none;
  color: inherit;
}
  
  body {
    font-family: 'Spartan', sans-serif;
    background-color: ${({ theme }) => theme.colors.mainBackground};

  }

  #root{
    display: flex;
    flex-direction: row;

    @media (max-width: 600px) {
      flex-direction: column;
  }
  }

  h1 {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.mainFontColor};

    @media ${device.xs} {
      font-size: 1.5rem;
    }
  }

  button {
    border: none;
    background-color: inherit;
    font-family: inherit;
    color: inherit;
    cursor: inherit;
  }
`;
