import { FunctionComponent } from "react";
import { Box, Typography } from "@material-ui/core";

import { formatFloat } from "../../utils";
import { useStyles } from "./utils";

export type AmountProps = {
    label: string,
    value: number | undefined,
    unit: string,
}

export const Amount: FunctionComponent<AmountProps> = ({ label, value, unit }) => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Typography
                component="div"
                variant="h6"
                className={classes.label}
            >
                {label}
            </Typography>
            <Box className={classes.amount}>
                <Typography
                    component="div"
                    variant="h3"
                    className={classes.value}
                >
                    {value !== undefined ? formatFloat(value) : "0"}
                </Typography>
                <Typography
                    component="div"
                    variant="h6"
                    className={classes.unit}
                >
                    {unit}
                </Typography>
            </Box>
        </Box>
    );
};
