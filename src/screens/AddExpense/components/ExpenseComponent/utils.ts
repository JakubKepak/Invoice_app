import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(({ palette, spacing }) => ({
    root: {

    },
    list: {
        backgroundColor: "white",
        flex: 1,
        flexDirection: "column",
        overflowY: "auto",
        padding: spacing(0),
    },
}));