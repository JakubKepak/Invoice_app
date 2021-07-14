import {makeStyles, Theme} from "@material-ui/core/styles";

import {ListItemProps} from "./ListItem";

export const useStyles = makeStyles<Theme, ListItemProps>(({spacing, palette}) => ({
    root: {
        margin: spacing(1),
        padding: spacing(1),
    },
    icon: ({variant}) =>  ({
        display: "flex",
        color: variant === "primary" ? palette.primary.main : variant === "success" ? palette.success.main :  palette.text.disabled,
        margin: spacing(0.5),
    }),
    title: ({variant}) => ({
        display: "flex",
        flex: 1,
        marginLeft: spacing(1),
        color: variant === "primary" ? palette.primary.main : variant === "success" ? palette.success.main :  palette.text.disabled,
        fontWeight: "bold",
    }),
    chevron: {
        marginRight: spacing(1),
    },
    content: {
        minHeight: spacing(4),
    },
}));
