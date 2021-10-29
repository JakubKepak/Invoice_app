import { FunctionComponent, MouseEventHandler } from "react";
import { Box } from "@material-ui/core";

import { Delimiter } from "../Delimiter";
import { useStyles } from "./utils";

export type LineProps = {
    onClick?: MouseEventHandler<HTMLElement>;
    className?: string,
    isBottomDelimiterActive?: boolean,
}

export const Line: FunctionComponent<LineProps> = ({
    children,
    onClick,
    className,
    isBottomDelimiterActive = true,
}) => {
    const classes = useStyles({});

    return (
        <Box
            className={`${classes.root} ${className}`}
            onClick={onClick}
        >
            <Box className={classes.content}>
                {children}
            </Box>
            {isBottomDelimiterActive ? (
                <Delimiter />
            ) : null}
        </Box>
    );
};
