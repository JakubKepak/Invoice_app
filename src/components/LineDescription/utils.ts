import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(({ spacing, palette }) => ({
    description: {
        color: palette.grey[400],
        margin: 0,
        marginTop: -spacing(0.5),
    },
}));
