import {FunctionComponent} from "react";
import {Box, Typography, Button, LinearProgress, Grid} from "@material-ui/core";

import {Icon} from "../../../../components";
import {useStyles} from "./utils";

export type StorageProps = {
    actual: number;
    overall: number;
}

export const Storage: FunctionComponent<StorageProps> = ({actual, overall}) => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Grid container={true} direction="row">
                <Icon name="cloud" className={classes.icon} />
                <Typography component="h4" className={classes.title}>
                    Úložiště zdarma
                </Typography>
            </Grid>
            <LinearProgress variant="determinate" className={classes.progress} value={100 * actual / overall} />
            <Typography component="h3" className={classes.used}>
                Využito {actual} MB ze {overall} MB
            </Typography>
            <Button
                type="submit"
                disableElevation={true}
                variant="contained"
                color="primary"
                className={classes.button}
            >
                Koupit úložiště
            </Button>
        </Box>
    );
};
