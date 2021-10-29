import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(({ spacing }) => ({
    root: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
    page: {
        flex: 1,
        overflowY: "auto",
    },
}));
