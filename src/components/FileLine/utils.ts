import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(({ palette, spacing }) => ({
    attachmentList: {
        marginBottom: spacing(0.5),
    },
    attachment: {
        color: palette.grey[600],
        margin: spacing(1, 2),
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        maxWidth: "75%",
    },
    iconButton: {
        color: palette.primary.main,
    },
    title: {
        color: palette.grey[800],
        paddingLeft: spacing(2),
        paddingRight: spacing(2),
    },
    textButton: {
        color: palette.primary.main,
        fontWeight: "bold",
        whiteSpace: "nowrap",
        margin: spacing(1, 2),
    },
}));
