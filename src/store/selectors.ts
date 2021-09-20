import { Device, Fuel, TransmissionType, Unit } from "../types";
import { addDays, addMonths, formatDate, formatFloat, formatKm, looseCapitalize } from "../utils";
import { strings } from "../strings";
import { transmissionNumberSelectItemList, transmissionTypeSelectItemList } from "./data";
import { RootState } from "./";

export const getNewDevice = (state: RootState) => state.newDevice;

export const getDevice = (state: RootState, id: string) => state.deviceList.list.find((device) => device.id === id);

const composeDeviceName = (deviceName?: string, manufacturerName?: string, modelName?: string) => deviceName ?? `${manufacturerName} ${modelName}`;

export const getDeviceName = (state: RootState, deviceId: string): string => {
    const device = getDevice(state, deviceId);
    const manufacturer = getManufacturer(state, device?.manufacturerId);
    const model = getModel(state, device?.modelId);
    return composeDeviceName(device?.name, manufacturer?.name, model?.name);
}

export const getManufacturer = (state: RootState, id?: string) => state.manufacturer.list.find((manufacturer) => manufacturer.id === id)

export const getModel = (state: RootState, id?: string) => state.model.list.find((model) => model.id === id);

export const getDeviceIdList = (state: RootState) => state.deviceList.list.map((device) => device.id);

export const getFuel = (state: RootState, fuelId: string | undefined) => state.fuel.list.find((fuel) => fuel.id === fuelId);

export const getFuelText = (state: RootState, mainFuelId: string | undefined, secondaryFuelId: string | undefined): string | undefined => {
    const mainFuel = getFuel(state, mainFuelId);
    const secondaryFuel = getFuel(state, secondaryFuelId);

    if (mainFuel !== undefined && secondaryFuel !== undefined) {
        return `${looseCapitalize(mainFuel.name)} + ${secondaryFuel.name}`;
    }
    if (mainFuel !== undefined) {
        return looseCapitalize(mainFuel.name);
    }
    if (secondaryFuel !== undefined) {
        return looseCapitalize(secondaryFuel.name);
    }

    return undefined;
}

export const getNewDeviceFuelText = (state: RootState): string | undefined => {
    return getFuelText(state, state.newDevice.mainFuelId, state.newDevice.secondaryFuelId)
}

export const getTransmissionText = (type: TransmissionType | undefined, number: number | undefined): string | undefined => {
    const transmissionTypeSelectItem = transmissionTypeSelectItemList.find((selectItem) => selectItem.payload === type);
    const transmissionNumberSelectItem = transmissionNumberSelectItemList.find((selectItem) => selectItem.payload === number);

    if (transmissionTypeSelectItem !== undefined && transmissionNumberSelectItem !== undefined) {
        return `${transmissionTypeSelectItem?.title} ${transmissionNumberSelectItem?.title}`.toLocaleLowerCase();
    }
    if (transmissionTypeSelectItem !== undefined) {
        return transmissionTypeSelectItem.title.toLocaleLowerCase();
    }
    if (transmissionNumberSelectItem !== undefined) {
        return transmissionNumberSelectItem.title.toLocaleLowerCase();
    }
    return undefined;
}

export const getCoachbuilderText = (state: RootState, id?: string): string | undefined => {
    const coachbuilder = state.coachbuilder.list.find((coachbuilder) => coachbuilder.id === id);
    if (coachbuilder === undefined) {
        return undefined;
    }
    return coachbuilder.name;
}

export const getPowerText = (powerKw?: number, powerRPM?: number) => {
    if (powerKw !== undefined && powerRPM !== undefined) {
        return `${formatFloat(powerKw)} kW • ${formatFloat(powerRPM)} ot/min`;
    }
    if (powerKw !== undefined) {
        return `${formatFloat(powerKw)} kW`;
    }
    if (powerRPM !== undefined) {
        return `${formatFloat(powerRPM)} ot/min`;
    }
    return undefined;
}

export const getUserCredentials = (state: RootState) => ({
    email: state.user.email,
    password: state.user.password,
});

export const getIsUserLoggedIn = (state: RootState) => state.user.loggedHash !== undefined;

export const getTorqueText = (torqueNm?: number, torqueRPM?: number): string | undefined => {
    if (torqueNm !== undefined && torqueRPM !== undefined) {
        return `${formatFloat(torqueNm)} Nm • ${formatFloat(torqueRPM)} ot/min`;
    }
    if (torqueNm !== undefined) {
        return `${formatFloat(torqueNm)} Nm`;
    }
    if (torqueRPM !== undefined) {
        return `${formatFloat(torqueRPM)} ot/min`;
    }
    return undefined;
}

