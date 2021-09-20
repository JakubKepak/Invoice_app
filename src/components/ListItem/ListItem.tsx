import { FunctionComponent } from "react"
import { Grid, Typography, Card, Box } from "@material-ui/core";

import { RouterLink } from "../RouterLink";
import { Icon } from "../Icon";
import { useStyles } from "./utils";
import { ListItemProps } from "./ListItemProps";

export const ListItem: FunctionComponent<ListItemProps> = ({
    icon,
    title,
    destination,
    variant = "primary",
}) => {
    const classes = useStyles({ icon, title, destination, variant });

    return (
        <Card className={classes.root} variant="outlined">
            <RouterLink to={destination}>
                <Grid container={true} alignItems="center" className={classes.content}>
                    {icon ? (
                        <Box className={classes.icon}>
                            {icon}
                        </Box>
                    ) : null}
                    <Typography component="div" variant="subtitle1" className={classes.title}>
                        {title}
                    </Typography>
                    <Icon name="chevron-right" className={classes.chevron} variant="disabled" size="micro" />
                </Grid>
            </RouterLink>
        </Card>
    );
};
