import { FunctionComponent } from "react";
import { Dialog as DialogComponent } from "@material-ui/core";

import { useStyles } from "./utils";

export type DialogProps = {
    onClose: () => void,
    isOpened: boolean,
}

export const Dialog: FunctionComponent<DialogProps> = ({ onClose, isOpened, children }) => {
    const classes = useStyles();

    return (
        <DialogComponent
            className={classes.root}
            open={isOpened}
            fullWidth={true}
            {...{ onClose, children }}
        />
    );
}
