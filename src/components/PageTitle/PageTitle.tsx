import { FunctionComponent } from "react";
import { Typography } from "@material-ui/core";

import { useStyles } from "./utils";

export type PageTitleProps = {
    text: string,
}

export const PageTitle: FunctionComponent<PageTitleProps> = ({ text }) => {
    const classes = useStyles();

    return (
        <Typography component="h1" variant="h5" className={classes.title}>
            {text}
        </Typography>
    );
};
