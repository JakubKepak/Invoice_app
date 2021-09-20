import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(({ spacing, palette }) => ({
    root: {
        margin: spacing(1, 1, 1, 1),
    },
    button: {
        margin: spacing(1, 1, 2),
    },
    icon: {
        margin: spacing(1),
    },
    title: {
        margin: spacing(0.5),
        display: "flex",
        alignItems: "center",
    },
    used: {
        margin: spacing(0.5, 1),
        color: palette.grey[400],
    },
    progress: {
        margin: spacing(0, 1),
    },
}));
