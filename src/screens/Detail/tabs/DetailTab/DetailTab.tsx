import { FunctionComponent, useMemo } from "react";
import { useParams } from "react-router-dom";
import { Box, Fab, List } from "@material-ui/core";
import { Edit } from "@material-ui/icons";

import { TextLine } from "../../../../components";
import { Manufacturer, Device, Category } from "../../../../types";
import { strings } from "../../../../strings";
import { formatCcm, formatDate, formatYearMonthText, useRootSelector } from "../../../../utils";
import {
    getDevice,
    getManufacturer,
    getModel,
    getFuelText,
    getPowerText,
    getCategory,
    getTorqueText,
    getCoachbuilderText,
    getTransmissionText,
    getTankVolumeText,
    getGuaranteeEndText,
} from "../../../../store";
import { DetailParams } from "../../types";
import { useStyles } from "./utils";

export const DetailTab: FunctionComponent = () => {
    const classes = useStyles();
    const { id } = useParams<DetailParams>();

    const device = useRootSelector<Device | undefined>((state) => getDevice(state, id));
    const manufacturer = useRootSelector<Manufacturer | undefined>((state) => getManufacturer(state, device?.manufacturerId));
    const model = useRootSelector<Manufacturer | undefined>((state) => getModel(state, device?.modelId));
    const fuelText = useRootSelector<string | undefined>((state) => getFuelText(state, device?.mainFuelId, device?.secondaryFuelId));
    const category = useRootSelector<Category | undefined>((state) => getCategory(state, device?.categoryId));
    const powerText = useMemo(() => getPowerText(device?.powerKw, device?.powerRPM), [device]);
    const torqueText = useMemo(() => getTorqueText(device?.torqueNm, device?.torqueRPM), [device]);
    const coachbuilderText = useRootSelector<string | undefined>((state) => getCoachbuilderText(state, device?.coachbuilderId));
    const transmissionText = useMemo(() => getTransmissionText(device?.transmissionType, device?.transmissionNumber), [device])
    const tankVolumeText = useRootSelector<string | undefined>((state) => getTankVolumeText(state, device));
    const guaranteeEndText = useMemo(() => getGuaranteeEndText(device), [device]);

    return (
        <List className={classes.root} >
            <TextLine
                title={strings.category}
                rightText={category?.name ?? strings.emptyValueText}
                visualVariant="normal" />
            <TextLine
                title={strings.manufacturer}
                rightText={manufacturer?.name}
                visualVariant="normal" />
            <TextLine
                title={strings.model}
                rightText={model?.name}
                visualVariant="normal" />
            <TextLine
                title="Rok výroby"
                rightText={formatYearMonthText(device?.manufacturedYearMonthText) ?? strings.emptyValueText}
                visualVariant="normal" />
            <TextLine
                title={strings.vin}
                rightText={device?.vin ?? strings.emptyValueText}
                visualVariant="normal" />
            <TextLine
                title="Registrační značka"
                rightText={device?.spz ?? strings.emptyValueText}
                visualVariant="normal" />
            <TextLine
                title="Výrobní číslo"
                rightText={device?.number?.toString() ?? strings.emptyValueText}
                visualVariant="normal" />
            <TextLine
                title="Označení motoru"
                rightText={device?.motorization ?? strings.emptyValueText}
                visualVariant="normal" />
            <TextLine
                title={strings.power}
                rightText={powerText ?? strings.emptyValueText}
                visualVariant="normal" />
            <TextLine
                title={strings.torque}
                rightText={torqueText ?? strings.emptyValueText}
                visualVariant="normal" />
            <TextLine
                title="Objem motoru"
                rightText={formatCcm(device?.engineVolumeCcm) ?? strings.emptyValueText}
                visualVariant="normal" />
            <TextLine
                title={strings.transmission}
                rightText={transmissionText ?? strings.emptyValueText}
                visualVariant="normal" />
            <TextLine
                title="Palivo"
                rightText={fuelText ?? strings.emptyValueText}
                visualVariant="normal" />
            <TextLine
                title="Objem nádrže"
                rightText={tankVolumeText ?? strings.emptyValueText}
                visualVariant="normal" />
            <TextLine
                title="Karoserie"
                rightText={coachbuilderText ?? strings.emptyValueText}
                visualVariant="normal" />
            <TextLine
                title="Barva"
                rightText={device?.colorText ?? strings.emptyValueText}
                visualVariant="normal" />
            <TextLine
                title="První registrace"
                rightText={formatDate(device?.firstRegistrationDate) ?? strings.emptyValueText}
                visualVariant="normal" />
            <TextLine
                title="Majitelem od"
                rightText={formatDate(device?.acquisitionData) ?? strings.emptyValueText}
                visualVariant="normal" />
            {guaranteeEndText ? (
                <TextLine
                    title="Záruka do"
                    rightText={guaranteeEndText}
                    visualVariant="normal" />
            ) : null}
            <Box className={classes.fabContainer}>
                <Fab color="primary" className={classes.fab} aria-label="Přidat">
                    <Edit fontSize="large" />
                </Fab>
            </Box>
        </List>
    );
};