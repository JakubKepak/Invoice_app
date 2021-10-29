import { FunctionComponent, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { Box } from "@material-ui/core";

import {
    NumberInputLine,
    RouterLink,
    TextInputLine,
    TextLine,
    Unplugger,
    DoubleNumberDialog,
    DoubleSelectDialog,
    PageTitle,
    NavigationButtons,
} from "../../../../components";
import {
    actions,
    getNewDeviceFuelText,
    getCoachbuilderText,
    transmissionTypeSelectItemList,
    transmissionNumberSelectItemList,
    getMainTankVolumeTitle,
    getSecondaryTankVolumeTitle,
    getMainFuelLabel,
    getSecondaryFuelLabel,
    getMainUnit,
    getSecondaryUnit,
} from "../../../../store";
import { formatCcm, formatPowerText, formatTorqueText, formatTransmissionText, formatUnitFloat, useNavigate, useRootSelector } from "../../../../utils";
import { strings } from "../../../../strings";
import { NewDeviceErrorDataState, TransmissionType, Unit } from "../../../../types";
import { pageMap } from "../../utils";

export const Parameters: FunctionComponent = () => {
    const [isPowerDialogVisible, setIsPowerDialogVisible] = useState(false);
    const [isTorqueDialogVisible, setIsTorqueDialogVisible] = useState(false);
    const [isTransmissionDialogVisible, setIsTransmissionDialogVisible] = useState(false);

    const dispatch = useDispatch();
    const { navigate } = useNavigate();

    const motorization = useRootSelector<string | undefined>((state) => state.newDevice.motorization);
    const powerText = useRootSelector<string | undefined>((state) => formatPowerText(state.newDevice.powerKw, state.newDevice.powerRPM));
    const powerKw = useRootSelector<number | undefined>((state) => state.newDevice.powerKw);
    const powerRPM = useRootSelector<number | undefined>((state) => state.newDevice.powerRPM);
    const fuelText = useRootSelector<string | undefined>((state) => getNewDeviceFuelText(state));
    const mainTankVomule = useRootSelector<number | undefined>((state) => state.newDevice.mainTankVolume);
    const secondaryTankVomule = useRootSelector<number | undefined>((state) => state.newDevice.secondaryTankVolume);
    const errorData = useRootSelector<NewDeviceErrorDataState>((state) => state.newDevice.errorData);
    const torqueNm = useRootSelector<number | undefined>((state) => state.newDevice.torqueNm);
    const torqueRPM = useRootSelector<number | undefined>((state) => state.newDevice.torqueRPM);
    const torqueText = useRootSelector<string | undefined>((state) => formatTorqueText(state.newDevice.torqueNm, state.newDevice.torqueRPM))
    const coachbuilderText = useRootSelector<string | undefined>((state) => getCoachbuilderText(state, state.newDevice.coachbuilderId));
    const colorText = useRootSelector<string | undefined>((state) => state.newDevice.colorText);
    const engineVolumeCcm = useRootSelector<number | undefined>((state) => state.newDevice.engineVolumeCcm);
    const transmissionType = useRootSelector<TransmissionType | undefined>((state) => state.newDevice.transmissionType);
    const transmissionNumber = useRootSelector<TransmissionType | undefined>((state) => state.newDevice.transmissionNumber);
    const transmissionText = useMemo(() => formatTransmissionText(transmissionType, transmissionNumber), [transmissionType, transmissionNumber])
    const mainTankVolumeTitle = useRootSelector<string | undefined>((state) => getMainTankVolumeTitle(state));
    const secondaryTankVolumeTitle = useRootSelector<string | undefined>((state) => getSecondaryTankVolumeTitle(state));
    const mainFuelLabel = useRootSelector<string | undefined>((state) => getMainFuelLabel(state));
    const secondaryFuelLabel = useRootSelector<string | undefined>((state) => getSecondaryFuelLabel(state));
    const mainUnit = useRootSelector<Unit | undefined>((state) => getMainUnit(state));
    const secondaryUnit = useRootSelector<Unit | undefined>((state) => getSecondaryUnit(state));

    const validate = () => {
        let isValid = true;
        if (fuelText === undefined) {
            dispatch(actions.newDevice.setFuelError(strings.requiredValue));
            isValid = false;
        }
        if (mainTankVolumeTitle !== undefined && mainTankVomule === undefined) {
            dispatch(actions.newDevice.setMainTankVolumeError(strings.requiredValue));
            isValid = false;
        }
        if (secondaryTankVolumeTitle !== undefined && secondaryTankVomule === undefined) {
            dispatch(actions.newDevice.setSecondaryTankVolumeError(strings.requiredValue));
            isValid = false;
        }
        if (isValid) {
            navigate(`./${pageMap["operation"].address}`);
        }
    }

    return (
        <Box>
            <PageTitle text="Jaké jsou technické parametry?" />
            <TextInputLine
                title="Označení motoru"
                value={motorization}
                onConfirm={({ value, closeDialog }) => {
                    dispatch(actions.newDevice.setMotorization(value));
                    closeDialog();
                }}
            />
            <TextLine
                title={strings.power}
                rightText={powerText ?? strings.give}
                onClick={() => setIsPowerDialogVisible(true)}
            />
            <Unplugger isPlugged={isPowerDialogVisible}>
                <DoubleNumberDialog
                    onConfirm={(powerKw, powerRPM) => {
                        dispatch(actions.newDevice.setPowerKw(powerKw));
                        dispatch(actions.newDevice.setPowerRPM(powerRPM));
                        setIsPowerDialogVisible(false);
                    }}
                    valueList={[powerKw, powerRPM]}
                    labels={["Výkon v kW", "Otáčky za minutu"]}
                    onCancel={() => { setIsPowerDialogVisible(false) }}
                />
            </Unplugger>
            <TextLine
                title={strings.torque}
                rightText={torqueText ?? strings.give}
                onClick={() => setIsTorqueDialogVisible(true)}
            />
            <Unplugger isPlugged={isTorqueDialogVisible}>
                <DoubleNumberDialog
                    onConfirm={(torqueNm, torqueRPM) => {
                        dispatch(actions.newDevice.setTorqueNm(torqueNm));
                        dispatch(actions.newDevice.setTorqueRPM(torqueRPM));
                        setIsTorqueDialogVisible(false);
                    }}
                    labels={[`${strings.torque} v Nm`, "Otáčky za minutu"]}
                    valueList={[torqueNm, torqueRPM]}
                    onCancel={() => { setIsTorqueDialogVisible(false) }}
                />
            </Unplugger>
            <NumberInputLine
                title="Objem motoru"
                label="Objem motoru v cm³"
                type="float"
                formatter={formatCcm}
                value={engineVolumeCcm}
                onConfirm={({ value, closeDialog }) => {
                    dispatch(actions.newDevice.setEngineVolumeCcm(value));
                    closeDialog();
                }}
            />
            <TextLine
                title={strings.transmission}
                rightText={transmissionText ?? strings.give}
                onClick={() => setIsTransmissionDialogVisible(true)}
            />
            <Unplugger isPlugged={isTransmissionDialogVisible}>
                <DoubleSelectDialog
                    valueList={[transmissionType, transmissionNumber]}
                    labels={["Typ převodovky", "Počet stupňů"]}
                    firstSelectItemList={transmissionTypeSelectItemList}
                    secondSelectItemList={transmissionNumberSelectItemList}
                    onConfirm={(type, number) => {
                        dispatch(actions.newDevice.setTransmissionType(type))
                        dispatch(actions.newDevice.setTransmissionNumber(number))
                        setIsTransmissionDialogVisible(false);
                    }}
                    onCancel={() => setIsTransmissionDialogVisible(false)}
                />
            </Unplugger>
            <RouterLink to="/vyber-palivo">
                <TextLine errorMessage={errorData.fuel} title="Palivo" rightText={fuelText ?? strings.select} />
            </RouterLink>
            {mainTankVolumeTitle ? (
                <NumberInputLine
                    title={mainTankVolumeTitle}
                    type="float"
                    label={mainFuelLabel ?? ""}
                    formatter={(value) => formatUnitFloat(value, mainUnit?.abbreviation)}
                    value={mainTankVomule}
                    errorMessage={errorData.mainTankVolume}
                    onConfirm={({ value, closeDialog }) => {
                        dispatch(actions.newDevice.setMainTankVolume(value));
                        closeDialog();
                    }}
                />
            ) : null}
            {secondaryTankVolumeTitle ? (
                <NumberInputLine
                    title={secondaryTankVolumeTitle}
                    type="float"
                    label={secondaryFuelLabel ?? ""}
                    formatter={(value) => formatUnitFloat(value, secondaryUnit?.abbreviation)}
                    value={secondaryTankVomule}
                    errorMessage={errorData.secondaryTankVolume}
                    onConfirm={({ value, closeDialog }) => {
                        dispatch(actions.newDevice.setSecondaryTankVolume(value));
                        closeDialog();
                    }}
                />
            ) : null}
            <RouterLink to="/vyber-karoserii">
                <TextLine errorMessage={errorData.coachbuilder} title="Karoserie" rightText={coachbuilderText ?? strings.select} />
            </RouterLink>
            <TextInputLine
                title="Barva"
                value={colorText}
                onConfirm={({ value, closeDialog }) => {
                    dispatch(actions.newDevice.setColorText(value));
                    closeDialog();
                }}
            />
            <NavigationButtons
                previousText={strings.previous}
                nextText={strings.next}
                onPreviousClick={() => navigate(`./${pageMap["basic"].address}`)}
                onNextClick={() => validate()}
            />
        </Box >
    );
};
