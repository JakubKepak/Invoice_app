import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Unit } from "../../types";

type State = {
    list: Unit[],
}

const initialState: State = {
    list: [
        { id: "1", abbreviation: "kWh/100 km" },
        { id: "2", abbreviation: "l" },
        { id: "3", abbreviation: "kWh" },
        { id: "4", abbreviation: "km" },
        { id: "5", abbreviation: "cm³" },
    ],
};

export const unitSlice = createSlice({
    name: "unit",
    initialState,
    reducers: {
        setList: (state, action: PayloadAction<Unit[]>) => { state.list = action.payload },
    },
});
