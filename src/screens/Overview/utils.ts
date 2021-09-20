import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(({ spacing }) => ({
    root: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
    list: {
        flex: 1,
        flexDirection: "column",
        overflowY: "auto",
        padding: spacing(2, 3, 2, 3),
    },
}));
