import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { doNothing, isDebug } from "../../utils";

type State = {
    id?: number,
    email?: string,
    password?: string,
    telefon?: string,
    usedStorageMb?: number,
    storageCapacityMb?: number,
    name?: string,
    surname?: string,
    createdDate?: Date,
    loggedHash?: string,
}

const initialState: State = {};

const debugInitialState: State = {
    email: "admin",
    password: "admin",
};

export const userSlice = createSlice({
    name: "user",
    initialState: isDebug ? debugInitialState : initialState,
    reducers: {
        setEmail: (state, action: PayloadAction<string | undefined>) => { state.email = action.payload },
        setPassword: (state, action: PayloadAction<string | undefined>) => { state.password = action.payload },
        setLoggedHash: (state, action: PayloadAction<string | undefined>) => { state.loggedHash = action.payload },
        setUsedStorageMb: (state, action: PayloadAction<number | undefined>) => { state.usedStorageMb = action.payload },
        setStorageCapacityMb: (state, action: PayloadAction<number | undefined>) => { state.storageCapacityMb = action.payload },
        login: doNothing,
        logout: () => initialState,
    },
});
