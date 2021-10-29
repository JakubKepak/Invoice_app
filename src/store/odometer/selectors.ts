import { OdometerState } from "../../types";
import { sortByDateAscending } from "../../utils";
import { RootState } from "../store";

const getState = (state: RootState) => state.odometerState;

export const getOdometerStateDate = (state: RootState) => getState(state).date;

export const getOdometerStateValue = (state: RootState) => getState(state).value;

export const getOdometerStateValueErrorMessage = (state: RootState) => getState(state).errorDataState.value;

export const getOdometerStateAttachmentUrlList = (state: RootState) => getState(state).attachmentUrlList;

export const getOdometerStateNote = (state: RootState) => getState(state).note;

export const getOdometerStateList = (state: RootState) => getState(state).list;

export const getDeviceOdometerStateList = (
    state: RootState,
    deviceId: string | undefined,
) => getOdometerStateList(state).filter((odometerState) => odometerState.deviceId === deviceId);

export const getDeviceOdometerStateAscendingList = (
    state: RootState,
    deviceId: string | undefined,
): OdometerState[] => sortByDateAscending(getDeviceOdometerStateList(state, deviceId));

export const getLastDeviceOdometerState = (
    state: RootState,
    deviceId: string | undefined,
): OdometerState | undefined => getDeviceOdometerStateAscendingList(state, deviceId).reverse()[0];

export const getOdometerLastDeviceOdometerValue = (
    state: RootState,
    deviceId: string | undefined,
) => getLastDeviceOdometerState(state, deviceId)?.value;
