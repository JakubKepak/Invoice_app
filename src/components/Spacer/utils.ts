import {makeStyles, Theme} from "@material-ui/core/styles";

import {SpacerProps} from "./Spacer";

export const useStyles = makeStyles<Theme, SpacerProps>(({spacing}) => ({
    root: ({size, direction}) => ({
        height: direction === "column" ? spacing(size) : 0,
        width: direction === "row" ? spacing(size) : 0,
    }),
}));
