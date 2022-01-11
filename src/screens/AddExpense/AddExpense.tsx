import { FunctionComponent, useEffect, useRef } from "react";
import { Box, Grid } from "@material-ui/core";
import { Redirect, Switch, useLocation } from "react-router-dom";

import { BottomNavigation, PageHeader, PrivateRoute } from "../../components";
import { INVENTORY_LINK } from "../../constants";
import { lastPathPart } from "../../utils";
import { useStyles } from "./utils";
import { addExpensePageList, addExpensePageMap } from "../../navigation";
import { createToLink } from "./utils";
import { Specification } from "./screens/Specification";
import { CategorySelection } from "./screens/CategorySelection";

export const AddExpense: FunctionComponent = () => {
    const classes = useStyles();
    const location = useLocation();
    const pageRef = useRef<HTMLDivElement>(null);
    const page = addExpensePageList.find((page) => page.address === lastPathPart(location.pathname)) ?? addExpensePageMap["category-selection"];
    const pagePosition = addExpensePageList.indexOf(page) + 1;

    useEffect(() => {
        pageRef.current?.scrollTo(0, 0);
    }, [pagePosition]);

    return (
        <Box className={classes.root}>
            <PageHeader>
                Výdaj • {pagePosition}/{addExpensePageList.length}
            </PageHeader>

            <Grid className={classes.page} ref={pageRef}>
                <Switch>
                    <PrivateRoute exact={true} path={createToLink("category-selection")}>
                        <CategorySelection />
                    </PrivateRoute>
                    <PrivateRoute exact={true} path={createToLink("specification")}>
                        <Specification />
                    </PrivateRoute>
                    <PrivateRoute>
                        <Redirect to={createToLink("category-selection")} />
                    </PrivateRoute>
                </Switch>
            </Grid>
            <BottomNavigation selectedItem={INVENTORY_LINK} />
        </Box>
    );
};
