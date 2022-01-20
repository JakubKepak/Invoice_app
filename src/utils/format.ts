import { format } from "date-fns";
import { round } from ".";

import { THIN_SPACE } from "../constants";
import { transmissionNumberSelectItemList, transmissionTypeSelectItemList } from "../store";
import { strings } from "../strings";
import {Coachbuilder, Device, ExpenseTypeList, Fuel, TransmissionType, Unit} from "../types";
import { looseCapitalize } from "./string";
import { addDays, addMonths } from "./time";

export const formatDate = (date?: Date): string | undefined => date === undefined ? undefined : format(date, "d. M. Y");

export const formatInteger = (number?: number) => {
    if (number === undefined) {
        return undefined;
    }

    if (Number.isNaN(number)) {
        return undefined;
    }

    return Math.trunc(number).toString().replace(/\B(?=(\d{3})+(?!\d))/g, THIN_SPACE);
};

export const formatFloat = (number?: number) => {
    if (number === undefined) {
        return undefined;
    }

    if (Number.isNaN(number)) {
        return undefined;
    }

    const shortenNumber = round(number, 2);

    if (shortenNumber === undefined) {
        return undefined;
    }

    const parts = shortenNumber.toString().split(".");

    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");

    return parts.join(",");
};

export const formatUnitFloat = (number: number | undefined, unitText: string | undefined): string | undefined => {
    if (number === undefined || unitText === undefined) {
        return undefined;
    }
    const formattedValue = formatFloat(number);
    if (formattedValue === undefined) {
        return undefined;
    }

    return `${formatFloat(number)}${THIN_SPACE}${unitText}`;
}

export const formatKm = (number: number | undefined) => formatUnitFloat(number, "km");

export const formatCZK = (number: number | undefined) => formatUnitFloat(number, "Kč");

export const formatL = (number: number | undefined) => formatUnitFloat(number, strings.literPlural(number));

export const formatCcm = (number: number | undefined) => formatUnitFloat(number, "cm³");

export const formatFuelConsumption = (number: number | undefined) => formatUnitFloat(number, `${strings.literPlural(number)}/100${THIN_SPACE}km`);

export const formatDeviceName = (deviceName?: string, manufacturerName?: string, modelName?: string) => deviceName ?? `${manufacturerName} ${modelName}`;

export const formatTransmissionText = (type: TransmissionType | undefined, number: number | undefined): string | undefined => {
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

export const formatPowerText = (powerKw?: number, powerRPM?: number) => {
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

export const formatTorqueText = (torqueNm?: number, torqueRPM?: number): string | undefined => {
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

export const formatTankVolumeTitle = (fuel: Fuel | undefined): string | undefined => {
    if (fuel === undefined) {
        return undefined;
    }
    return `${strings.tankVolume} – ${fuel.name}`;
}

export const formatFuelListName = (fuelList: Fuel[]): string => {
    const name = fuelList.map((fuel) => fuel.name).join(" + ");
    return looseCapitalize(name);
}

export const formatGuaranteeEndText = (device: Device | undefined): string | undefined => {
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

export const formatCoachbuilderText = (coachbuilder: Coachbuilder | undefined): string | undefined => {
    if (coachbuilder === undefined) {
        return undefined;
    }
    return coachbuilder.name;
}

export const formatFuelText = (mainFuel: Fuel | undefined, secondaryFuel: Fuel | undefined): string | undefined => {
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

export const formatTankVolumeText = (mainFuel: Fuel | undefined, secondaryFuel: Fuel | undefined, device: Device | undefined): string | undefined => {
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

export const formatFuelLabel = (unit: Unit, fuel: Fuel) => `${strings.tankVolume} v ${unit.abbreviation} (${fuel.name})`;

export const formatRecordSubtitle = (date: Date, odometerValue: number) => `${formatDate(date)}${THIN_SPACE}•${THIN_SPACE}${formatKm(odometerValue)}`;

export const formatOdometerValue = (previousOdometerValue: number | undefined, odometerValue: number | undefined): string | undefined => {
    if (odometerValue !== undefined && previousOdometerValue !== undefined) {
        const difference = odometerValue - previousOdometerValue;
        const text = formatKm(difference);
        if (difference > 0) {
            return `+${text}`;
        } else {
            return text;
        }
    } else {
        return undefined;
    }
}

export const formatExpenseTypeText = (expenseList: ExpenseTypeList | undefined): string | undefined => {
    if (expenseList === undefined) {
        return undefined;
    }
    return looseCapitalize(expenseList.name);
}

export const formatExpenseCategoryText = (categoryName: string | undefined): string | undefined => {
    if (categoryName === undefined) {
        return undefined;
    }
    return looseCapitalize(categoryName);
}
