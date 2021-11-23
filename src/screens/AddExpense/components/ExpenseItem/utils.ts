import { makeStyles } from "@material-ui/core/styles";


export const useStyles = makeStyles(({ spacing, palette }) => ({
    root: {
        padding: spacing(1,3),
        borderStyle: "none",
    },
    name: {
        display: "flex",
        flex: 1,
        marginLeft: spacing(1),
        color: "gray",
    },
    chevron: {
        marginRight: spacing(1),
    },
    content: {
        minHeight: spacing(4),
    },
}));
