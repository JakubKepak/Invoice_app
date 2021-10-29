import { RootState } from "../store";

const getState = (state: RootState) => state.settings;

export const getLastSelectedDeviceId = (state: RootState) => getState(state).lastSelectedDeviceId;
