import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(({ spacing, palette }) => ({
    root: {
        margin: spacing(1, 0),
    },
    avatar: {
        width: spacing(9),
        height: spacing(9),
        marginRight: spacing(.5),
    },
    title: {
        color: palette.primary.main,
        fontWeight: "bold",
    },
    subtitle: {
        color: palette.text.disabled,
    },
    spz: {
        fontWeight: "bold",
    },
    textContent: {
        margin: spacing(0, 1),
    },
    icon: {
        margin: spacing(2),
        color: palette.grey[400],
    },
}));
