import {FunctionComponent} from "react";
import {useHistory} from "react-router-dom";
import {BottomNavigation as BottomNavigationComponent, BottomNavigationAction, AppBar} from "@material-ui/core";

import {Icon} from "../../components";
import {INVENTORY_LINK, OVERVIEW_LINK, USER_LINK} from "../../constants";
import {useStyles} from "./utils";

export type BottomNavigationProps = {
    selectedItem: typeof INVENTORY_LINK | typeof OVERVIEW_LINK | typeof USER_LINK;
}

export const BottomNavigation: FunctionComponent<BottomNavigationProps> = ({selectedItem}) => {
    const history = useHistory();
    const classes = useStyles();

    return (
        <AppBar position="fixed" className={classes.root} component="footer">
            <BottomNavigationComponent
                value={selectedItem}
                showLabels={true}
                className={classes.root}
            >
                <BottomNavigationAction
                    label="Technika"
                    icon={<Icon name="car-wide" />}
                    value={INVENTORY_LINK}
                    onClick={() => history.push(INVENTORY_LINK)}
                />
                <BottomNavigationAction
                    label="Přehled"
                    icon={<Icon name="list-wide" />}
                    value={OVERVIEW_LINK}
                    onClick={() => history.push(OVERVIEW_LINK)}
                />
                <BottomNavigationAction
                    label="Uživatel"
                    icon={<Icon name="user-wide" />}
                    value={USER_LINK}
                    onClick={() => history.push(USER_LINK)}
                />
            </BottomNavigationComponent>
        </AppBar>
    );
};
