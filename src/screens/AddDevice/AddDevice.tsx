import { FunctionComponent, useEffect, useRef } from "react";
import { Switch, useLocation, Redirect } from "react-router-dom";
import { Box, Grid, Typography } from "@material-ui/core";

import { ADD_DEVICE_LINK, INVENTORY_LINK } from "../../constants";
import { BottomNavigation, PrivateRoute } from "../../components";
import { lastPathPart } from "../../utils";
import { Vin, Basic, Parameters, Operation, Initial, Note } from "./screens";
import { pageMap, pageList, useStyles } from "./utils";

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
            <Box className={classes.header}>
                <Typography component="div" variant="subtitle2" className={classes.title}>
                    Nová technika • {index + 1}/{pageList.length}
                </Typography>
            </Box>
            <Grid className={classes.page} ref={pageRef}>
                <Switch>
                    <PrivateRoute exact={true} path={`/${ADD_DEVICE_LINK}/${pageMap["vin"].address}`}>
                        <Vin />
                    </PrivateRoute>
                    <PrivateRoute exact={true} path={`/${ADD_DEVICE_LINK}/${pageMap["basic"].address}`}>
                        <Basic />
                    </PrivateRoute>
                    <PrivateRoute exact={true} path={`/${ADD_DEVICE_LINK}/${pageMap["parameters"].address}`}>
                        <Parameters />
                    </PrivateRoute>
                    <PrivateRoute exact={true} path={`/${ADD_DEVICE_LINK}/${pageMap["operation"].address}`}>
                        <Operation />
                    </PrivateRoute>
                    <PrivateRoute exact={true} path={`/${ADD_DEVICE_LINK}/${pageMap["initial"].address}`}>
                        <Initial />
                    </PrivateRoute>
                    <PrivateRoute exact={true} path={`/${ADD_DEVICE_LINK}/${pageMap["note"].address}`}>
                        <Note />
                    </PrivateRoute>
                    <PrivateRoute>
                        <Redirect to={`/${ADD_DEVICE_LINK}/vin`} />
                    </PrivateRoute>
                </Switch>
            </Grid>
            <BottomNavigation selectedItem={INVENTORY_LINK} />
        </Box>
    );
};
