import { FunctionComponent } from "react";
import { Typography } from "@material-ui/core";

import { useStyles } from "./utils";

export type ErrorMessageProps = {
    text: string,
}

export const ErrorMessage: FunctionComponent<ErrorMessageProps> = ({ text }) => {
    const classes = useStyles();

    return (
        <Typography variant="subtitle1" className={classes.error}>
            {text}
        </Typography>
    )
};
