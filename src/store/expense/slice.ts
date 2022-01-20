import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Expense } from "../../types";
import { addDays, doNothing, getToday } from "../../utils";

type ErrorMessageData = {
    odometerState?: string,
    expensePrice?: string,
};

type State = {
    date?: Date,
    odometerState?: number,
    attachmentUrlList: string[],
    note?: string,
    list: Expense[],
    errorMessageData: ErrorMessageData,
    expenseTypeId: string,
    expenseCategoryId: string,
    expensePrice?: number,
};

const initialState: State = {
    expenseTypeId: "1",
    expenseCategoryId: "1",
    date: getToday(),
    odometerState: undefined,
    attachmentUrlList: [],
    note: undefined,
    expensePrice: undefined,
    list: [
        {
            id: "101010",
            deviceId: "1",
            expenseTypeId: "1",
            expenseCategoryId: "1",
            expensePrice: 4500,
            date: addDays(getToday(), -7),
            odometerValue: 28234,
            attachmentUrlList: [],
            note: undefined,
        },
        {
            id: "12454",
            deviceId: "1",
            expenseTypeId: "8",
            expenseCategoryId: "2",
            expensePrice: 125,
            date: addDays(getToday(), -5),
            odometerValue: 33100,
            attachmentUrlList: [],
            note: undefined,
        },
        {
            id: "141452",
            deviceId: "1",
            expenseTypeId: "2",
            expenseCategoryId: "4",
            expensePrice: 500,
            date: addDays(getToday(), -2),
            odometerValue: 47680,
            attachmentUrlList: [],
            note: undefined,
        },
    ],
    errorMessageData: {},
};

export const expenseSlice = createSlice({
    name: "expense",
    initialState,
    reducers: {
        setDate: (state, action: PayloadAction<Date | undefined>) => {
            state.date = action.payload;
        },
        setExpenseType: (state, action: PayloadAction<string>) => {
            state.expenseTypeId = action.payload;
        },
        setExpenseCategory: (state, action: PayloadAction<string>) => {
            state.expenseCategoryId = action.payload;
        },
        setOdometerState: (state, action: PayloadAction<number | undefined>) => {
            state.errorMessageData.odometerState = undefined;
            state.odometerState = action.payload;
        },
        setPrice: (state, action: PayloadAction<number | undefined>) => {
            state.expensePrice = action.payload;
        },
        setAttachmentUrlList: (state, action: PayloadAction<string[]>) => {
            state.attachmentUrlList = action.payload;
        },
        addAttachmentUrl: (state, action: PayloadAction<string>) => {
            state.attachmentUrlList = [...(state.attachmentUrlList ?? []), action.payload];
        },
        removeAttachmentUrl: (state, action: PayloadAction<string>) => {
            state.attachmentUrlList = state.attachmentUrlList?.filter((attachmentUrl) => attachmentUrl !== action.payload);
        },
        setNote: (state, action: PayloadAction<string | undefined>) => {
            state.note = action.payload;
        },
        save: doNothing,
        addExpense: (state, action: PayloadAction<Expense>) => {
            state.list = [...state.list, action.payload];
        },
        setOdometerStateError: (state, action: PayloadAction<string | undefined>) => {
            state.errorMessageData.odometerState = action.payload;
        },
        setExpensePriceError: (state, action: PayloadAction<string | undefined>) => {
            state.errorMessageData.expensePrice = action.payload;
        },
        reset: (state) => {
            state.expenseTypeId = initialState.expenseTypeId;
            state.expenseCategoryId = initialState.expenseCategoryId;
            state.expensePrice = initialState.expensePrice;
            state.date = initialState.date;
            state.odometerState = initialState.odometerState;
            state.attachmentUrlList = initialState.attachmentUrlList;
            state.note = initialState.note;
            state.errorMessageData = initialState.errorMessageData;
        },
    },
});
