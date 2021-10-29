import {
    formatDeviceName,
    formatFuelListName,
    formatFuelText,
    formatOdometerValue,
    formatRecordSubtitle,
    formatTankVolumeTitle,
    formatUnitFloat,
    maxOrUndefined,
    sortBySortValueAscending,
} from "../utils";
import { AddRefuelingPageId, Fuel, Record, RecordData, Unit } from "../types";
import { RootState } from "./store";
import { getFirstDevice, getDeviceFuelCount } from "./deviceList/selectors";
import { getDeviceOdometerStateList, getOdometerLastDeviceOdometerValue } from "./odometer/selectors";
import { getDevice } from "./deviceList/selectors";
import { getManufacturer } from "./manufacturer/selectors";
import { getModel } from "./model/selectors";
import { getFuel, getFuelList } from "./fuel/selectors";
import { getNewDevice } from "./newDevice/selectors";
import { getCategory } from "./category/selectors";
import { getLastSelectedDeviceId } from "./settings/selectors";
import { getFuelLabel, getUnit, getUnitMap } from "./unit/selectors";
import { getIsMainFuelSelected, getIsSecondaryFuelSelected, getDeviceRefuelingList, getRefuelingLastDeviceOdometerValue } from "./refueling/selectors";

export * from "./category/selectors";
export * from "./coachbuilder/selectors";
export * from "./deviceList/selectors";
export * from "./fuel/selectors";
export * from "./manufacturer/selectors";
export * from "./model/selectors";
export * from "./newDevice/selectors";
export * from "./odometer/selectors";
export * from "./refueling/selectors";
export * from "./settings/selectors";
export * from "./unit/selectors";
export * from "./user/selectors";

export const getLastSelectedOrFirstDeviceId = (state: RootState): string | undefined => getLastSelectedDeviceId(state) ?? getFirstDevice(state);

export const getSelectedDeviceOdometerStateList = (state: RootState) => getDeviceOdometerStateList(state, getLastSelectedOrFirstDeviceId(state));

export const getSelectedDeviceRefuelingList = (state: RootState) => getDeviceRefuelingList(state, getLastSelectedOrFirstDeviceId(state));

const getSelectedDeviceOdometerRecordDataList = (state: RootState): RecordData[] => getSelectedDeviceOdometerStateList(state).map((odometerState) => ({
    id: odometerState.id,
    type: "odometer",
    date: odometerState.date,
    odometerValue: odometerState.value,
    fuelAmountL: undefined,
    fuelAbbreviation: undefined,
    fuelPrice: undefined,
    variant: "note",
    sortValue: odometerState.value,
}));

const getSelectedDeviceRefuelingRecordDataList = (state: RootState): RecordData[] => {
    const fuelUnitAbbreviationMap = getFuelUnitAbbreviationMap(state);

    return getSelectedDeviceRefuelingList(state).map((refueling) => ({
        id: refueling.id,
        type: "refueling",
        date: refueling.date,
        odometerValue: refueling.odometerValue,
        fuelAmountL: refueling.fuelAmountL,
        fuelAbbreviation: fuelUnitAbbreviationMap[refueling.fuelId],
        fuelPrice: refueling.fuelPrice,
        variant: "warning",
        sortValue: refueling.odometerValue,
    }));
};

export const getSelectedDeviceRecordList = (state: RootState): Record[] => sortBySortValueAscending([
    ...getSelectedDeviceOdometerRecordDataList(state),
    ...getSelectedDeviceRefuelingRecordDataList(state),
]).map((record, index, list) => {
    return [list[index - 1], record]
}).map(([previousRecord, record]) => {
    switch (record.type) {
        case "odometer": return {
            id: record.id,
            type: record.type,
            title: "Stav tachometru",
            subtitle: formatRecordSubtitle(record.date, record.odometerValue),
            rightText: formatOdometerValue(previousRecord?.odometerValue, record.odometerValue),
            rightDescription: undefined,
            rightDescriptionVariant: record.variant,
        }
        case "refueling": return {
            id: record.id,
            type: record.type,
            subtitle: formatRecordSubtitle(record.date, record.odometerValue),
            title: "Tankování",
            rightText: formatUnitFloat(record.fuelAmountL, record.fuelAbbreviation),
            rightDescription: formatUnitFloat(record.fuelPrice, "Kč"),
            rightDescriptionVariant: record.variant,
        }
        default: throw TypeError("Neznámý typ záznamu");
    }
}).reverse();

