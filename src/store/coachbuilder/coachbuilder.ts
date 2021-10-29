import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Coachbuilder } from "../../types";

type State = {
    list: Coachbuilder[],
}

const initialState: State = {
    list: [
        { id: "1", name: "Sedan" },
        { id: "2", name: "Kombi" },
        { id: "3", name: "Hatchback" },
        { id: "4", name: "Kupé" },
        { id: "5", name: "Liftback" },
        { id: "6", name: "Pick-up" },
        { id: "7", name: "SUV" },
        { id: "8", name: "Crossover minibus" },
        { id: "9", name: "MPV" },
        { id: "10", name: "Limuzína" },
        { id: "11", name: "Trambusová" },
        { id: "12", name: "Rámová" },
    ],
};

export const coachbuilderSlice = createSlice({
    name: "coachbuilder",
    initialState,
    reducers: {
        setList: (state, action: PayloadAction<Coachbuilder[]>) => { state.list = action.payload },
    },
});
