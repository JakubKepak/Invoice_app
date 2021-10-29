import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(({ palette, spacing }) => ({
    root: {

    },
    input: {
        margin: spacing(0, 2, 2, 2),
        width: "90%",
    },
    title: {
        color: palette.grey[800],
        margin: spacing(2, 2, 1, 2),
    },
}));
