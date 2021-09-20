import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(({ palette, spacing }) => ({
    title: {
        color: palette.grey[800],
        margin: spacing(1, 2, 0, 2),
    },
    attachment: {
        color: palette.grey[600],
        margin: spacing(1, 2),
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        maxWidth: "75%",
    },
    note: {
        margin: spacing(2),
        width: "90%",
    },
    iconButton: {
        color: palette.primary.main,
    },
    textButton: {
        color: palette.primary.main,
        fontWeight: "bold",
        whiteSpace: "nowrap",
        margin: spacing(1, 2),
    },
    attachmentGrid: {
        marginBottom: spacing(4),
    },
}));
