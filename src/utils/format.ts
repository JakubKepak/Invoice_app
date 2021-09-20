import { format } from "date-fns";

import { THIN_SPACE } from "../constants";
import { strings } from "../strings";

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

    const parts = number.toString().split(".");

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

export const formatL = (number: number | undefined) => formatUnitFloat(number, strings.literPlural(number));

export const formatCcm = (number: number | undefined) => formatUnitFloat(number, "cm³");

export const formatFuelConsumption = (number: number | undefined) => formatUnitFloat(number, `${strings.literPlural(number)}/100${THIN_SPACE}km`);
