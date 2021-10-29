import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(({ spacing, palette }) => ({
    root: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
    },
    label: {
        color: palette.text.disabled,
        fontWeight: 400,
    },
    value: {
        fontWeight: 800,
    },
    unit: {
        marginLeft: spacing(1),
        marginBottom: spacing(0.3),
        fontWeight: 400,
    },
    amount: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
    },
}));
