import { FunctionComponent } from "react";
import { Box, List } from "@material-ui/core";

import { BottomNavigation, ListItem, ListItemProps, Icon } from "../../components";
import { OVERVIEW_LINK } from "../../constants";
import { useStyles } from "./utils";

export const Overview: FunctionComponent = () => {
    const classes = useStyles();

    const overviewItemList: ListItemProps[] = [
        { icon: <Icon name="car" />, title: "Záznamy", destination: "zaznamy" },
        { icon: <Icon name="servis" />, title: "Opravny", destination: "opravy" },
        { icon: <Icon name="analytics" />, title: "Analýza", destination: "analyzy" },
        { icon: <Icon name="plan" />, title: "Plán údržby", destination: "plan-udrzby" },
        { icon: <Icon name="agendas" />, title: "Sestavy", destination: "sestavy" },
        { icon: <Icon name="calendar" />, title: "Intervaly údržby", destination: "intervaly-udrzby" },
        { icon: <Icon name="folder" />, title: "Projekty", destination: "projekty" },
    ];

    return (
        <Box className={classes.root}>
            <List className={classes.list}>
                {overviewItemList.map((overviewItem) => (
                    <ListItem key={overviewItem.title} {...overviewItem} />
                ))}
            </List>
            <BottomNavigation selectedItem={OVERVIEW_LINK} />
        </Box>
    );
}
