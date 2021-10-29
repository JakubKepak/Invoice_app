import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Fuel } from "../../types";

type State = {
    list: Fuel[],
}

const initialState: State = {
    list: [
        { id: "1", name: "benzín", unitId: "2" },
        { id: "2", name: "LPG", unitId: "2" },
        { id: "3", name: "nafta", unitId: "2" },
        { id: "4", name: "elektro", unitId: "3" },
        { id: "5", name: "CNG", unitId: "2" },
        { id: "6", name: "vodík", unitId: "2" },
        { id: "7", name: "LNG", unitId: "2" },
    ],
};

export const fuelSlice = createSlice({
    name: "fuel",
    initialState,
    reducers: {
        setList: (state, action: PayloadAction<Fuel[]>) => { state.list = action.payload },
    },
});
