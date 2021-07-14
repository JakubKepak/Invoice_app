import {FunctionComponent} from "react";
import {Typography, Container} from "@material-ui/core";

import {Spacer, ListItem} from "../components";

export const NotExist: FunctionComponent = () => (
    <Container>
        <Spacer size={3} direction="column" />
        <Typography component="h1" variant="h5" align="center">
            Tato stránka neexistuje
        </Typography>
        <Spacer size={3} direction="column" />
        <ListItem title="Vrátit se domů" destination="" />
    </Container>
);
