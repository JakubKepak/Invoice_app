import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(({spacing}) => ({
    root: {
        margin: spacing(2, 1),
    },
    paper: {
        margin: spacing(2),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
}));
