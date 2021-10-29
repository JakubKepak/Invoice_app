import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(({ spacing, palette }) => ({
    root: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
    title: {
        paddingLeft: spacing(1),
        flexGrow: 1,
    },
    button: {
        color: "#FFFFFF",
    },
    subtoolbar: {
        backgroundColor: "#FFFFFF",
        padding: spacing(2),
    },
    tabContent: {
        overflowY: "auto",
    },
    toolbar: {
        backgroundColor: palette.primary.main,
        padding: 0,
        paddingLeft: spacing(1),
        paddingRight: spacing(1),
        height: spacing(8),
    },
}));
