import { makeStyles } from "@material-ui/core/styles";
import {ADD_EXPENSE_LINK} from "../../constants";
import {AddExpensePageId} from "../../types";
import {addExpensePageMap} from "../../navigation";

export const useStyles = makeStyles(({ spacing, palette }) => ({
    root: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
    page: {
        flex: 1,
        overflowY: "auto",
    },
    button: {
      flexDirection: "row",
    },
    title: {
        margin: spacing(0,2,1,2),
    },
}));

export const createToLink = (addExpensePageId: AddExpensePageId) => `/${ADD_EXPENSE_LINK}/${addExpensePageMap[addExpensePageId].address}`;
