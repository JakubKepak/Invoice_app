import { FunctionComponent, useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { createTheme, makeStyles, ThemeProvider } from "@material-ui/core";

import {
    ADD_DEVICE_LINK,
    ADD_LINK,
    ADD_ODOMETER_STATE_LINK,
    ADD_REFUELING_LINK,
    INVENTORY_LINK,
    LOGIN_LINK,
    LOGOUT_LINK,
    OVERVIEW_LINK,
    REGISTRATION_LINK,
    SELECT_CATEGORY_LINK,
    SELECT_COACHBUILDER_LINK,
    SELECT_FUEL_LINK,
    SELECT_MANUFACTURER_LINK,
    SELECT_MODEL_LINK,
    USER_LINK,
} from "./constants";
import {
    Login,
    Overview,
    Inventory,
    Registration,
    User,
    Add,
    AddDevice,
    Detail,
    Logout,
    CoachbuilderList,
    CategoryList,
    ManufacturerList,
    ModelList,
    FuelList,
    AddRefueling,
    AddOdometerState,
} from "./screens";
import { isDebug, useRootSelector } from "./utils";
import { actions, store } from "./store";
import { Loading, PageHeader, PrivateRoute } from "./components";

const theme = createTheme({
    palette: {
        primary: {
            main: "#2222D3",
            contrastText: "#FFFFFF",
        },
        secondary: {
            main: "#4CD964",
            contrastText: "#FFFFFF",
        },
        success: {
            main: "#4CD964",
        },
        error: {
            main: "#F44336",
        },
    },
});

export const useStyles = makeStyles(({ spacing }) => ({
    root: {
        height: "100%",
        flex: 1,
    },
}));

export const App: FunctionComponent = () => (
    <Provider store={store}>
        <ThemeProvider {...{ theme }}>
            <Router>
                <AppContent />
            </Router>
        </ThemeProvider>
    </Provider>
);

export const AppContent: FunctionComponent = () => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const isLoading = useRootSelector<boolean>((state) => state.manufacturer.isLoading);

    useEffect(() => {
        dispatch(actions.manufacturer.getList());
    }, [dispatch]);

    return isLoading ? <Loading /> : (
        <div className={classes.root}>
            <Switch>
                <Route exact={true} path={`/${LOGIN_LINK}`}>
                    <Login />
                </Route>
                <Route exact={true} path={`/${LOGOUT_LINK}`}>
                    <Logout />
                </Route>
                <PrivateRoute exact={true} path={`/${INVENTORY_LINK}`}>
                    <Inventory />
                </PrivateRoute>
                <PrivateRoute exact={true} path={`/${OVERVIEW_LINK}`}>
                    <Overview />
                </PrivateRoute>
                <Route exact={true} path={`/${REGISTRATION_LINK}`}>
                    <Registration />
                </Route>
                <PrivateRoute exact={true} path={`/${USER_LINK}`}>
                    <User />
                </PrivateRoute>
                <PrivateRoute exact={true} path={`/${ADD_LINK}`}>
                    <Add />
                </PrivateRoute>
                <PrivateRoute path={`/${ADD_DEVICE_LINK}`}>
                    <AddDevice />
                </PrivateRoute>
                <PrivateRoute path={`/${SELECT_MANUFACTURER_LINK}`}>
                    <ManufacturerList />
                </PrivateRoute>
                <PrivateRoute path={`/${SELECT_CATEGORY_LINK}`}>
                    <CategoryList />
                </PrivateRoute>
                <PrivateRoute path={`/${SELECT_MODEL_LINK}`}>
                    <ModelList />
                </PrivateRoute>
                <PrivateRoute path={`/${SELECT_FUEL_LINK}`}>
                    <FuelList />
                </PrivateRoute>
                <PrivateRoute path={`/${SELECT_COACHBUILDER_LINK}`}>
                    <CoachbuilderList />
                </PrivateRoute>
                <PrivateRoute exact={true} path={`/${INVENTORY_LINK}/:id`}>
                    <Detail />
                </PrivateRoute>
                <PrivateRoute path={`/${ADD_REFUELING_LINK}`}>
                    <AddRefueling />
                </PrivateRoute>
                <PrivateRoute exact={true} path={`/${ADD_ODOMETER_STATE_LINK}`}>
                    <AddOdometerState />
                </PrivateRoute>
                <Route path="*">
                    {!isDebug ? (
                        <Redirect to={`/${INVENTORY_LINK}`} />
                    ) : (
                        <PageHeader>
                            Neznámá adresa
                        </PageHeader>
                    )}
                </Route>
            </Switch>
        </div >
    );
};
