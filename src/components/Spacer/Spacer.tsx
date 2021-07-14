import {FunctionComponent} from "react"
import {Box} from "@material-ui/core";

import {useStyles} from "./utils";

export type SpacerProps = {
    size: number;
    direction: "row" | "column";
}

export const Spacer: FunctionComponent<SpacerProps> = (props) => {
    const classes = useStyles(props);

    return (
        <Box className={classes.root} />
    );
};
