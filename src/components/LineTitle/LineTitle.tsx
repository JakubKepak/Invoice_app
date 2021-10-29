import { FunctionComponent } from "react";
import { Typography } from "@material-ui/core";

import { LineTitleProps } from "./LineTitleProps";
import { useStyles } from "./utils";

export const LineTitle: FunctionComponent<LineTitleProps> = ({
    title,
    description,
    children,
    visualVariant,
    className,
}) => {
    const classes = useStyles({ title, description, visualVariant, className });

    return (
        <Typography
            component="div"
            variant="subtitle1"
            className={`${classes.title} ${className}`}
        >
            {title}
            {children}
        </Typography>
    );
}
