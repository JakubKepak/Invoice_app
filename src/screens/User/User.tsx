import {FunctionComponent} from "react";
import {Typography, Box, Container} from "@material-ui/core";

import {BottomNavigation, ListItem, Spacer} from "../../components";
import {USER_LINK} from "../../constants";
import {Storage} from "./components";
import {useStyles} from "./utils";

export const User: FunctionComponent = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Spacer size={1} direction="column" />
            <Container>
                <Typography component="h1" variant="h5" align="center">
                    Uživatel
                </Typography>
                <Typography variant="h6" component="h2" align="center">
                    Začátečník
                </Typography>
            </Container>
            <Spacer size={2} direction="column" />
            <ListItem title="Můj účet" destination="muj-ucet" />
            <ListItem title="Nastavení" destination="nasvateni" />
            <ListItem title="Prodat techniku" destination="prodat-techniku" />
            <Spacer size={2} direction="column" />
            <Storage actual={50} overall={150} />
            <Spacer size={2} direction="column" />
            <ListItem title="O aplikaci" destination="o-aplikaci" />
            <ListItem title="Podmínky a ujednání" destination="podminky-a-ujednani" />
            <ListItem title="Odhlásit se" destination="/" />
            <BottomNavigation selectedItem={USER_LINK} />
        </Box>
    );
}
