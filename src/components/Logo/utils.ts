import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(({palette}) => ({
    root: {
        fontWeight: "bold",
    },
    colored: {
        color: palette.primary.main,
    },
}));