export const getCategory = (state: RootState, id: String | undefined) => state.category.list.find((category) => category.id === id);

export const getNewDeviceCategory = (state: RootState) => getCategory(state, state.newDevice.categoryId);

export const getMainFuel = (state: RootState) => getFuel(state, state.newDevice.mainFuelId);

export const getSecondaryFuel = (state: RootState) => getFuel(state, state.newDevice.secondaryFuelId);

export const getMainFuelLabel = (state: RootState): string | undefined => getFuelLabel(state, getMainFuel(state));

export const getSecondaryFuelLabel = (state: RootState): string | undefined => getFuelLabel(state, getSecondaryFuel(state));

export const getMainTankVolumeTitle = (state: RootState): string | undefined => getTankVolumeTitle(getMainFuel(state));

export const getSecondaryTankVolumeTitle = (state: RootState): string | undefined => getTankVolumeTitle(getSecondaryFuel(state));

export const getTankVolumeTitle = (fuel: Fuel | undefined): string | undefined => {
    if (fuel === undefined) {
        return undefined;
    }
    return `${strings.tankVolume} – ${fuel.name}`;
}

export function listToIdMap<T extends { id: string }>(list: T[]) {
    return list.reduce((acc, item) => ({ ...acc, [item.id]: item }), {});
}

export const getUnitMap = (state: RootState): { [id: string]: Unit } => listToIdMap(state.unit.list);

export const getMainUnit = (state: RootState): Unit | undefined => getUnit(state, getMainFuel(state)?.unitId);

export const getSecondaryUnit = (state: RootState): Unit | undefined => getUnit(state, getSecondaryFuel(state)?.unitId);

export const getUnit = (state: RootState, unitId: string | undefined): Unit | undefined => {
    if (unitId === undefined) {
        return undefined;
    }
    const unit = getUnitMap(state)[unitId];
    if (unit === undefined) {
        return undefined;
    }
    return unit;
}

export const getFuelLabel = (state: RootState, fuel: Fuel | undefined): string | undefined => {
    if (fuel === undefined) {
        return undefined;
    }
    const unit = getUnit(state, fuel.unitId);
    if (unit === undefined) {
        return undefined;
    }

    return `${strings.tankVolume} v ${unit.abbreviation} (${fuel.name})`;;
}

export const getFuelListName = (fuelList: Fuel[]): string => {
    const name = fuelList.map((fuel) => fuel.name).join(" + ");
    return looseCapitalize(name);
}

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

    return fuelListList.map((fuelList) => ({ name: getFuelListName(fuelList), list: fuelList }));
}

export const getTankVolumeText = (state: RootState, device: Device | undefined): string | undefined => {
    const mainFuel = getFuel(state, device?.mainFuelId);
    const secondaryFuel = getFuel(state, device?.secondaryFuelId);
    const mainTankVolume = device?.mainTankVolume;
    const secondaryTankVolume = device?.secondaryTankVolume;
    const isMainFuelAvailable = mainFuel !== undefined && mainTankVolume !== undefined;
    const isSecondaryFuelAvailable = secondaryFuel !== undefined && secondaryTankVolume !== undefined;

    if (isMainFuelAvailable && isSecondaryFuelAvailable) {
        return `${mainFuel?.name} ${mainTankVolume} litrů • ${secondaryFuel?.name} ${secondaryTankVolume} litrů`;
    }
    if (isMainFuelAvailable) {
        return `${mainFuel?.name} ${mainTankVolume} litrů`;
    }
    if (isSecondaryFuelAvailable) {
        return `${secondaryFuel?.name} ${secondaryTankVolume} litrů`;
    }

    return undefined;
}

export const getGuaranteeEndText = (device: Device | undefined): string | undefined => {
    let guaranteeEndDateText = undefined;

    if (device === undefined) {
        return undefined;
    }
    if (device.guaranteeDate !== undefined && device.guaranteeMonthCount !== undefined) {
        guaranteeEndDateText = formatDate(addDays(addMonths(device.guaranteeDate, device.guaranteeMonthCount), -1));
    }
    if (device.guaranteeKm === undefined) {
        return guaranteeEndDateText;
    } else {
        if (guaranteeEndDateText !== undefined) {
            return `${guaranteeEndDateText} • ${formatKm(device.guaranteeKm)}`;
        }
    }

    return undefined;
}


