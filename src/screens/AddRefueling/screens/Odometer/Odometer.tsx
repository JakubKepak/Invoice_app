import { Box, Grid } from "@material-ui/core";
import { FunctionComponent, useState } from "react";
import { useDispatch } from "react-redux";

import { DateLine, Delimiter, DeviceDrawer, DeviceLine, FileLine, NavigationButtons, NumberInputLine, TextAreaLine } from "../../../../components";
import { addRefuelingPageMap } from "../../../../navigation";
import {
    getDeviceIdList,
    getLastSelectedOrFirstDeviceId,
    getDevice,
    getDeviceName,
    getLastSelectedDeviceLastOdometerValue,
    actions as allActions,
    getRefuelingDate,
    getRefuelingNote,
    getRefuelingOdometerState,
    getRefuelingAttachmentUrlList,
    getRefuelingOdometerStateErrorMessage,
    getDeviceFuelCount,
} from "../../../../store";
import { strings } from "../../../../strings";
import { Device } from "../../../../types";
import { formatKm, useNavigate, useRootSelector } from "../../../../utils";
import { useStyles } from "./utils";

export const Odometer: FunctionComponent = () => {
    const classes = useStyles();
    const { navigate, goBack } = useNavigate();
    const dispatch = useDispatch();
    const [isDrawerOpened, setIsDrawerOpened] = useState(false)
    const note = useRootSelector<string | undefined>(getRefuelingNote);
    const id = useRootSelector<string | undefined>(getLastSelectedOrFirstDeviceId);
    const idList = useRootSelector<string[]>(getDeviceIdList);
    const device = useRootSelector<Device | undefined>((state) => getDevice(state, id));
    const name = useRootSelector<string>((state) => getDeviceName(state, id));
    const date = useRootSelector<Date | undefined>(getRefuelingDate);
    const odometerValue = useRootSelector<number | undefined>(getRefuelingOdometerState);
    const attachmentUrlList = useRootSelector<string[] | undefined>(getRefuelingAttachmentUrlList);
    const lastDeviceOdometerValue = useRootSelector<number | undefined>(getLastSelectedDeviceLastOdometerValue);
    const actions = allActions.refueling;
    const odometerStateErrorMessage = useRootSelector<string | undefined>(getRefuelingOdometerStateErrorMessage);
    const fuelCount = useRootSelector<number>((state) => getDeviceFuelCount(state, id));

    if (device === undefined) {
        goBack();
        return null;
    }

    return (
        <Box className={classes.root}>
            <Grid className={classes.page}>
                <DeviceLine
                    onClick={() => setIsDrawerOpened(true)}
                    spz={device.spz}
                    isExpanded={isDrawerOpened}
                    imageUrl={device.imageUrl}
                    {...{ name }}
                />
                <DateLine
                    defaultValue={date}
                    title={strings.date}
                    onConfirm={({ value }) => {
                        dispatch(actions.setDate(value))
                    }}
                />
                <NumberInputLine
                    title="Stav tachometru"
                    label={`Stav tachometru v km${lastDeviceOdometerValue !== undefined ? ` (${formatKm(lastDeviceOdometerValue)})` : ""}`}
                    description={`Poslední stav${formatKm(lastDeviceOdometerValue) ? `: ${formatKm(lastDeviceOdometerValue)}` : " je neznámý"}`}
                    type="float"
                    value={odometerValue}
                    formatter={formatKm}
                    onConfirm={({ value, closeDialog }) => {
                        dispatch(actions.setOdometerState(value));
                        closeDialog();
                    }}
                    errorMessage={odometerStateErrorMessage}
                />
                <FileLine
                    fileUrlList={attachmentUrlList}
                    onConfirm={(fileUrlList) => {
                        fileUrlList.forEach((fileUrl) => {
                            dispatch(actions.addAttachmentUrl(fileUrl));
                        });
                    }}
                    onRemoveItem={(fileUrl) => dispatch(actions.removeAttachmentUrl(fileUrl))}
                />
                <Delimiter />
                <TextAreaLine
                    title="Poznámka"
                    text={note}
                    onChange={(value) => dispatch(actions.setNote(value))}
                />
                <Delimiter />
            </Grid>
            <NavigationButtons
                previousText={strings.cancel}
                nextText={strings.next}
                onNextClick={() => {
                    if (odometerValue !== undefined) {
                        if (fuelCount > 1) {
                            navigate(`./${addRefuelingPageMap["fuels"].address}`);
                        } else {
                            navigate(`./${addRefuelingPageMap["main-fuel"].address}`);
                        }
                    } else {
                        dispatch(actions.setOdometerStateErrorMessage(strings.requiredValue));
                    }
                }}
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
