import {FunctionComponent} from "react";
import {Typography} from "@material-ui/core";

import {useStyles} from "./utils";

export type LogoProps = {
    size: "small" | "big";
}

export const Logo: FunctionComponent<LogoProps> = ({size})=> {
    const classes = useStyles();

    return (
        <Typography component="h1" variant={size === "small" ? "h6" : "h4"} className={classes.root}>
            Mech<span className={classes.colored}>IS</span>
        </Typography>
    );
};
