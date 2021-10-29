import { FunctionComponent } from "react";
import { Avatar, Box, Card, Grid, IconButton, Typography } from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

import { useStyles } from "./utils";

export type DeviceLineProps = {
    name: string,
    spz: string | undefined,
    imageUrl: string | undefined,
    onClick?: () => void,
    isExpanded?: boolean,
}

export const DeviceLine: FunctionComponent<DeviceLineProps> = ({
    name,
    spz,
    imageUrl,
    onClick,
    isExpanded = false,
}) => {
    const classes = useStyles();

    return (
        <Box className={classes.content}>
            <Card
                variant="outlined"
                className={classes.card}
                onClick={onClick}>
                <Grid
                    container={true}
                    direction="row"
                    alignItems="center"
                >
                    <Avatar
                        variant="rounded"
                        className={classes.avatar}
                        alt={name}
                        src={imageUrl}
                    />
                    <Box
                        flex={1}
                        display="flex"
                        flexDirection="column"
                    >
                        <Typography
                            component="div"
                            variant="body1"
                            className={classes.name}
                        >
                            {name}
                        </Typography>
                        <Grid
                            container={true}
                            direction="row"
                            className={classes.subtitle}
                        >
                            <Typography
                                component="div"
                                variant="subtitle2"
                                className={classes.spz}
                            >
                                {spz}
                            </Typography>
                        </Grid>
                    </Box>
                    {onClick ? (
                        <IconButton>
                            {isExpanded ? <ExpandLess /> : <ExpandMore />}
                        </IconButton>
                    ) : null}
                </Grid>
            </Card>
        </Box>
    )
};
