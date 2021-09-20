import { useSelector } from "react-redux";
import { Typography, Grid, Fab, Box, List } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";

import { BottomNavigation, RouterLink, Logo } from "../../components";
import { INVENTORY_LINK } from "../../constants";
import { getDeviceIdList, RootState } from "../../store";
import { useStyles } from "./utils";
import { InventoryItem } from "./components";

export const Inventory = () => {
    const classes = useStyles();

    const idList = useSelector<RootState, string[]>((state) => getDeviceIdList(state));

    return (
        <Grid className={classes.root} container={true}>
            <Box className={classes.header}>
                <Logo size="small" />
                <Typography variant="h6" component="h2" className={classes.subtitle}>
                    Moje technika
                </Typography>
            </Box>
            <List className={classes.list}>
                {idList.length !== 0 ? idList.map((id) => (
                    <RouterLink key={id} to={`technika/${id}`}>
                        <InventoryItem id={id} />
                    </RouterLink>
                )) : "Seznam je zatím prázdný"}
            </List>
            <RouterLink to="/pridat" className={classes.fabContainer}>
                <Fab color="secondary" className={classes.fab} aria-label="Přidat">
                    <AddIcon fontSize="large" />
                </Fab>
            </RouterLink>
            <BottomNavigation selectedItem={INVENTORY_LINK} />
        </Grid>
    );
}
