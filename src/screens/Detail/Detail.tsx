import { FunctionComponent, useCallback, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { AppBar, Avatar, Box, Card, Drawer, Grid, IconButton, Tab, Tabs, Toolbar, Typography } from "@material-ui/core";
import { ArrowBack, ExpandLess, ExpandMore } from "@material-ui/icons";

import { getDevice, getDeviceName, getDeviceIdList } from "../../store";
import { Device } from "../../types";
import { useRootSelector } from "../../utils";
import { Spacer, Unplugger } from "../../components";
import { useStyles } from "./utils";
import { DrawerDeviceItem } from "./components";
import { DetailTab, RecordTab } from "./tabs";
import { DetailParams } from "./types";

export const Detail: FunctionComponent = () => {
    const classes = useStyles();
    const history = useHistory();
    const { id } = useParams<DetailParams>();
    const device = useRootSelector<Device | undefined>((state) => getDevice(state, id));
    const [tabIndex, setTabIndex] = useState(0);
    const [isDrawerOpened, setIsDrawerOpened] = useState(false)

    const close = useCallback(() => {
        history.push("/technika");
    }, [history]);

    useEffect(() => {
        if (device === undefined) {
            close();
        }
    }, [device, close]);


    const name = useRootSelector<string>((state) => getDeviceName(state, id));
    const idList = useRootSelector<string[]>((state) => getDeviceIdList(state).filter((deviceId) => deviceId !== id));

    if (device === undefined) {
        return null;
    }

    const EmptyTab = () => (
        <>
            <Spacer size={2} direction="column" />
            <Typography component="div" variant="subtitle2" align="center">
                Zatím nejsou dostupné žádné záznamy
            </Typography>
        </>
    );

    return (
        <Box className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <IconButton onClick={close} aria-label="Zpět" className={classes.button} >
                        <ArrowBack fontSize="medium" />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Data o vozidle
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box className={classes.content}>
                <Card variant="outlined" className={classes.card} onClick={() => setIsDrawerOpened(true)}>
                    <Grid container={true} direction="row" alignItems="center">
                        <Avatar variant="rounded" className={classes.avatar} alt={device.name} src={device.imageUrl} />
                        <Box flex={1} display="flex" flexDirection="column">
                            <Typography component="div" variant="body1" className={classes.name}>
                                {name}
                            </Typography>
                            <Grid container={true} direction="row" className={classes.subtitle}>
                                <Typography component="div" variant="subtitle2" className={classes.spz}>
                                    {device.spz}
                                </Typography>
                            </Grid>
                        </Box>
                        <IconButton>
                            {isDrawerOpened ? <ExpandLess /> : <ExpandMore />}
                        </IconButton>
                    </Grid>
                </Card>
            </Box>
            <Tabs
                value={tabIndex}
                onChange={(event, newValue) => setTabIndex(newValue)}
                indicatorColor="primary"
                variant="scrollable"
            >
                <Tab label="Detail" />
                <Tab label="Záznamy" />
                <Tab label="Fotky" />
                <Tab label="Závady" />
                <Tab label="Plán údržby" />
            </Tabs>
            <Box className={classes.tabContent}>
                <Unplugger isPlugged={tabIndex === 0}>
                    <DetailTab />
                </Unplugger>
                <Unplugger isPlugged={tabIndex === 1}>
                    <RecordTab />
                </Unplugger>
                <Unplugger isPlugged={tabIndex === 2}>
                    <EmptyTab />
                </Unplugger>
                <Unplugger isPlugged={tabIndex === 3}>
                    <EmptyTab />
                </Unplugger>
                <Unplugger isPlugged={tabIndex === 4}>
                    <EmptyTab />
                </Unplugger>
            </Box>
            <Drawer anchor="bottom" open={isDrawerOpened} onClose={() => setIsDrawerOpened(false)}>
                <Grid className={classes.drawerContent} container={true} direction="column">
                    {idList.map((id) => (
                        <DrawerDeviceItem
                            id={id}
                            key={id}
                            onClick={() => setIsDrawerOpened(false)}
                        />
                    ))}
                </Grid>
            </Drawer>
        </Box >
    );
};
