import { Expense } from "../../types";
import { sortByDateAscending } from "../../utils";
import { RootState } from "../store";

const getState = (state: RootState) => state.expense;

export const getExpenseDate = (state: RootState) => getState(state).date;

export const getExpenseOdometerState = (state: RootState) => getState(state).odometerState;

export const getExpenseOdometerValue = (state: RootState) => getState(state).odometerState;

export const getExpenseNote = (state: RootState) => getState(state).note;

export const getExpensePrice = (state: RootState) => getState(state).expensePrice;

export const getExpenseTypeId = (state: RootState) => getState(state).expenseTypeId;

export const getExpenseCategoryId = (state: RootState) => getState(state).expenseCategoryId;

export const getExpenseErrorMessageData = (state: RootState) => getState(state).errorMessageData;

export const getOdometerStateErrorMessage = (state: RootState) => getExpenseErrorMessageData(state).odometerState;

export const getExpensePriceErrorMessage = (state: RootState) => getExpenseErrorMessageData(state).expensePrice;

export const getExpenseAttachmentUrlList = (state: RootState) => getState(state).attachmentUrlList;

export const getList = (state: RootState) => getState(state).list;

export const getDeviceExpenseList = (state: RootState, deviceId: string | undefined) => getList(state).filter((expense) => expense.deviceId === deviceId);

export const getDeviceExpenseAscendingList = (state: RootState, deviceId: string | undefined): Expense[] =>
    sortByDateAscending(getDeviceExpenseList(state, deviceId));

export const getLastDeviceExpense = (state: RootState, deviceId: string | undefined): Expense | undefined =>
    getDeviceExpenseAscendingList(state, deviceId).reverse()[0];

export const getExpenseLastDeviceOdometerValue = (state: RootState, deviceId: string | undefined) => getLastDeviceExpense(state, deviceId)?.odometerValue;
