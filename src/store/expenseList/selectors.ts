import { ExpenseCategoryList, ExpenseTypeList } from "../../types";
import { formatExpenseCategoryText, formatExpenseTypeText, listToIdMap } from "../../utils";
import { RootState } from "../store";

const getState = (state: RootState) => state.expenseList;

export const getExpenseList = (state: RootState) => getState(state).list;

export const getExpenseCategoryTypes = (state: RootState): { [key: string]: ExpenseCategoryList } => listToIdMap(getExpenseList(state));

export const getExpenseType = (state: RootState, categoryId: string): { [key: string]: ExpenseTypeList } => {
    const expenseCategoryTypes = getExpenseCategoryTypes(state)[categoryId];
    return listToIdMap(expenseCategoryTypes.type);
};

export const getExpenseFromList = (state: RootState, expenseCategoryId: string | undefined, expenseTypeId: string | undefined) =>
    expenseCategoryId === undefined || expenseTypeId === undefined ? undefined : getExpenseType(state, expenseCategoryId)[expenseTypeId];

export const getExpenseTypeText = (state: RootState, categoryId: string | undefined, typeId: string | undefined): string | undefined => {
    return formatExpenseTypeText(getExpenseFromList(state, categoryId, typeId));
};

export const getExpenseCategoryText = (state: RootState, categoryId: string | undefined): string | undefined => {
    return categoryId === undefined ? "unknown" : formatExpenseCategoryText(getExpenseCategoryTypes(state)[categoryId].category);
};
