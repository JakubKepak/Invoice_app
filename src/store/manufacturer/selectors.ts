import { RootState } from "../store";

const getState = (state: RootState) => state.manufacturer;

const getManufacturerList = (state: RootState) => getState(state).list;

export const getManufacturer = (state: RootState, id?: string) => getManufacturerList(state).find((manufacturer) => manufacturer.id === id)
