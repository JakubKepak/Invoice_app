import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(({spacing, palette}) => ({
    paper: {
        marginTop: spacing(2),
        display: "flex",
        flexDirection: "column",
    },
    avatar: {
        margin: spacing(1),
        backgroundColor: palette.secondary.main,
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: spacing(1),
    },
    submit: {
        margin: spacing(3, 0, 2),
    },
    fabContainer: {
        position: "fixed",
        bottom: spacing(9),
        right: spacing(2),
    },
    subtitle: {
        margin: spacing(2, 0, 0, 0),
    },
    fab: {
        backgroundColor: palette.success.main,
        display: "flex",
        alignItems: "center",
    }
}));
