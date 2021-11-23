import {FunctionComponent, useEffect, useRef} from "react";
import {Box, Grid, IconButton} from "@material-ui/core";

import {
    BottomNavigation, NavigationButtons,
    PageHeader, PrivateRoute,
} from "../../components";
import { INVENTORY_LINK } from "../../constants";
import {lastPathPart, useNavigate} from "../../utils";
import { useStyles } from "./utils";
import {Redirect, Switch, useLocation} from "react-router-dom";
import {addExpensePageList, addExpensePageMap} from "../../navigation";
import {ArrowBack} from "@material-ui/icons";
import {createToLink} from "./utils";
import {Specification} from "./screens/Specification";
import {CategorySelection} from "./screens/CategorySelection";
import {strings} from "../../strings";

export const AddExpense: FunctionComponent = () => {
    const classes = useStyles();
    const { goBack } = useNavigate();
    const location = useLocation();
    const pageRef = useRef<HTMLDivElement>(null);
    const pageIdList = ["category-selection", "specification"];
    const page = addExpensePageList.find((page) => page.address === lastPathPart(location.pathname)) ?? addExpensePageMap["category-selection"];
    const pagePosition = pageIdList.indexOf(page.id) + 1;

    useEffect(() => {
        pageRef.current?.scrollTo(0, 0);
    }, [pagePosition]);

    return (
        <Box className={classes.root}>
                <PageHeader>
                    Výdaj • {pagePosition}/{pageIdList.length}
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
