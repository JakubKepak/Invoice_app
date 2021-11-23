import {FunctionComponent, useState} from "react";
import {Box, Grid, Typography} from "@material-ui/core";
import { useDispatch } from "react-redux";
import {
    DeviceDrawer,
    DeviceLine, NavigationButtons,
    PageTitle,
    Spacer,
} from "../../../../components";
import {useNavigate, useRootSelector} from "../../../../utils";
import { useStyles } from "../../utils";
import {ExpenseComponent} from "../../components/ExpenseComponent";
import {Device} from "../../../../types";
import {
    getDevice,
    getDeviceIdList,
    getDeviceName,
    getLastSelectedOrFirstDeviceId,
    actions as allActions
} from "../../../../store";
import {strings} from "../../../../strings";
import {PageSubtitle} from "../../../../components/PageSubtitle";

export const CategorySelection: FunctionComponent = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { goBack } = useNavigate();
    const [isDrawerOpened, setIsDrawerOpened] = useState(false)
    const idList = useRootSelector<string[]>(getDeviceIdList);
    const id = useRootSelector<string | undefined>(getLastSelectedOrFirstDeviceId);
    const device = useRootSelector<Device | undefined>((state) => getDevice(state, id));
    const name = useRootSelector<string>((state) => getDeviceName(state, id));

    return (
        <Box className={classes.root}>
                {device === undefined ? (
                    "Není dostupná žádná technika."
                ) : (
                    <>
                        <DeviceLine
                            onClick={() => setIsDrawerOpened(true)}
                            spz={device.spz}
                            isExpanded={isDrawerOpened}
                            imageUrl={device.imageUrl}
                            {...{ name }}
                        />
                        <Spacer size={1} direction="column"/>
                        <Typography component="h1" variant="h5" className={classes.title}>
                            Zvolte druh výdaje:
                        </Typography>
                        <Grid className={classes.page}>
                            <ExpenseComponent />
                        </Grid>
                    </>
                )}
            <NavigationButtons
                previousText={strings.cancel}
                nextText={strings.complete}
                onPreviousClick={goBack}
            />
            <DeviceDrawer
                isOpened={isDrawerOpened}
                onClose={() => setIsDrawerOpened(false)}
                onSelect={(id) => dispatch(allActions.settings.setLastSelectedDeviceId(id))}
                idList={idList}
            />
        </Box>
    );
};
