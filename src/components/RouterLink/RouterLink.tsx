import {FunctionComponent} from "react";
import {Link} from "react-router-dom";

import {useStyles} from "./utils";

export type RouterLinkProps = {
    to: string;
    className?: string
}

export const RouterLink: FunctionComponent<RouterLinkProps> = ({children, to, className}) => {
    const classes = useStyles();

    return (
        <Link to={to} className={`${classes.root} ${className}`}>
            {children}
        </Link>  
    );
};
