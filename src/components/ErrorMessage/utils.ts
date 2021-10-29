import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(({ palette }) => ({
    error: {
        fontSize: "0.75rem",
        color: palette.error.main,
        whiteSpace: "nowrap",
    },
}));
