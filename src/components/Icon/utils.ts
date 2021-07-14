import {makeStyles, Theme} from "@material-ui/core/styles";

import {IconProps} from "./IconProps";

export const useStyles = makeStyles<Theme, IconProps>(({spacing, palette}) => ({
    root: ({size, variant}) => ({
        height: size === "micro" ? spacing(2) : size === "tiny" ? spacing(2.5) : size === "small" ? spacing(3) : size === "medium" ? spacing(4) : spacing(5),
        width: size === "micro" ? spacing(2) : size === "tiny" ? spacing(2.5) : size === "small" ? spacing(3) : size === "medium" ? spacing(4) : spacing(5),
        color: variant === "primary" ? palette.primary.main : variant === "success" ? palette.success.main : variant === "white" ? "#FFFFFF" : palette.text.disabled,
        fontFamily: "icons",
        speak: "never",
        fontSize: size === "micro" ? spacing(2) : size === "tiny" ? spacing(2.5) : size === "small" ? spacing(3) : size === "medium" ? spacing(4) : spacing(5),
        fontStyle: "normal",
        fontWeight: "normal",
        fontVariant: "normal",
        textTransform: "none",
        lineHeight: 1,
        fontSmooth: "grayscale",
    }),
}));
