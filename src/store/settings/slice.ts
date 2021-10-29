import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type State = {
    lastSelectedDeviceId: string | undefined,
}

const initialState: State = {
    lastSelectedDeviceId: undefined,
};

export const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        setLastSelectedDeviceId: (state, action: PayloadAction<string>) => { state.lastSelectedDeviceId = action.payload },
    },
});
