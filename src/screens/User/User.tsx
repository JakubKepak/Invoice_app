import { FunctionComponent } from "react";
import { Typography, Box } from "@material-ui/core";

import { BottomNavigation, ListItem, Spacer } from "../../components";
import { LOGOUT_LINK, USER_LINK } from "../../constants";
import { Storage } from "./components";
import { useStyles } from "./utils";

export const User: FunctionComponent = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Box className={classes.content}>
                <Box>
                    <Typography component="h1" variant="h5" align="center">
                        Uživatel
                    </Typography>
                    <Typography variant="h6" component="h2" align="center">
                        Začátečník
                    </Typography>
                </Box>
                <Spacer size={2} direction="column" />
                <ListItem title="Profil uživatele" destination="profil-uzivatele" />
                <ListItem title="Nastavení" destination="nastaveni" />
                <ListItem title="Prodat techniku" destination="prodat-techniku" />
                <Spacer size={1} direction="column" />
                <Storage />
                <Spacer size={1} direction="column" />
                <ListItem title="O aplikaci" destination="o-aplikaci" />
                <ListItem title="Podmínky a ujednání" destination="podminky-a-ujednani" />
                <ListItem title="Odhlásit se" destination={LOGOUT_LINK} />
            </Box>
            <BottomNavigation selectedItem={USER_LINK} />
        </Box>
    );
}
