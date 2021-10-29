import { THIN_SPACE } from "../constants";
import { IconName, RecordType } from "../types";

export const parseIntOrUndefined = (text?: string): number | undefined => {
    if (text === undefined) {
        return undefined;
    }
    const value = parseInt(text);
    if (isNaN(value)) {
        return undefined;
    } else {
        return value;
    }
}

export const parseFloatOrUndefined = (text?: string): number | undefined => {
    if (text === undefined) {
        return undefined;
    }
    const value = parseFloat(text.replace(",", "."));
    if (isNaN(value)) {
        return undefined;
    } else {
        return value;
    }
}

export const convertBytesToMbsOrKbs = (filesize: number) => {
    var sizeText = "";

    if (filesize >= 1048576) {
        sizeText = filesize / 1048576 + `${THIN_SPACE}MB`;
    } else if (filesize >= 1024) {
        sizeText = filesize / 1024 + `${THIN_SPACE}kB`;
    } else {
        sizeText = filesize + `${THIN_SPACE}B`;
    }

    return sizeText;
}

export function listToIdMap<T extends { id: string }>(list: T[]) {
    return list.reduce((acc, item) => ({ ...acc, [item.id]: item }), {});
}

export const recordTypeToIconId = (recordType: RecordType): IconName => {
    switch (recordType) {
        case "odometer": return "tachometer";
        case "refueling": return "refueling";
        case "expense": return "expenses";
        case "fault": return "fault";
        case "maintenance": return "servis";
        default: return "note";
    }
}
