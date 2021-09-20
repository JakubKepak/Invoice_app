import { makeStyles } from "@material-ui/core/styles";

import { isIOsDevice } from "../../utils";

export const useStyles = makeStyles(({ spacing }) => ({
    root: {
        marginBottom: isIOsDevice() ? spacing(20) : 0,
    },
}));
