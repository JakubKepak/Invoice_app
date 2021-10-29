import { makeStyles, Theme } from "@material-ui/core/styles";

import { LineTitleProps } from "./LineTitleProps";

export const useStyles = makeStyles<Theme, LineTitleProps>(({ spacing, palette }) => ({
    title: ({ visualVariant, description }) => ({
        color: visualVariant === "disabled" ? palette.text.disabled : palette.text.primary,
        lineHeight: 1,
        marginTop: description !== undefined ? spacing(0.75) : "unset",
    }),
}));
