import { FunctionComponent } from "react";
import { Box, Grid, Typography } from "@material-ui/core";

import { Line } from "../Line";
import { useStyles } from "./utils";
import { TextLineProps } from "./TextLineProps";

export const TextLine: FunctionComponent<TextLineProps> = ({
    title,
    description,
    rightText,
    errorMessage,
    onClick,
    visualVariant = "clickable",
}) => {
    const classes = useStyles({ title, description, rightText, errorMessage, onClick, visualVariant });

    return (
        <Line onClick={onClick}>
            <Grid container={true} direction="column" justifyContent="center" >
                {title ? (
                    <Typography component="div" variant="subtitle1" className={classes.title}>
                        {title}
                    </Typography>
                ) : null}
                {description ? (
                    <Typography component="div" variant="subtitle2" className={classes.description}>
                        {description}
                    </Typography>
                ) : null}
            </Grid>
            <Box>
                {rightText ? (
                    <Typography component="div" variant="subtitle1" className={classes.rightText}>
                        {rightText}
                    </Typography>
                ) : null}
                {errorMessage ? (
                    <Typography variant="subtitle1" className={classes.error}>
                        {errorMessage}
                    </Typography>
                ) : null}
            </Box>
        </Line>
    );
};
