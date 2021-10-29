import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Refueling } from "../../types";
import { addDays, doNothing, getToday } from "../../utils";

type ErrorMessageData = {
    odometerState?: string,
    unselectedFuel?: string,
    fuelAmountOverTankVolume?: string,
    mainFuelAmount?: string,
    mainFuelPrice?: string,
    mainFuelUnitPrice?: string,
    secondaryFuelAmount?: string,
    secondaryFuelPrice?: string,
    secondaryFuelUnitPrice?: string,
}

type State = {
    date?: Date,
    odometerState?: number,
    attachmentUrlList: string[],
    note?: string,
    list: Refueling[],
    errorMessageData: ErrorMessageData,
    isMainFuelSelected: boolean,
    isSecondaryFuelSelected: boolean,
    mainFuelAmountL: number | undefined,
    mainFuelPrice: number | undefined,
    mainFuelUnitPrice: number | undefined,
    secondaryFuelAmountL: number | undefined,
    secondaryFuelPrice: number | undefined,
    secondaryFuelUnitPrice: number | undefined,
    mainFuelLeastPriorityField?: "price" | "unitPrice",
    secondaryFuelLeastPriorityField?: "price" | "unitPrice",
    isMainTankFull: boolean,
    isSecondaryTankFull: boolean,
}

const initialState: State = {
    date: getToday(),
    odometerState: undefined,
    attachmentUrlList: [],
    note: undefined,
    list: [{
        id: "154",
        deviceId: "1",
        date: addDays(getToday(), -8),
        odometerValue: 28052,
        attachmentUrlList: [],
        note: undefined,
        fuelId: "1",
        fuelAmountL: 30,
        fuelPrice: 1200,
        fuelUnitPrice: 40,
        isTankFull: true,
    }, {
        id: "2456",
        deviceId: "1",
        date: addDays(getToday(), -5),
        odometerValue: 32254,
        attachmentUrlList: [],
        note: undefined,
        fuelId: "2",
        fuelAmountL: 35,
        fuelPrice: 1470,
        fuelUnitPrice: 42,
        isTankFull: true,
    }, {
        id: "3456",
        deviceId: "1",
        date: addDays(getToday(), -4),
        odometerValue: 39680,
        attachmentUrlList: [],
        fuelId: "3",
        note: undefined,
        fuelAmountL: 21.5646,
        fuelPrice: 1200.4945,
        fuelUnitPrice: 55.6697,
        isTankFull: false,
    }],
    errorMessageData: {},
    isMainFuelSelected: false,
    isSecondaryFuelSelected: false,
    mainFuelAmountL: undefined,
    mainFuelPrice: undefined,
    mainFuelUnitPrice: undefined,
    secondaryFuelAmountL: undefined,
    secondaryFuelPrice: undefined,
    secondaryFuelUnitPrice: undefined,
    isMainTankFull: false,
    isSecondaryTankFull: false,
};

