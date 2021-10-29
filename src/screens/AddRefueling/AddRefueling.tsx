import { FunctionComponent, useEffect, useRef } from "react";
import { Switch, useLocation, Redirect } from "react-router-dom";
import { Box, Grid } from "@material-ui/core";

import { INVENTORY_LINK } from "../../constants";
import { BottomNavigation, PrivateRoute, PageHeader } from "../../components";
import { lastPathPart, useRootSelector } from "../../utils";
import { getRefuelingPageIdList } from "../../store";
import { AddRefuelingPageId } from "../../types";
import { addRefuelingPageList, addRefuelingPageMap } from "../../navigation";
import { Fuels, Odometer, MainFuel, SecondaryFuel } from "./screens";
import { useStyles, createToLink } from "./utils";

export const AddRefueling: FunctionComponent = () => {
    const classes = useStyles();
    const location = useLocation();
    const pageRef = useRef<HTMLDivElement>(null);
    const pageIdList = useRootSelector<AddRefuelingPageId[]>(getRefuelingPageIdList);
    const page = addRefuelingPageList.find((page) => page.address === lastPathPart(location.pathname)) ?? addRefuelingPageMap["odometer"];
    const pagePosition = pageIdList.indexOf(page.id) + 1;

    useEffect(() => {
        pageRef.current?.scrollTo(0, 0);
    }, [pagePosition]);

    return (
        <Box className={classes.root}>
            <PageHeader>
                Tankování • {pagePosition}/{pageIdList.length}
            </PageHeader>
            <Grid className={classes.page} ref={pageRef}>
                <Switch>
                    <PrivateRoute exact={true} path={createToLink("odometer")}>
                        <Odometer />
                    </PrivateRoute>
                    <PrivateRoute exact={true} path={createToLink("fuels")}>
                        <Fuels />
                    </PrivateRoute>
                    <PrivateRoute exact={true} path={createToLink("main-fuel")}>
                        <MainFuel />
                    </PrivateRoute>
                    <PrivateRoute exact={true} path={createToLink("secondary-fuel")}>
                        <SecondaryFuel />
                    </PrivateRoute>
                    <PrivateRoute>
                        <Redirect to={createToLink("odometer")} />
                    </PrivateRoute>
                </Switch>
            </Grid>
            <BottomNavigation selectedItem={INVENTORY_LINK} />
        </Box>
    );
};
