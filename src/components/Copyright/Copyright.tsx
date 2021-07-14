import {FunctionComponent} from "react";
import Typography from "@material-ui/core/Typography";

export const Copyright: FunctionComponent = () =>  (
    <Typography
        variant="body2"
        color="textSecondary"
        align="center"
    >
        {"Copyright © MechIS "}
        {new Date().getFullYear()}
    </Typography>
);