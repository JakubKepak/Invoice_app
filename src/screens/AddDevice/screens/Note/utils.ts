import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(({ palette, spacing }) => ({
    noteTitle: {
        color: palette.grey[800],
        margin: spacing(1, 2, 0, 2),
    },
    note: {
        margin: spacing(0, 2, 2, 2),
        width: "90%",
    },
}));
