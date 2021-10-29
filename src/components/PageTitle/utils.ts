import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(({ spacing, palette }) => ({
    title: {
        margin: spacing(2),
        textTransform: "uppercase",
    },
}));
