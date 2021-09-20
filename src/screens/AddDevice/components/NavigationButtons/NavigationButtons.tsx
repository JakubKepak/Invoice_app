import { FunctionComponent } from "react";
import { Button, Grid } from "@material-ui/core";

import { useStyles } from "./utils";

export type NavigationButtonsProps = {
    previousText?: string,
    nextText?: string,
    onNextClick: () => void,
    onPreviousClick: () => void,
}

export const NavigationButtons: FunctionComponent<NavigationButtonsProps> = ({
    previousText = "Předchozí",
    nextText = "Další",
    onNextClick,
    onPreviousClick,
}) => {
    const classes = useStyles();

    return (
        <Grid
            container={true}
            justifyContent="space-between"
            className={classes.navigation}
        >
            <Button onClick={onPreviousClick} variant="outlined" color="primary">
                {previousText}
            </Button>
            <Button onClick={onNextClick} variant="contained" color="primary">
                {nextText}
            </Button>
        </Grid>
    );
};
