import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Manufacturer } from "../../types";
import { doNothing } from "../../utils";

type State = {
    list: Manufacturer[],
    isLoading: boolean,
}

const initialState: State = {
    list: [],
    isLoading: false,
};

export const manufacturerSlice = createSlice({
    name: "manufacturer",
    initialState,
    reducers: {
        getList: doNothing,
        setList: (state, action: PayloadAction<Manufacturer[]>) => { state.list = action.payload },
        loadManufacturerListStarted: (state) => {
            state.isLoading = true;
        },
        loadManufacturerListSucceed: (state) => {
            state.isLoading = false;
        },
        loadManufacturerListFailed: (state) => {
            state.isLoading = false;
        },
    },
});
