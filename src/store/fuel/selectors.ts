import { Device, Fuel } from "../../types";
import { formatFuelText, formatTankVolumeText, listToIdMap } from "../../utils";
import { RootState } from "../store";

const getState = (state: RootState) => state.fuel;

export const getFuelList = (state: RootState) => getState(state).list;

export const getFuelMap = (state: RootState): { [key: string]: Fuel } => listToIdMap(getFuelList(state));

export const getFuel = (state: RootState, fuelId: string | undefined) => fuelId === undefined ? undefined : getFuelMap(state)[fuelId];

export const getFuelText = (state: RootState, mainFuelId: string | undefined, secondaryFuelId: string | undefined): string | undefined => {
    return formatFuelText(getFuel(state, mainFuelId), getFuel(state, secondaryFuelId));
}

export const getTankVolumeText = (state: RootState, device: Device | undefined) => formatTankVolumeText(
    getFuel(state, device?.mainFuelId),
    getFuel(state, device?.secondaryFuelId),
    device,
);
