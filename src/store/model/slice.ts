import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Model } from "../../types";

type State = {
    list: Model[],
}

const initialState: State = {
    list: [
        { id: "1", manufacturerId: "14", name: "Fabia" },
        { id: "2", manufacturerId: "14", name: "Fabie Combi" },
        { id: "3", manufacturerId: "14", name: "Scala" },
        { id: "4", manufacturerId: "14", name: "Kamiq" },
        { id: "5", manufacturerId: "14", name: "Octavia" },
        { id: "6", manufacturerId: "14", name: "Octavia Combi" },
        { id: "7", manufacturerId: "14", name: "Roomster" },
        { id: "8", manufacturerId: "15", name: "FGR" },
    ],
};

export const modelSlice = createSlice({
    name: "model",
    initialState,
    reducers: {
        setList: (state, action: PayloadAction<Model[]>) => { state.list = action.payload },
    },
});
