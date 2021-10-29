import { FunctionComponent, useEffect, useRef } from "react";
import { Switch, useLocation, Redirect } from "react-router-dom";
import { Box, Grid } from "@material-ui/core";

import { INVENTORY_LINK } from "../../constants";
import { BottomNavigation, PrivateRoute, PageHeader } from "../../components";
import { lastPathPart } from "../../utils";
import { Vin, Basic, Parameters, Operation, Initial, Note } from "./screens";
import { pageMap, pageList, useStyles, createToLink } from "./utils";

export const AddDevice: FunctionComponent = () => {
    const classes = useStyles();
    const location = useLocation();
    const pageRef = useRef<HTMLDivElement>(null);

    const page = pageList.find((page) => page.address === lastPathPart(location.pathname)) ?? pageMap["vin"];
    const index = pageList.indexOf(page);

    useEffect(() => {
        pageRef.current?.scrollTo(0, 0);
    }, [index]);

    return (
        <Box className={classes.root}>
            <PageHeader>
                Nová technika • {index + 1}/{pageList.length}
            </PageHeader>
            <Grid className={classes.page} ref={pageRef}>
                <Switch>
                    <PrivateRoute exact={true} path={createToLink("vin")}>
                        <Vin />
                    </PrivateRoute>
                    <PrivateRoute exact={true} path={createToLink("basic")}>
                        <Basic />
                    </PrivateRoute>
                    <PrivateRoute exact={true} path={createToLink("parameters")}>
                        <Parameters />
                    </PrivateRoute>
                    <PrivateRoute exact={true} path={createToLink("operation")}>
                        <Operation />
                    </PrivateRoute>
                    <PrivateRoute exact={true} path={createToLink("initial")}>
                        <Initial />
                    </PrivateRoute>
                    <PrivateRoute exact={true} path={createToLink("note")}>
                        <Note />
                    </PrivateRoute>
                    <PrivateRoute>
                        <Redirect to={createToLink("vin")} />
                    </PrivateRoute>
                </Switch>
            </Grid>
            <BottomNavigation selectedItem={INVENTORY_LINK} />
        </Box>
    );
};
