import { Avatar, Box, Card, Grid, Typography } from "@material-ui/core";
import { FunctionComponent } from "react";
import { RouterLink } from "../../../../components";

import { useStyles } from "./utils";

export type DrawerDeviceItemComponentProps = {
    id: string,
    imageUrl?: string,
    name?: string,
    spz?: string,
    onClick: () => void,
}

export const DrawerDeviceItemComponent: FunctionComponent<DrawerDeviceItemComponentProps> = ({ id, imageUrl, name, spz, onClick }) => {
    const classes = useStyles();

    return (
        <RouterLink to={`./${id}`} onClick={onClick}>
            <Card className={classes.root} variant="outlined">
                <Grid container={true} direction="row" alignItems="center">
                    <Avatar variant="rounded" className={classes.avatar} alt={name} src={imageUrl} />
                    <Box flex={1} display="flex" flexDirection="column" className={classes.textContent}>
                        <Typography component="div" variant="subtitle1" className={classes.title}>
                            {name}
                        </Typography>
                        <Grid container={true} direction="row" className={classes.subtitle}>
                            <Typography component="div" variant="subtitle2" className={classes.spz}>
                                {spz}
                            </Typography>
                        </Grid>
                    </Box>
                </Grid>
            </Card>
        </RouterLink>
    );
};
