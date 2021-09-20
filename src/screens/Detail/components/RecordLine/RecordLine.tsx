import { FunctionComponent } from "react";
import { Grid, Typography } from "@material-ui/core";

import { Line } from "../../../../components";
import { useStyles } from "./utils";
import { RecordLineProps } from "./RecordLineProps";

export const RecordLine: FunctionComponent<RecordLineProps> = ({
    icon,
    title,
    rightText,
    rightDescription,
    subtitle,
    rightDescriptionVariant = "note",
}) => {
    const classes = useStyles({ icon, title, rightText, rightDescription, subtitle, rightDescriptionVariant });

    return (
        <Line>
            <Grid container={true} direction="row" className={classes.root} alignItems="center">
                {icon}
                <Grid direction="column" className={classes.textContainer}>
                    <Grid container={true} direction="row" justifyContent="space-between" className={classes.leftContainer}>
                        <Typography component="div" variant="body1" className={classes.title}>
                            {title}
                        </Typography>
                        <Typography component="div" variant="body1" className={classes.rightText}>
                            {rightText}
                        </Typography>
                    </Grid>
                    <Grid container={true} direction="row" justifyContent="space-between">
                        <Typography component="div" variant="body1" className={classes.subtitle}>
                            {subtitle}
                        </Typography>
                        <Typography component="div" variant="body1" className={classes.rightDescription}>
                            {rightDescription}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Line>
    );
};
