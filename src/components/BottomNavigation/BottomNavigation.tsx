import { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { BottomNavigation as BottomNavigationComponent, BottomNavigationAction, AppBar } from "@material-ui/core";

import { Icon } from "../../components";
import { INVENTORY_LINK, OVERVIEW_LINK, USER_LINK } from "../../constants";
import { useStyles } from "./utils";

export type BottomNavigationProps = {
    selectedItem: typeof INVENTORY_LINK | typeof OVERVIEW_LINK | typeof USER_LINK;
}

export const BottomNavigation: FunctionComponent<BottomNavigationProps> = ({ selectedItem }) => {
    const history = useHistory();

    const classes = useStyles();

    const handleNavigation = (path: string) => {
        history.push(`../${path}`)
    }

    return (
        <AppBar position="static" className={classes.root} component="footer">
            <BottomNavigationComponent
                value={selectedItem}
                showLabels={true}
                className={classes.navigation}
            >
                <BottomNavigationAction
                    label="Technika"
                    icon={<Icon name="car-wide" />}
                    value={INVENTORY_LINK}
                    onClick={() => handleNavigation(INVENTORY_LINK)}
                />
                <BottomNavigationAction
                    label="Přehled"
                    icon={<Icon name="list-wide" />}
                    value={OVERVIEW_LINK}
                    onClick={() => handleNavigation(OVERVIEW_LINK)}
                />
                <BottomNavigationAction
                    label="Uživatel"
                    icon={<Icon name="user-wide" />}
                    value={USER_LINK}
                    onClick={() => handleNavigation(USER_LINK)}
                />
            </BottomNavigationComponent>
        </AppBar>
    );
};
