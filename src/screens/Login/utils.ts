import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(({ spacing, palette }) => ({
    root: {
        padding: spacing(4, 3, 3, 3),
    },
    content: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: spacing(4),
    },
    submit: {
        margin: spacing(4, 0, 2),
        backgroundColor: palette.primary.main,
    },
}));
