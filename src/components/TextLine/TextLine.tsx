import { FunctionComponent } from "react";
import { Box, Grid } from "@material-ui/core";

import { Line } from "../Line";
import { LineTitle } from "../LineTitle";
import { LineDescription } from "../LineDescription";
import { ErrorMessage } from "../ErrorMessage";
import { useStyles } from "./utils";
import { TextLineProps } from "./TextLineProps";
import { LineButton } from "../LineButton";

export const TextLine: FunctionComponent<TextLineProps> = ({
    title,
    description,
    rightText,
    errorMessage,
    onClick,
    visualVariant = "clickable",
    isBottomDelimiterActive = true,
}) => {
    const classes = useStyles({ title, description, rightText, errorMessage, onClick, visualVariant });

    return (
        <Line
            onClick={onClick}
            className={classes.root}
            isBottomDelimiterActive={isBottomDelimiterActive}
        >
            <Grid
                container={true}
                direction="column"
                justifyContent="center"
            >
                {title ? (
                    <LineTitle {...{ description, visualVariant, title }} />
                ) : null}
                {description ? (
                    <LineDescription>
                        {description}
                    </LineDescription>
                ) : null}
            </Grid>
            <Box>
                {rightText ? (
                    <LineButton
                        text={rightText}
                        visualVariant={visualVariant}
                    />
                ) : null}
                {errorMessage ? (
                    <Box className={classes.error}>
                        <ErrorMessage text={errorMessage} />
                    </Box>
                ) : null}
            </Box>
        </Line>
    );
};
