import { FunctionComponent } from "react";

import { useStyles } from "./utils";

export const Delimiter: FunctionComponent = () => {
    const classes = useStyles();

    return (
        <div className={classes.root} />
    );
}
