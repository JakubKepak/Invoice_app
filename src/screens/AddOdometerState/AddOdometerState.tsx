import { FunctionComponent, useState } from "react";
import { Box, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import {
    BottomNavigation,
    DateLine,
    Delimiter,
    DeviceDrawer,
    DeviceLine,
    FileLine,
    NavigationButtons,
    NumberInputLine,
    PageHeader,
    TextAreaLine,
} from "../../components";
import { INVENTORY_LINK } from "../../constants";
import {
    actions as allActions,
    getDevice,
    getDeviceIdList,
    getDeviceName,
    getLastSelectedDeviceLastOdometerValue,
    getLastSelectedOrFirstDeviceId,
    getOdometerStateAttachmentUrlList,
    getOdometerStateDate,
    getOdometerStateNote,
    getOdometerStateValue,
    getOdometerStateValueErrorMessage,
} from "../../store";
import { strings } from "../../strings";
import { Device } from "../../types";
import { formatKm, useNavigate, useRootSelector } from "../../utils";
import { useStyles } from "./utils";

export const AddOdometerState: FunctionComponent = () => {
    const classes = useStyles();
    const { navigate, goBack } = useNavigate();
    const dispatch = useDispatch();
    const [isDrawerOpened, setIsDrawerOpened] = useState(false)
    const note = useRootSelector<string | undefined>(getOdometerStateNote);
    const id = useRootSelector<string | undefined>(getLastSelectedOrFirstDeviceId);
    const idList = useRootSelector<string[]>(getDeviceIdList);
    const device = useRootSelector<Device | undefined>((state) => getDevice(state, id));
    const name = useRootSelector<string>((state) => getDeviceName(state, id));
    const date = useRootSelector<Date | undefined>(getOdometerStateDate);
    const odometerValue = useRootSelector<number | undefined>(getOdometerStateValue);
    const attachmentUrlList = useRootSelector<string[] | undefined>(getOdometerStateAttachmentUrlList);
    const lastDeviceOdometerValue = useRootSelector<number | undefined>(getLastSelectedDeviceLastOdometerValue);
    const valueErrorMessage = useRootSelector<string | undefined>(getOdometerStateValueErrorMessage);
    const actions = allActions.odometerState;

    return (
        <Box className={classes.root}>
            <PageHeader>
                Stav tachometru
            </PageHeader>
            <Grid className={classes.page}>
                {device === undefined ? (
                    "Není dostupná žádná technika."
                ) : (
                    <>
                        <DeviceLine
                            name={name}
                            onClick={() => setIsDrawerOpened(true)}
                            spz={device.spz}
                            isExpanded={isDrawerOpened}
                            imageUrl={device.imageUrl}
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
                                dispatch(actions.setValue(value));
                                closeDialog();
                            }}
                            errorMessage={valueErrorMessage}
                        />
                        <FileLine
                            fileUrlList={attachmentUrlList}
                            description="Doporučujeme foto tachometru"
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
                    </>
                )}
            </Grid>
            <NavigationButtons
                previousText={strings.cancel}
                nextText={strings.complete}
                onNextClick={() => {
                    if (odometerValue !== undefined) {
                        dispatch(actions.save());
                        navigate(`/${INVENTORY_LINK}`);
                    } else {
                        dispatch(actions.setValueError(strings.requiredValue));
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
            <BottomNavigation selectedItem={INVENTORY_LINK} />
        </Box>
    );
};
