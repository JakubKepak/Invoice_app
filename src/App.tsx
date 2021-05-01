import { useState, useEffect, ReactElement } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { DefaultTheme } from 'styled-components';
import useLocalStorage from 'hooks/useLocalStorage';
import { GlobalStyle } from 'GlobalStyles';

import { LightTheme, DarkTheme } from './themes';

// components
import Menu from './components/Menu/Menu';
import OverviewPage from './components/OverviewPage/OverviewPage';
import InvoiceDetailPage from './components/InvoiceDetailPage/InvoiceDetailPage';
import LoginPage from 'components/Login/LoginPage';
import NotFound from 'components/UtilityPages/NotFound';

const ContentContainer = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  margin: 3rem 0;
`;

function App(): ReactElement {
  const [theme, setTheme] = useState<DefaultTheme>(LightTheme);
  const [savedTheme, setSavedTheme] = useLocalStorage('theme', 'lightTheme');

  const themeToggle = () => {
    savedTheme === 'lightTheme'
      ? setSavedTheme('darkTheme')
      : setSavedTheme('lightTheme');
  };

  useEffect(() => {
    savedTheme === 'lightTheme' ? setTheme(LightTheme) : setTheme(DarkTheme);
  }, [savedTheme]);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Menu themeToggle={themeToggle} />
        <ContentContainer data-test='component-app'>
          <Switch>
            <Route
              exact
              path='/login'
              render={() => <LoginPage variant='LOGIN' />}
            />
            <Route
              exact
              path='/signup'
              render={() => <LoginPage variant='SIGNUP' />}
            />
            <Route exact path='/' render={() => <OverviewPage />} />
            <Route exact path='/:id' render={() => <InvoiceDetailPage />} />
            <Route component={NotFound} />
          </Switch>
        </ContentContainer>
      </ThemeProvider>
    </Router>
  );
}

export default App;
