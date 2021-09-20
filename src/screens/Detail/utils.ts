import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(({ spacing, palette }) => ({
    root: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
    title: {
        paddingLeft: spacing(1),
        flexGrow: 1,
    },
    subtitle: {
    },
    name: {
        paddingLeft: spacing(1),
        fontWeight: "bold",
        color: palette.primary.main,
    },
    button: {
        color: "#FFFFFF",
    },
    spz: {
        marginLeft: spacing(1),
    },
    card: {
        margin: spacing(2),
    },
    content: {},
    subtoolbar: {
        backgroundColor: "#FFFFFF",
        padding: spacing(2),
    },
    tabContent: {
        overflowY: "auto",
    },
    toolbar: {
        backgroundColor: palette.primary.main,
        padding: 0,
        paddingLeft: spacing(1),
        paddingRight: spacing(1),
        height: spacing(8),
    },
    avatar: {
        width: spacing(9),
        height: spacing(9),
    },
    drawerContent: {
        padding: spacing(2),
    },
}));
