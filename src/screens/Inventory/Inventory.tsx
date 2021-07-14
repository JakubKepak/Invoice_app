import {Typography, Container, Grid, Fab} from "@material-ui/core";
import {Add as AddIcon} from "@material-ui/icons";

import {BottomNavigation, RouterLink, Logo} from "../../components";
import {INVENTORY_LINK} from "../../constants";
import {useStyles} from "./utils";
import {InventoryItem, InventoryItemProps} from "./components";

export const Inventory = () => {
    const classes = useStyles();

    const inventoryItemList: InventoryItemProps[] = [
        {id: "1", title: "Škoda Roomster", spz: "5B7-8573", year: 2011, imageUrl: "https://1gr.cz/fotky/idnes/21/012/r7/FDV88aa39_skoda_roomster.jpeg"},
        {id: "2", title: "Škoda Roomster", spz: "5B7-8573", year: 2011, imageUrl: "https://1gr.cz/fotky/idnes/21/012/r7/FDV88aa39_skoda_roomster.jpeg"},
        {id: "3", title: "Škoda Roomster", spz: "5B7-8573", year: 2011, imageUrl: "https://1gr.cz/fotky/idnes/21/012/r7/FDV88aa39_skoda_roomster.jpeg"},
        {id: "4", title: "FGR Midalu", spz: "5B7-8573", year: 2011, imageUrl: "https://www.midalu.eu/images/ctverec2.png"},
    ];

    return (
        <Container component="main">
            <div className={classes.paper}>
                <Grid direction="row" container={true}>
                    <Logo size="small" />
                </Grid>
                <Typography variant="h6" component="h2" className={classes.subtitle}>
                    Moje technika
                </Typography>
                <Grid>
                    {inventoryItemList.map((inventoryItem) => (
                        <RouterLink key={inventoryItem.id} to={`technika/${inventoryItem.id}`}>
                            <InventoryItem {...inventoryItem} />
                        </RouterLink>
                    ))}
                </Grid>
            </div>
            <RouterLink to="/pridat" className={classes.fabContainer}>
                <Fab color="primary" className={classes.fab} aria-label="Přidat">
                    <AddIcon fontSize="large" />
                </Fab>
            </RouterLink>
            <BottomNavigation selectedItem={INVENTORY_LINK} />
        </Container>
    );
}
