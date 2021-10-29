import { Refueling } from "../../types";
import { sortByDateAscending } from "../../utils";
import { RootState } from "../store";

const getState = (state: RootState) => state.refueling;

export const getRefuelingDate = (state: RootState) => getState(state).date;

export const getRefuelingOdometerState = (state: RootState) => getState(state).odometerState;

export const getRefuelingOdometerValue = (state: RootState) => getState(state).odometerState;

export const getRefuelingNote = (state: RootState) => getState(state).note;

export const getErrorMessageData = (state: RootState) => getState(state).errorMessageData;

export const getRefuelingOdometerStateErrorMessage = (state: RootState) => getErrorMessageData(state).odometerState;

export const getfuelAmountOverTankVolumeErrorMessage = (state: RootState) => getErrorMessageData(state).fuelAmountOverTankVolume;

export const getRefuelingUnselectedFuelErrorMessage = (state: RootState) => getErrorMessageData(state).unselectedFuel;

export const getRefuelingMainFuelAmountErrorMessage = (state: RootState) => getErrorMessageData(state).mainFuelAmount;

export const getRefuelingMainFuelPriceErrorMessage = (state: RootState) => getErrorMessageData(state).mainFuelPrice;

export const getRefuelingMainFuelUnitPriceErrorMessage = (state: RootState) => getErrorMessageData(state).mainFuelUnitPrice;

export const getRefuelingSecondaryFuelAmountErrorMessage = (state: RootState) => getErrorMessageData(state).secondaryFuelAmount;

export const getRefuelingSecondaryFuelPriceErrorMessage = (state: RootState) => getErrorMessageData(state).secondaryFuelPrice;

export const getRefuelingSecondaryFuelUnitPriceErrorMessage = (state: RootState) => getErrorMessageData(state).secondaryFuelUnitPrice;

export const getRefuelingAttachmentUrlList = (state: RootState) => getState(state).attachmentUrlList;

export const getIsMainFuelSelected = (state: RootState) => getState(state).isMainFuelSelected;

export const getIsSecondaryFuelSelected = (state: RootState) => getState(state).isSecondaryFuelSelected;

export const getMainFuelAmountL = (state: RootState) => getState(state).mainFuelAmountL;

export const getMainFuelPrice = (state: RootState) => getState(state).mainFuelPrice;

export const getMainFuelUnitPrice = (state: RootState) => getState(state).mainFuelUnitPrice;

export const getSecondaryFuelAmountL = (state: RootState) => getState(state).secondaryFuelAmountL;

export const getSecondaryFuelPrice = (state: RootState) => getState(state).secondaryFuelPrice;

export const getSecondaryFuelUnitPrice = (state: RootState) => getState(state).secondaryFuelUnitPrice;

export const getMainFuelLeastPriorityField = (state: RootState) => getState(state).mainFuelLeastPriorityField;

export const getSecondaryFuelLeastPriorityField = (state: RootState) => getState(state).secondaryFuelLeastPriorityField;

export const getIsMainTankFull = (state: RootState) => getState(state).isMainTankFull;

export const getIsSecondaryTankFull = (state: RootState) => getState(state).isSecondaryTankFull;

export const getRefuelingList = (state: RootState) => getState(state).list;

export const getDeviceRefuelingList = (
    state: RootState,
    deviceId: string | undefined,
) => getRefuelingList(state).filter((refueling) => refueling.deviceId === deviceId);

export const getDeviceRefuelingAscendingList = (
    state: RootState,
    deviceId: string | undefined,
): Refueling[] => sortByDateAscending(getDeviceRefuelingList(state, deviceId));

export const getLastDeviceRefueling = (
    state: RootState,
    deviceId: string | undefined,
): Refueling | undefined => getDeviceRefuelingAscendingList(state, deviceId).reverse()[0];

export const getRefuelingLastDeviceOdometerValue = (state: RootState, deviceId: string | undefined) => getLastDeviceRefueling(state, deviceId)?.odometerValue;
