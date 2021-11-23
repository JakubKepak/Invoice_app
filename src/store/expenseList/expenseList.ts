import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ExpenseCategoryList } from "../../types";

type State = {
    list: ExpenseCategoryList[],
}

const initialState: State = {
    list: [
        {
            id:"1",
            category: "Pojištění",
            type: [
                { id: "1", name: "Havarijní"},
                { id: "2", name: "Povinné ručení"},
            ]
        },
        {
            id:"2",
            category: "Služby",
            type: [
                { id:"1", name: "Dálniční známka"},
                { id:"2", name: "Evidenční kontrola"},
                { id:"3", name: "Leasing/Úvěr"},
                { id:"4", name: "Myčka"},
                { id:"5", name: "Náhradní vozidlo"},
                { id:"6", name: "Odtah"},
                { id:"7", name: "STK"},
                { id:"8", name: "Úschova pneu"}
            ]
        },
        {
            id:"3",
            category: "Náhradní díly",
            type: [
                { id:"1", name: "Akumulátor"},
                { id:"2", name: "Pneumatiky"},
                { id:"3", name: "Výbava, příslušenství"},
            ]
        },
        {
            id:"4",
            category: "Poplatek",
            type: [
                { id:"1", name: "Parkování"},
                { id:"2", name: "Pokuta"},
            ]
        },
        {
            id:"5",
            category: "Ostatní",
            type: [
                { id:"1", name: "Jiný výdaj"}
            ]},
    ],
};

export const expenseListSlice = createSlice({
    name: "expenseList",
    initialState,
    reducers: {
        setList: (state, action: PayloadAction<ExpenseCategoryList[]>) => { state.list = action.payload },
    },
});
