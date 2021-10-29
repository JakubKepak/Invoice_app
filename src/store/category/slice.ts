import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Category } from "../../types";

type State = {
    list: Category[],
}

const initialState: State = {
    list: [
        { id: "1", name: "Osobní" },
        { id: "2", name: "Terénní" },
        { id: "3", name: "Nákladní" },
        { id: "4", name: "Pracovní" },
        { id: "5", name: "Zahradní" },
        { id: "6", name: "Moto" },
        { id: "7", name: "Čtyřkolka" },
        { id: "8", name: "Ostatní" },
    ],
};

export const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        setList: (state, action: PayloadAction<Category[]>) => { state.list = action.payload },
    },
});
