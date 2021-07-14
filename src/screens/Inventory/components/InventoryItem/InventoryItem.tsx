import {FunctionComponent} from "react"
import {Avatar, Grid, Typography, Card, Box} from "@material-ui/core";

import {Icon} from "../../../../components"
import {useStyles} from "./utils";

export type InventoryItemProps = {
    id: string;
    imageUrl: string;
    title: string;
    spz: string;
    year: number;
}

export const InventoryItem: FunctionComponent<InventoryItemProps> = ({imageUrl, title, spz, year}) => {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
            <Grid container={true} direction="row" alignItems="center">
                <Avatar variant="rounded" className={classes.avatar} alt={title} src={imageUrl} />
                <Box flex={1} display="flex" flexDirection="column" className={classes.textContent}>
                    <Typography component="div" variant="subtitle1" className={classes.title}>
                        {title}
                    </Typography>
                    <Grid container={true} direction="row" className={classes.subtitle}>
                        <Typography component="div" variant="subtitle2" className={classes.spz}>
                            {spz}
                        </Typography>
                        &nbsp;•&nbsp;
                        <Typography component="div" variant="subtitle2">
                            {year}
                        </Typography>
                    </Grid>
                </Box>
                <Icon name="chevron-right" className={classes.icon} size="micro" variant="disabled" />
            </Grid>
        </Card>
    );
};
