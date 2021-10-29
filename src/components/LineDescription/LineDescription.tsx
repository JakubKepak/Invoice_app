import { FunctionComponent } from "react";
import { Typography } from "@material-ui/core";

import { useStyles } from "./utils";

export const LineDescription: FunctionComponent = ({ children }) => {
    const classes = useStyles();

    return (
        <Typography
            component="div"
            variant="subtitle2"
            className={classes.description}
        >
            {children}
        </Typography>
    );
}
