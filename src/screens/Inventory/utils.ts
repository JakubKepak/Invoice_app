import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(({ spacing, palette }) => ({
    root: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
    avatar: {
        margin: spacing(1),
        backgroundColor: palette.secondary.main,
    },
    header: {
        margin: spacing(3, 3, 1, 3),
    },
    list: {
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
        flex: 1,
        padding: spacing(0, 3, 11, 3),
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: spacing(1),
    },
    submit: {
        margin: spacing(3, 0, 2),
    },
    subtitle: {
        // margin: spacing(1, 0, 0, 0),
    },
    fabContainer: {
        position: "fixed",
        bottom: spacing(9),
        right: spacing(2),
    },
    fab: {
        display: "flex",
        alignItems: "center",
    },
}));
