import React from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { INVOICES } from "./queries/queries";

import { LightTheme, DarkTheme } from "./themes";

// components
import Menu from "./components/Menu";
import OverviewPage from "./components/OverviewPage";
import InvoiceDetailPage from "./components/InvoiceDetailPage/InvoiceDetailPage";

const GlobalStyle = createGlobalStyle`

  html {
    /* font sizes */
    --fontSizeSmall: .8rem;
    --fontSizeMedium: 1rem;
    --fontSizeLarge: 1.2rem;
    --fontSizeXXL: 1.5rem;

    /* misc */
    --borderRadius: 5px;
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
    color: ${({ theme }) => theme.colors.mainFontColor}
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
  const { loading, error, data } = useQuery(INVOICES);

  return (
    <Router>
      <ThemeProvider theme={LightTheme}>
        <GlobalStyle />
        <Menu />
        <ContentContainer>
          {loading && <div>Loading...</div>}
          {error && <div>Oh man, something went wrong</div>}
          {!loading && !error && (
            <Switch>
              <Route
                exact
                path="/"
                render={() => <OverviewPage data={data.data} />}
              />
              <Route exact path="/:id" render={() => <InvoiceDetailPage />} />
            </Switch>
          )}
        </ContentContainer>
      </ThemeProvider>
    </Router>
  );
}

export default App;
