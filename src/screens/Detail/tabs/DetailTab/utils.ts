import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(({ spacing, palette }) => ({
    root: {
        paddingBottom: spacing(11),
    },
    fabContainer: {
        position: "fixed",
        bottom: spacing(2),
        right: spacing(2),
    },
    fab: {
        backgroundColor: palette.success.main,
        display: "flex",
        alignItems: "center",
    },
}));
