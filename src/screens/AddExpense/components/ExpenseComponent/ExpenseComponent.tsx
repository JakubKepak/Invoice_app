import {FunctionComponent} from "react";
import { Box, List } from "@material-ui/core";
import { useStyles } from "./utils";
import {PageSubtitle} from "../../../../components/PageSubtitle";
import {ExpenseItem} from "../ExpenseItem";
import {addExpensePageMap} from "../../../../navigation";
import {useRootSelector} from "../../../../utils";
import {ExpenseCategoryList} from "../../../../types";
import {
    getExpenseList,
} from "../../../../store/expenseList/selectors";
import {Delimiter} from "../../../../components";

export const ExpenseComponent: FunctionComponent = () => {
    const classes = useStyles();
    const expensesItemList = useRootSelector<ExpenseCategoryList[]>((state) => getExpenseList(state));
    const destination = `./${addExpensePageMap["specification"].address}`;

    return (
        <Box className={classes.root}>
            <List className={classes.list}>
                {expensesItemList.map((itemExpenses) => (
                    <>
                        <Delimiter />
                        <PageSubtitle text={itemExpenses.category}/>

                        <List key={itemExpenses.category} className={classes.list}>
                            {itemExpenses.type.map((item) => (
                                <ExpenseItem key={item.name} categoryId={itemExpenses.id} destination={destination} {...item} />
                            ))}
                        </List>

                    </>
                ))}

            </List>
            <Delimiter />
        </Box>
    );
};