import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(({ spacing }) => ({
    root: {
        paddingLeft: spacing(2),
        paddingRight: spacing(2),
    },
    error: {
        right: spacing(2),
        marginTop: -spacing(1.5),
    },
}));
