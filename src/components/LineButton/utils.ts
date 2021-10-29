import { makeStyles, Theme } from "@material-ui/core/styles";

import { LineButtonProps } from "./LineButtonProps";

export const useStyles = makeStyles<Theme, LineButtonProps>(({ palette }) => ({
    rightText: ({ visualVariant }) => ({
        color: visualVariant === "clickable" ? palette.primary.main : visualVariant === "normal" ? palette.text.primary : palette.text.disabled,
        fontWeight: "bold",
        whiteSpace: "nowrap",
        textAlign: "right",
    }),
}));
