import { makeStyles, Theme } from "@material-ui/core/styles";
import { SearchProps } from "./SearchProps";

export const useStyles = makeStyles<Theme, SearchProps<any>>(({ spacing, palette }) => ({
    root: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
    title: {
        color: "#FFFFFF",
        paddingLeft: spacing(1),
    },
    button: {
        color: "#FFFFFF",
    },
    subtoolbar: {
        backgroundColor: "#FFFFFF",
        padding: spacing(2),
    },
    toolbar: {
        backgroundColor: palette.primary.main,
        padding: 0,
        paddingLeft: spacing(1),
        paddingRight: spacing(1),
        height: spacing(8),
    },
    list: {
        overflowY: "auto",
        paddingTop: spacing(0.5),
    },
    empty: {
        fontStyle: "italic",
        color: palette.text.disabled,
        paddingTop: spacing(3),
    },
    item: {
        cursor: "pointer",
    },
}));
