import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(({spacing, palette}) => ({
    paper: {
        marginTop: spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: spacing(6),
    },
    submit: {
        margin: spacing(4, 0, 2),
        backgroundColor: palette.primary.main,
    },
}));