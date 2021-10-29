import { FunctionComponent, useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { AppBar, Box, IconButton, Tab, Tabs, Toolbar, Typography } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";

import { getDeviceName, getDeviceIdList, actions, getLastSelectedOrFirstDevice, getLastSelectedOrFirstDeviceId } from "../../store";
import { Device } from "../../types";
import { useNavigate, useRootSelector } from "../../utils";
import { DeviceDrawer, DeviceLine, Unplugger } from "../../components";
import { strings } from "../../strings";
import { useStyles } from "./utils";
import { DetailTab, RecordTab } from "./tabs";
import { DetailParams } from "./types";
import { EmptyTab } from "./components";

export const Detail: FunctionComponent = () => {
    const classes = useStyles();
    const history = useHistory();
    const { navigate } = useNavigate();
    const { id: navigationId } = useParams<DetailParams>();
    const dispatch = useDispatch();
    const lastSelectedOrFirstDevice = useRootSelector<Device | undefined>(getLastSelectedOrFirstDevice);
    const [tabIndex, setTabIndex] = useState(0);
    const [isDrawerOpened, setIsDrawerOpened] = useState(false)

    const close = useCallback(() => {
        history.push("/technika");
    }, [history]);

    useEffect(() => {
        dispatch(actions.settings.setLastSelectedDeviceId(navigationId));
    }, [navigationId, dispatch]);

    useEffect(() => {
        if (lastSelectedOrFirstDevice === undefined) {
            close();
        }
    }, [lastSelectedOrFirstDevice, close]);

    const name = useRootSelector<string>((state) => getDeviceName(state, getLastSelectedOrFirstDeviceId(state)));
    const idList = useRootSelector<string[]>((state) => getDeviceIdList(state).filter((deviceId) => deviceId !== lastSelectedOrFirstDevice?.id));

    if (lastSelectedOrFirstDevice === undefined) {
        return null;
    }

    return (
        <Box className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        onClick={close}
                        aria-label={strings.back}
                        className={classes.button}
                    >
                        <ArrowBack fontSize="medium" />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Data o vozidle
                    </Typography>
                </Toolbar>
            </AppBar>
            <DeviceLine
                name={name}
                imageUrl={lastSelectedOrFirstDevice.imageUrl}
                spz={lastSelectedOrFirstDevice.spz}
                onClick={() => setIsDrawerOpened(true)}
                isExpanded={isDrawerOpened}
            />
            <Tabs
                value={tabIndex}
                onChange={(_, newValue) => setTabIndex(newValue)}
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
            <DeviceDrawer
                isOpened={isDrawerOpened}
                onClose={() => setIsDrawerOpened(false)}
                idList={idList}
                onSelect={(id) => navigate(`/technika/${id}`)}
            />
        </Box >
    );
};
