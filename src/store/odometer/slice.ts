import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { OdometerState } from "../../types";
import { addDays, doNothing, getToday } from "../../utils";

type ErrorDataState = {
    value?: string,
}

type State = {
    date?: Date,
    value?: number,
    attachmentUrlList: string[],
    note?: string,
    list: OdometerState[],
    errorDataState: ErrorDataState,
}

const initialState: State = {
    date: getToday(),
    value: undefined,
    attachmentUrlList: [],
    note: undefined,
    list: [{
        id: "1",
        deviceId: "1",
        date: addDays(getToday(), -12),
        value: 25052,
        attachmentUrlList: [],
        note: undefined,
    }, {
        id: "2",
        deviceId: "1",
        date: addDays(getToday(), -7),
        value: 29548,
        attachmentUrlList: [],
        note: undefined,
    }, {
        id: "3",
        deviceId: "1",
        date: addDays(getToday(), -2),
        value: 47680,
        attachmentUrlList: [],
        note: undefined,
    }],
    errorDataState: {},
};

export const odometerStateSlice = createSlice({
    name: "odometerState",
    initialState,
    reducers: {
        setDate: (state, action: PayloadAction<Date | undefined>) => {
            state.date = action.payload;
        },
        setValue: (state, action: PayloadAction<number | undefined>) => {
            state.errorDataState.value = undefined;
            state.value = action.payload;
        },
        setAttachmentUrlList: (state, action: PayloadAction<string[]>) => {
            state.attachmentUrlList = action.payload;
        },
        addAttachmentUrl: (state, action: PayloadAction<string>) => {
            state.attachmentUrlList = [...state.attachmentUrlList ?? [], action.payload]
        },
        removeAttachmentUrl: (state, action: PayloadAction<string>) => {
            state.attachmentUrlList = state.attachmentUrlList?.filter((attachmentUrl) => attachmentUrl !== action.payload);
        },
        setNote: (state, action: PayloadAction<string | undefined>) => {
            state.note = action.payload;
        },
        save: doNothing,
        addOdometerState: (state, action: PayloadAction<OdometerState>) => {
            state.list = [...state.list, action.payload];
        },
        reset: (state) => {
            state.date = initialState.date;
            state.value = initialState.value;
            state.attachmentUrlList = initialState.attachmentUrlList;
            state.note = initialState.note;
            state.errorDataState = initialState.errorDataState;
        },
        setValueError: (state, action: PayloadAction<string | undefined>) => {
            state.errorDataState.value = action.payload;
        },
    },
});
