import { makeStyles } from "@material-ui/core/styles";

import { ADD_DEVICE_LINK } from "../../constants";
import { strings } from "../../strings";

export const useStyles = makeStyles(({ palette }) => ({
    root: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
    page: {
        flex: 1,
        overflowY: "auto",
    },
    label: {},
    select: {
        flex: 1,
        color: palette.primary.main,
        fontWeight: "bold",
    },
}));

export type AddDevicePage = "vin" | "basic" | "parameters" | "operation" | "initial" | "note";

export type Page = {
    id: AddDevicePage,
    address: string,
    title: string,
}

export const pageMap: { [id in AddDevicePage]: Page } = {
    "vin": { id: "vin", address: "vin", title: strings.vin },
    "basic": { id: "basic", address: "zaklad", title: "Základ" },
    "parameters": { id: "parameters", address: "technicke-parametry", title: "Technické parametry" },
    "operation": { id: "operation", address: "provoz", title: "Provoz" },
    "initial": { id: "initial", address: "pocatecni-stav", title: "Počáteční stav" },
    "note": { id: "note", address: "poznamka", title: "Poznámka" },
};

export const pageList = Object.values(pageMap);

export const createToLink = (addDevicePage: AddDevicePage) => `/${ADD_DEVICE_LINK}/${pageMap[addDevicePage].address}`;
