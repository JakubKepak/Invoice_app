import { makeStyles } from "@material-ui/core/styles";

import { ADD_REFUELING_LINK } from "../../constants";
import { addRefuelingPageMap } from "../../navigation";
import { AddRefuelingPageId } from "../../types";

export const useStyles = makeStyles(({ palette }) => ({
    root: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
    page: {
        flex: 1,
        overflowY: "auto",
    },
    label: {},
    select: {
        flex: 1,
        color: palette.primary.main,
        fontWeight: "bold",
    },
}));

export const createToLink = (addRefuelingPageId: AddRefuelingPageId) => `/${ADD_REFUELING_LINK}/${addRefuelingPageMap[addRefuelingPageId].address}`;