export const getDeviceName = (state: RootState, deviceId: string | undefined): string => {
    const device = getDevice(state, deviceId);
    const manufacturer = getManufacturer(state, device?.manufacturerId);
    const model = getModel(state, device?.modelId);
    return formatDeviceName(device?.name, manufacturer?.name, model?.name);
}

export const getNewDeviceFuelText = (state: RootState) => formatFuelText(
    getFuel(state, getNewDevice(state).mainFuelId),
    getFuel(state, getNewDevice(state).secondaryFuelId),
);

export const getNewDeviceCategory = (state: RootState) => getCategory(state, getNewDevice(state).categoryId);

export const getNewDeviceMainFuel = (state: RootState) => getFuel(state, state.newDevice.mainFuelId);

export const getNewDeviceSecondaryFuel = (state: RootState) => getFuel(state, state.newDevice.secondaryFuelId);

export const getMainFuelLabel = (state: RootState): string | undefined => getFuelLabel(state, getNewDeviceMainFuel(state));

export const getSecondaryFuelLabel = (state: RootState): string | undefined => getFuelLabel(state, getNewDeviceSecondaryFuel(state));

export const getMainTankVolumeTitle = (state: RootState): string | undefined => formatTankVolumeTitle(getNewDeviceMainFuel(state));

export const getSecondaryTankVolumeTitle = (state: RootState): string | undefined => formatTankVolumeTitle(getNewDeviceSecondaryFuel(state));

export const getMainUnit = (state: RootState): Unit | undefined => getUnit(state, getNewDeviceMainFuel(state)?.unitId);

export const getSecondaryUnit = (state: RootState): Unit | undefined => getUnit(state, getNewDeviceSecondaryFuel(state)?.unitId);

export const getFuelOptions = (state: RootState): { name: string, list: Fuel[] }[] => {
    const fuelMap: { [fuelId: string]: Fuel } = state.fuel.list.reduce((acc, fuel) => ({ ...acc, [fuel.id]: fuel }), {});
    const fuelListList = [
        ["1"],
        ["1", "5"],
        ["1", "7"],
        ["1", "2"],
        ["5"],
        ["4"],
        ["4", "1"],
        ["4", "3"],
        ["3"],
        ["3", "5"],
        ["6"],
    ].map((fuelIdList) => fuelIdList.map((fuelId) => fuelMap[fuelId]));

    return fuelListList.map((fuelList) => ({ name: formatFuelListName(fuelList), list: fuelList }));
}

export const getRefuelingFuelCount = (state: RootState) => [
    getIsMainFuelSelected(state),
    getIsSecondaryFuelSelected(state),
].filter((isFuelSelected) => isFuelSelected).length;

export const getRefuelingPageIdList = (state: RootState): AddRefuelingPageId[] => {
    const deviceFuelCount = getDeviceFuelCount(state, getLastSelectedOrFirstDeviceId(state));
    const isMainFuelSelected = getIsMainFuelSelected(state);

    if (deviceFuelCount === 1) {
        return ["odometer", "main-fuel"];
    }

    const selectedFuelCount = getRefuelingFuelCount(state);

    if (selectedFuelCount === 1) {
        if (isMainFuelSelected) {
            return ["odometer", "fuels", "main-fuel"];
        } else {
            return ["odometer", "fuels", "secondary-fuel"];
        }
    }

    return ["odometer", "fuels", "main-fuel", "secondary-fuel"];
}

export const getLastSelectedOrFirstDevice = (state: RootState) => getDevice(state, getLastSelectedOrFirstDeviceId(state));

export const getRefuelingMainFuel = (state: RootState) => getFuel(state, getLastSelectedOrFirstDevice(state)?.mainFuelId);

export const getRefuelingSecondaryFuel = (state: RootState) => getFuel(state, getLastSelectedOrFirstDevice(state)?.secondaryFuelId);

export const getFuelUnitAbbreviationMap = (state: RootState): { [key: string]: string } => {
    const unitMap = getUnitMap(state);
    return getFuelList(state).reduce((acc, fuel) => ({ ...acc, [fuel.id]: unitMap[fuel.unitId].abbreviation }), {});
}

export const getLastSelectedDeviceLastOdometerValue = (state: RootState): number | undefined => {
    const lastSelectedOrFirstDeviceId = getLastSelectedOrFirstDeviceId(state);

    if (lastSelectedOrFirstDeviceId === undefined) {
        return undefined;
    }

    return maxOrUndefined(
        getRefuelingLastDeviceOdometerValue(state, lastSelectedOrFirstDeviceId),
        getOdometerLastDeviceOdometerValue(state, lastSelectedOrFirstDeviceId),
    );
};