export const refuelingSlice = createSlice({
    name: "refueling",
    initialState,
    reducers: {
        setDate: (state, action: PayloadAction<Date | undefined>) => {
            state.date = action.payload;
        },
        setOdometerState: (state, action: PayloadAction<number | undefined>) => {
            state.errorMessageData.odometerState = undefined;
            state.odometerState = action.payload;
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
        addRefueling: (state, action: PayloadAction<Refueling>) => {
            state.list = [...state.list, action.payload];
        },
        setOdometerStateErrorMessage: (state, action: PayloadAction<string | undefined>) => {
            state.errorMessageData.odometerState = action.payload;
        },
        setFuelAmountOverTankVolumeErrorMessage: (state, action: PayloadAction<string | undefined>) => {
            state.errorMessageData.fuelAmountOverTankVolume = action.payload;
        },
        setUnselectedFuelErrorMessage: (state, action: PayloadAction<string | undefined>) => {
            state.errorMessageData.unselectedFuel = action.payload;
        },
        setMainFuelAmountErrorMessage: (state, action: PayloadAction<string | undefined>) => {
            state.errorMessageData.mainFuelAmount = action.payload;
        },
        setMainFuelPriceErrorMessage: (state, action: PayloadAction<string | undefined>) => {
            state.errorMessageData.mainFuelPrice = action.payload;
        },
        setMainFuelUnitPriceErrorMessage: (state, action: PayloadAction<string | undefined>) => {
            state.errorMessageData.mainFuelUnitPrice = action.payload;
        },
        setSecondaryFuelAmountErrorMessage: (state, action: PayloadAction<string | undefined>) => {
            state.errorMessageData.secondaryFuelAmount = action.payload;
        },
        setSecondaryFuelPriceErrorMessage: (state, action: PayloadAction<string | undefined>) => {
            state.errorMessageData.secondaryFuelPrice = action.payload;
        },
        setSecondaryFuelUnitPriceErrorMessage: (state, action: PayloadAction<string | undefined>) => {
            state.errorMessageData.secondaryFuelUnitPrice = action.payload;
        },
        setIsMainFuelSelected: (state, action: PayloadAction<boolean>) => {
            state.isMainFuelSelected = action.payload;
        },
        setIsSecondaryFuelSelected: (state, action: PayloadAction<boolean>) => {
            state.isSecondaryFuelSelected = action.payload;
        },
        setMainFuelAmountL: (state, action: PayloadAction<number | undefined>) => {
            state.mainFuelAmountL = action.payload;
            state.errorMessageData.mainFuelAmount = undefined;
        },
        setMainFuelPrice: (state, action: PayloadAction<number | undefined>) => {
            state.mainFuelPrice = action.payload;
            state.errorMessageData.mainFuelPrice = undefined;
        },
        setMainFuelUnitPrice: (state, action: PayloadAction<number | undefined>) => {
            state.mainFuelUnitPrice = action.payload;
            state.errorMessageData.mainFuelUnitPrice = undefined;
        },
        setSecondaryFuelAmountL: (state, action: PayloadAction<number | undefined>) => {
            state.secondaryFuelAmountL = action.payload;
        },
        setSecondaryFuelPrice: (state, action: PayloadAction<number | undefined>) => {
            state.secondaryFuelPrice = action.payload;
        },
        setSecondaryFuelUnitPrice: (state, action: PayloadAction<number | undefined>) => {
            state.secondaryFuelUnitPrice = action.payload;
        },
        setMainFuelLeastPriorityField: (state, action: PayloadAction<"price" | "unitPrice" | undefined>) => {
            state.mainFuelLeastPriorityField = action.payload;
        },
        setSecondaryFuelLeastPriorityField: (state, action: PayloadAction<"price" | "unitPrice" | undefined>) => {
            state.secondaryFuelLeastPriorityField = action.payload;
        },
        setIsMainTankFull: (state, action: PayloadAction<boolean>) => {
            state.isMainTankFull = action.payload;
        },
        setIsSecondaryTankFull: (state, action: PayloadAction<boolean>) => {
            state.isSecondaryTankFull = action.payload;
        },
        requestSetMainFuelAmountL: (state, action: PayloadAction<number | undefined>) => { },
        requestSetMainFuelPrice: (state, action: PayloadAction<number | undefined>) => { },
        requestSetMainFuelUnitPrice: (state, action: PayloadAction<number | undefined>) => { },
        requestSetSecondaryFuelAmountL: (state, action: PayloadAction<number | undefined>) => { },
        requestSetSecondaryFuelPrice: (state, action: PayloadAction<number | undefined>) => { },
        requestSetSecondaryFuelUnitPrice: (state, action: PayloadAction<number | undefined>) => { },
        reset: (state) => {
            state.date = initialState.date;
            state.odometerState = initialState.odometerState;
            state.attachmentUrlList = initialState.attachmentUrlList;
            state.note = initialState.note;
            state.errorMessageData = initialState.errorMessageData;
            state.isMainFuelSelected = initialState.isMainFuelSelected;
            state.isSecondaryFuelSelected = initialState.isSecondaryFuelSelected;
            state.mainFuelAmountL = initialState.mainFuelAmountL;
            state.mainFuelPrice = initialState.mainFuelPrice;
            state.mainFuelUnitPrice = initialState.mainFuelUnitPrice;
            state.secondaryFuelAmountL = initialState.secondaryFuelAmountL;
            state.secondaryFuelPrice = initialState.secondaryFuelPrice;
            state.secondaryFuelUnitPrice = initialState.secondaryFuelUnitPrice;
            state.mainFuelLeastPriorityField = initialState.mainFuelLeastPriorityField;
            state.secondaryFuelLeastPriorityField = initialState.secondaryFuelLeastPriorityField;
        },
    },
});
