import React from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useQuery } from "react-query";

import { LightTheme, DarkTheme } from "./themes";

// components
import Menu from "./components/Menu";
import OverviewPage from "./components/OverviewPage";
import InvoiceDetailPage from "./components/InvoiceDetailPage";

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
`;

const ContentContainer = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

function App() {
  const fetchInvoices = async () => {
    const request = await fetch("http://localhost:3004/data");
    return request.json();
  };

  const { isLoading, data, error } = useQuery("invoices", fetchInvoices);

  return (
    <Router>
      <ThemeProvider theme={LightTheme}>
        <GlobalStyle />
        <Menu />
        <ContentContainer>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <OverviewPage isLoading={isLoading} data={data} />}
            />
            <Route
              exact
              path="/:id"
              render={() => <InvoiceDetailPage data={data} />}
            />
          </Switch>
        </ContentContainer>
      </ThemeProvider>
    </Router>
  );
}

export default App;
