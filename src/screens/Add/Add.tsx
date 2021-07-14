import {FunctionComponent} from "react";
import {Box} from "@material-ui/core";
import {Add as AddIcon} from "@material-ui/icons";

import {BottomNavigation, ListItem, ListItemProps, Icon} from "../../components";
import {INVENTORY_LINK} from "../../constants";
import {useStyles} from "./utils";

export const Add: FunctionComponent = () => {
    const classes = useStyles();

    const addItemList: ListItemProps[] = [
        {icon: <AddIcon style={{fontSize: 32}} />, title: "Nová technika", destination: "nova-technika", variant: "success"},
        {icon: <Icon name="tachometer" />, title: "Stav tachometru", destination: "stav-tachometru"},
        {icon: <Icon name="refueling" />, title: "Tankování", destination: "tankovani"},
        {icon: <Icon name="expenses" />, title: "Výdaje", destination: "vydaje"},
        {icon: <Icon name="oil" />, title: "Údržba/Opravy", destination: "udrzba-opravy"},
        {icon: <Icon name="fault" />, title: "Závady", destination: "zavady"},
        {icon: <Icon name="progress" />, title: "Progres", destination: "progres"},
        {icon: <Icon name="note" />, title: "Poznámka", destination: "poznamka"},
        {icon: <Icon name="project" />, title: "Projekt", destination: "projekt"},
        {icon: <Icon name="parameters" />, title: "Technické paramtery", destination: "technicke-parametry"},
    ];

    return (
        <Box className={classes.root}>
            {addItemList.map((addItem) => (
                <ListItem key={addItem.title} {...addItem} />
            ))}
            <BottomNavigation selectedItem={INVENTORY_LINK} />
        </Box>
    );
};
