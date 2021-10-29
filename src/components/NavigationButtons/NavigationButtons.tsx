import { FunctionComponent } from "react";
import { Button, Grid } from "@material-ui/core";

import { useStyles } from "./utils";

export type NavigationButtonsProps = {
    previousText?: string,
    nextText?: string,
    onNextClick?: () => void,
    onPreviousClick?: () => void,
}

export const NavigationButtons: FunctionComponent<NavigationButtonsProps> = ({
    previousText,
    nextText,
    onNextClick,
    onPreviousClick,
}) => {
    const classes = useStyles();

    return (
        <Grid
            container={true}
            justifyContent={onPreviousClick ? "space-between" : "flex-end"}
            className={classes.navigation}
        >
            {onPreviousClick ? (
                <Button onClick={onPreviousClick} variant="outlined" color="primary">
                    {previousText}
                </Button>
            ) : null}
            {onNextClick ? (
                <Button onClick={onNextClick} variant="contained" color="primary">
                    {nextText}
                </Button>
            ) : null}
        </Grid>
    );
};
