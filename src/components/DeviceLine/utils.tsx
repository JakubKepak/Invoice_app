import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(({ spacing, palette }) => ({
    content: {},
    card: {
        margin: spacing(2),
    },
    avatar: {
        width: spacing(9),
        height: spacing(9),
    },
    name: {
        paddingLeft: spacing(1),
        fontWeight: "bold",
        color: palette.primary.main,
    },
    subtitle: {},
    spz: {
        marginLeft: spacing(1),
    },
}));
