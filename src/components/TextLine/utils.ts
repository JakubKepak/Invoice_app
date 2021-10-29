import { makeStyles, Theme } from "@material-ui/core/styles";

import { TextLineProps } from "./TextLineProps";

export const useStyles = makeStyles<Theme, TextLineProps>(({ spacing }) => ({
    error: {
        right: spacing(2),
        marginTop: -spacing(1.5),
    },
    root: ({ visualVariant }) => ({
        cursor: visualVariant === "clickable" ? "pointer" : "inherit",
    }),
}));
