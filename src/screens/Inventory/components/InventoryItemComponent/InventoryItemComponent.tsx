import { FunctionComponent } from "react"
import { Avatar, Grid, Typography, Card, Box } from "@material-ui/core";

import { Icon } from "../../../../components"
import { formatYearMonthText } from "../../../../utils";
import { useStyles } from "./utils";
import { THIN_SPACE } from "../../../../constants";

export type InventoryItemComponentProps = {
    imageUrl?: string;
    title?: string;
    spz?: string;
    manufacturedYearMonthText?: string;
}

export const InventoryItemComponent: FunctionComponent<InventoryItemComponentProps> = ({ imageUrl, title, spz, manufacturedYearMonthText }) => {
    const classes = useStyles();

    const yearMonthText = formatYearMonthText(manufacturedYearMonthText);

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
                        {(spz && yearMonthText) ? (
                            `${THIN_SPACE}•${THIN_SPACE}`
                        ) : null}
                        {yearMonthText ? (
                            <Typography component="div" variant="subtitle2">
                                {yearMonthText}
                            </Typography>
                        ) : null}
                    </Grid>
                </Box>
                <Icon name="chevron-right" className={classes.icon} size="micro" variant="disabled" />
            </Grid>
        </Card>
    );
};
