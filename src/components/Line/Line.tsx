import { FunctionComponent, MouseEventHandler } from "react";
import { Box } from "@material-ui/core";

import { useStyles } from "./utils";

export type LineProps = {
    onClick?: MouseEventHandler<HTMLElement>;
}

export const Line: FunctionComponent<LineProps> = ({ children, onClick }) => {
    const classes = useStyles({});

    return (
        <Box
            className={classes.root}
            onClick={onClick}
        >
            {children}
        </Box>
    );
};
