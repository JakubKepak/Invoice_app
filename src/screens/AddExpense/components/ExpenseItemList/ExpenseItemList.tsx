import { FunctionComponent } from "react";
import { Box, List } from "@material-ui/core";

import { useStyles } from "./utils";
import { PageSubtitle, Delimiter } from "../../../../components";
import { ExpenseItem } from "../ExpenseItem";
import { addExpensePageMap } from "../../../../navigation";
import { useRootSelector } from "../../../../utils";
import { ExpenseCategoryList } from "../../../../types";
import { getExpenseList } from "../../../../store";

export const ExpenseItemList: FunctionComponent = () => {
    const classes = useStyles();
    const expenseList = useRootSelector<ExpenseCategoryList[]>((state) => getExpenseList(state));
    const destination = `./${addExpensePageMap["specification"].address}`;

    return (
        <Box>
            <List disablePadding className={classes.list}>
                {expenseList.map((itemExpenses) => (
                    <Box key={itemExpenses.category}>
                        <Delimiter />
                        <PageSubtitle text={itemExpenses.category} />

                        <List disablePadding>
                            {itemExpenses.type.map((item) => (
                                <ExpenseItem key={item.name} categoryId={itemExpenses.id} destination={destination} {...item} />
                            ))}
                        </List>
                    </Box>
                ))}
            </List>
            <Delimiter />
        </Box>
    );
};
