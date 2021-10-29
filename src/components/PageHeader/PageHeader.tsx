import { FunctionComponent } from "react";
import { Typography } from "@material-ui/core";

import { useStyles } from "./utils";

export type PageHeaderProps = {
    title?: string,
}

export const PageHeader: FunctionComponent<PageHeaderProps> = ({ title, children }) => {
    const classes = useStyles();

    return (
        <Typography
            component="div"
            variant="subtitle2"
            className={classes.title}
        >
            {title}
            {children}
        </Typography>
    );
}
