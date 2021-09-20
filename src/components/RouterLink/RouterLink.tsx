import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import { useStyles } from "./utils";

export type RouterLinkProps = {
    to: string,
    className?: string,
    replace?: boolean,
    onClick?: () => void,
}

export const RouterLink: FunctionComponent<RouterLinkProps> = ({ children, to, className, replace = false, onClick }) => {
    const classes = useStyles();

    return (
        <Link
            className={`${classes.root} ${className}`}
            {...{ to, replace, onClick }}
        >
            {children}
        </Link>
    );
};
