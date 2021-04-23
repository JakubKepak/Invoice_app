import { useState, useEffect } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { device } from "breakpoints";
import { DefaultTheme } from "styled-components";
import useLocalStorage from "hooks/useLocalStorage";

import { LightTheme, DarkTheme } from "./themes";

// components
import Menu from "./components/Menu/Menu";
import OverviewPage from "./components/OverviewPage/OverviewPage";
import InvoiceDetailPage from "./components/InvoiceDetailPage/InvoiceDetailPage";
import LoginPage from "components/Login/LoginPage";
import NotFound from "components/UI/NotFound";

const GlobalStyle = createGlobalStyle`

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

const ContentContainer = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  margin: 3rem 0;
`;

function App() {
  const [theme, setTheme] = useState<DefaultTheme>(LightTheme);
  const [savedTheme, setSavedTheme] = useLocalStorage("theme", "lightTheme");

  const themeToggle = () => {
    savedTheme === "lightTheme"
      ? setSavedTheme("darkTheme")
      : setSavedTheme("lightTheme");
  };

  useEffect(() => {
    if (savedTheme === "lightTheme") setTheme(LightTheme);
    if (savedTheme === "darkTheme") setTheme(DarkTheme);
  }, [savedTheme]);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Menu themeToggle={themeToggle} />
        <ContentContainer data-test="component-app">
          <Switch>
            <Route
              exact
              path="/login"
              render={() => <LoginPage variant="LOGIN" />}
            />
            <Route
              exact
              path="/signup"
              render={() => <LoginPage variant="SIGNUP" />}
            />
            <Route exact path="/" render={() => <OverviewPage />} />
            <Route exact path="/:id" render={() => <InvoiceDetailPage />} />
            <Route component={NotFound} />
          </Switch>
        </ContentContainer>
      </ThemeProvider>
    </Router>
  );
}

export default App;
