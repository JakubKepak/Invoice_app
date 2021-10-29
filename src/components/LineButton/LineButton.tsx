import { Typography } from "@material-ui/core";
import { FunctionComponent } from "react"

import { LineButtonProps } from "./LineButtonProps";
import { useStyles } from "./utils";

export const LineButton: FunctionComponent<LineButtonProps> = ({ text, visualVariant }) => {
    const classes = useStyles({ text, visualVariant });

    return (
        <Typography
            component="div"
            variant="subtitle1"
            className={classes.rightText}
        >
            {text}
        </Typography>
    );
}
