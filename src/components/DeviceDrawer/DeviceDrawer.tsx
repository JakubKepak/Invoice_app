import { FunctionComponent } from "react"
import { Drawer, Grid } from "@material-ui/core";

import { useStyles } from "./utils";
import { DrawerDeviceItem } from "./components";

export type DeviceDrawerProps = {
    isOpened: boolean,
    onClose: () => void,
    onSelect: (id: string) => void,
    idList: string[],
}

export const DeviceDrawer: FunctionComponent<DeviceDrawerProps> = ({
    isOpened,
    onClose,
    idList,
    onSelect,
}) => {
    const classes = useStyles();

    return (
        <Drawer
            anchor="bottom"
            open={isOpened}
            onClose={onClose}
        >
            <Grid
                className={classes.drawerContent}
                container={true}
                direction="column"
            >
                {idList.map((id) => (
                    <DrawerDeviceItem
                        id={id}
                        key={id}
                        onClick={() => {
                            onSelect(id);
                            onClose();
                        }}
                    />
                ))}
            </Grid>
        </Drawer>
    );
};
