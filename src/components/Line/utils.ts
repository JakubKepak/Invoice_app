import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(({ spacing, palette }) => ({
    root: {
        display: "flex",
        flex: 1,
        height: spacing(7),
        flexDirection: "column",
    },
    content: {
        display: "flex",
        flex: 1,
        paddingLeft: spacing(2),
        paddingRight: spacing(2),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
}));
