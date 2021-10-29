import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(({ spacing, palette }) => ({
    root: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
    page: {
        flex: 1,
        overflowY: "auto",
    },
    noteTitle: {
        color: palette.grey[800],
        margin: spacing(1, 2, 0, 2),
    },
    note: {
        margin: spacing(0, 2, 2, 2),
        width: "90%",
    },
    attachmentGrid: {},
    attachmentList: {
        marginBottom: spacing(2),
    },
    attachmentLine: {
        height: spacing(7),
    },
    textButton: {
        color: palette.primary.main,
        fontWeight: "bold",
        whiteSpace: "nowrap",
        margin: spacing(1, 2),
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
}));
