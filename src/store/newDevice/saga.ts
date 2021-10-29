import { put, takeLatest, select, takeEvery } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import { getUUID } from "../../utils";
import { RootState } from "../store";
import { actions } from "../actions";
import { getNewDevice } from "./selectors";

export function* newDeviceSaga() {
    yield takeLatest(actions.newDevice.save.type, saveNewDeviceSaga);
    yield takeEvery([actions.newDevice.setMainFuelId, actions.newDevice.setSecondaryFuelId], fuelSaga);
    yield takeEvery([
        actions.newDevice.setVin,
        actions.newDevice.setManufacturerId,
        actions.newDevice.setModelId,
        actions.newDevice.setMainFuelId,
        actions.newDevice.setInitalDate,
        actions.newDevice.setInitialConsumption,
        actions.newDevice.setInitialOdometerState,
        actions.newDevice.setMainTankVolume,
        actions.newDevice.setSecondaryTankVolume,
    ], newDeviceErrorSaga);
}

function* newDeviceErrorSaga(action: { type: string }) {
    switch (action.type) {
        case actions.newDevice.setModelId.type:
            yield put(actions.newDevice.setModelError(undefined));
            return;
        case actions.newDevice.setVin.type:
            yield put(actions.newDevice.setVinError(undefined));
            return;
        case actions.newDevice.setManufacturerId.type:
            yield put(actions.newDevice.setManufacturerError(undefined));
            return;
        case actions.newDevice.setMainFuelId.type:
            yield put(actions.newDevice.setFuelError(undefined));
            return;
        case actions.newDevice.setInitalDate.type:
            yield put(actions.newDevice.setInitalDateError(undefined));
            return;
        case actions.newDevice.setInitialConsumption.type:
            yield put(actions.newDevice.setInitialConsumptionError(undefined));
            return;
        case actions.newDevice.setInitialOdometerState.type:
            yield put(actions.newDevice.setInitialOdometerStateError(undefined));
            return;
        case actions.newDevice.setMainTankVolume.type:
            yield put(actions.newDevice.setMainTankVolumeError(undefined));
            return;
        case actions.newDevice.setSecondaryTankVolume.type:
            yield put(actions.newDevice.setSecondaryTankVolumeError(undefined));
            return;
    }
}

function* saveNewDeviceSaga() {
    const {
        name,
        manufacturerId,
        categoryId,
        spz,
        manufacturedYearMonthText,
        modelId,
        vin,
        number,
        motorization,
        powerKw,
        powerRPM,
        torqueNm,
        torqueRPM,
        engineVolumeCcm,
        transmissionNumber,
        transmissionType,
        mainFuelId,
        secondaryFuelId,
        mainTankVolume,
        secondaryTankVolume,
        coachbuilderId,
        colorText,
        firstRegistrationDate,
        initialConsumption,
        initialOdometerState,
        acquisitionDate,
        guaranteeDate,
        guaranteeKm,
        guaranteeMonthCount,
    }: ReturnType<typeof getNewDevice> = yield select(getNewDevice);
    if (manufacturerId === undefined || modelId === undefined || vin === undefined || mainFuelId === undefined || mainTankVolume === undefined) {
        return;
    }
    yield put(actions.deviceList.add({
        id: getUUID(),
        name,
        manufacturerId,
        categoryId,
        spz,
        manufacturedYearMonthText,
        imageUrl: undefined,
        modelId,
        vin,
        number,
        motorization,
        powerKw,
        powerRPM,
        torqueNm,
        torqueRPM,
        engineVolumeCcm,
        transmissionNumber,
        transmissionType,
        mainFuelId,
        secondaryFuelId,
        mainTankVolume,
        secondaryTankVolume,
        coachbuilderId,
        colorText,
        firstRegistrationDate,
        initialConsumption,
        initialOdometerState,
        acquisitionDate,
        guaranteeDate,
        guaranteeKm,
        guaranteeMonthCount,
    }));
    yield put(actions.newDevice.clear());
}

function* fuelSaga(action: PayloadAction<any>) {
    switch (action.type) {
        case actions.newDevice.setMainFuelId.type:
            const lastMainFuelId: string | undefined = yield select((state: RootState) => state.newDevice.mainFuelId);
            const mainFuelId = action.payload;
            if (lastMainFuelId !== mainFuelId) {
                yield put(actions.newDevice.setMainTankVolume(undefined))
            }
            yield put(actions.newDevice._setMainFuelId(mainFuelId));
            break;
        case actions.newDevice.setSecondaryFuelId.type:
            const lastSecondaryFuelId: string | undefined = yield select((state: RootState) => state.newDevice.secondaryFuelId);
            const secondaryFuelId = action.payload;
            if (lastSecondaryFuelId !== secondaryFuelId) {
                yield put(actions.newDevice.setSecondaryTankVolume(undefined))
            }
            yield put(actions.newDevice._setSecondaryFuelId(secondaryFuelId));
            return;
    }
}
