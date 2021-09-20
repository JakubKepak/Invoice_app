import { FunctionComponent } from "react";
import { Box, CircularProgress } from "@material-ui/core";

import { useStyles } from "./utils";

export const Loading: FunctionComponent = () => {
    const classes = useStyles();

    return (
        <Box className={classes.loading}>
            <CircularProgress />
        </Box>
    );
};
