import {FunctionComponent} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {createMuiTheme, ThemeProvider} from "@material-ui/core";

import {Login, Overview, Inventory, Registration, User, Add} from "./screens";
import {ADD_LINK, INVENTORY_LINK, OVERVIEW_LINK, REGISTRATION_LINK, USER_LINK} from "./constants";
import {NotExist} from "./utils";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#2222D3",
        },
        success: {
            main: "#4CD964",
        },
    },
});

export const App: FunctionComponent = () => (
    <ThemeProvider {...{theme}}>
        <Router>
            <div style={{marginBottom: 80}}>
                <Switch>
                    <Route exact={true} path="/">
                        <Login />
                    </Route>
                    <Route exact={true} path={`/${INVENTORY_LINK}`}>
                        <Inventory />
                    </Route>
                    <Route exact={true} path={`/${OVERVIEW_LINK}`}>
                        <Overview />
                    </Route>
                    <Route exact={true} path={`/${REGISTRATION_LINK}`}>
                        <Registration />
                    </Route>
                    <Route exact={true} path={`/${USER_LINK}`}>
                        <User />
                    </Route>
                    <Route exact={true} path={`/${ADD_LINK}`}>
                        <Add />
                    </Route>
                    <Route>
                        <NotExist />
                    </Route>
                </Switch>
            </div>
        </Router>
    </ThemeProvider>
);
