import { RootState } from "../store";

const getNewDeviceState = (state: RootState) => state.newDevice;

export const getNewDevice = (state: RootState) => getNewDeviceState(state);

export const getNewDeviceMainFuelId = (state: RootState) => getNewDevice(state).mainFuelId;

export const getNewDeviceSecondaryFuelId = (state: RootState) => getNewDevice(state).secondaryFuelId;
