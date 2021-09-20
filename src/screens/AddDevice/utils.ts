import { makeStyles } from "@material-ui/core/styles";
import { strings } from "../../strings";

export const useStyles = makeStyles(({ spacing, palette }) => ({
    root: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
    page: {
        flex: 1,
        overflowY: "auto",
    },
    header: {},
    label: {},
    select: {
        flex: 1,
        color: palette.primary.main,
        fontWeight: "bold",
    },
    title: {
        margin: spacing(2),
        textAlign: "center",
    },
}));

export type AddPageValue = "vin" | "basic" | "parameters" | "operation" | "initial" | "note";

export type Page = {
    id: AddPageValue,
    address: string,
    title: string,
}

export const pageMap: { [id in AddPageValue]: Page } = {
    "vin": { id: "vin", address: "vin", title: strings.vin },
    "basic": { id: "basic", address: "zaklad", title: "Základ" },
    "parameters": { id: "parameters", address: "technicke-parametry", title: "Technické parametry" },
    "operation": { id: "operation", address: "provoz", title: "Provoz" },
    "initial": { id: "initial", address: "pocatecni-stav", title: "Počáteční stav" },
    "note": { id: "note", address: "poznamka", title: "Poznámka" },
};

export const pageList = Object.values(pageMap);
