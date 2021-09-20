import { makeStyles, Theme } from "@material-ui/core/styles";

import { TextLineProps } from "./TextLineProps";

export const useStyles = makeStyles<Theme, TextLineProps>(({ spacing, palette }) => ({
    rightText: ({ visualVariant }) => ({
        color: visualVariant === "clickable" ? palette.primary.main : visualVariant === "normal" ? palette.text.primary : palette.text.disabled,
        fontWeight: "bold",
        whiteSpace: "nowrap",
        textAlign: "right",
    }),
    title: ({ visualVariant }) => ({
        color: visualVariant === "disabled" ? palette.text.disabled : palette.text.primary,
        lineHeight: 1,
    }),
    description: {
        color: palette.grey[400],
        margin: 0,
        marginTop: -spacing(0.5),
    },
    error: {
        fontSize: "0.75rem",
        color: palette.error.main,
        whiteSpace: "nowrap",
        right: spacing(2),
        marginTop: -spacing(1.5),
    },
}));
