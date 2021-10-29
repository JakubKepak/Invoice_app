import { Fuel, Unit } from "../../types";
import { formatFuelLabel, listToIdMap } from "../../utils";
import { RootState } from "../store";

const getState = (state: RootState) => state.unit;

const getUnitList = (state: RootState) => getState(state).list;

export const getUnitMap = (state: RootState): { [id: string]: Unit } => listToIdMap(getUnitList(state));

export const getUnit = (state: RootState, unitId: string | undefined): Unit | undefined => {
    if (unitId === undefined) {
        return undefined;
    }
    const unit = getUnitMap(state)[unitId];
    if (unit === undefined) {
        return undefined;
    }
    return unit;
}

export const getFuelLabel = (state: RootState, fuel: Fuel | undefined): string | undefined => {
    if (fuel === undefined) {
        return undefined;
    }
    const unit = getUnit(state, fuel.unitId);
    if (unit === undefined) {
        return undefined;
    }

    return formatFuelLabel(unit, fuel);
}
