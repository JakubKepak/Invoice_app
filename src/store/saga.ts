import { AxiosResponse } from "axios";
import { put, takeLatest, call, select, takeEvery } from "redux-saga/effects";

import { strictCapitalize, getUUID } from "../utils";
import { ManufacturerResponse } from "../types";
import { getManufacturerList, getUser } from "../api";
import { getNewDevice, getUserCredentials } from "./selectors";
import { actions, RootState } from "./";
import { PayloadAction } from "@reduxjs/toolkit";

export function* saga() {
    yield takeLatest(actions.manufacturer.getList.type, getManufacturerListSaga);
    yield takeLatest(actions.newDevice.save.type, saveNewDeviceSaga);
    yield takeLatest(actions.user.login.type, loginSaga);
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
    ], newDeviceSaga);
}

function* getManufacturerListSaga() {
    try {
        yield put(actions.manufacturer.loadManufacturerListStarted());
        const { data }: AxiosResponse<ManufacturerResponse[]> = yield call(getManufacturerList);
        yield put(actions.manufacturer.setList([
            ...data.map((item) => ({
                id: (item.id + 100).toString(),
                name: strictCapitalize(item.name),
            })),
            { id: "14", name: "Škoda" },
            { id: "15", name: "Midalu" },
        ]));
        yield put(actions.manufacturer.loadManufacturerListSucceed());
    } catch (error) {
        console.log(error);
        yield put(actions.manufacturer.loadManufacturerListFailed());
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
        acquisitionData,
        guaranteeDate,
        guaranteeKm,
        guaranteeMonthCount,
    }: ReturnType<typeof getNewDevice> = yield select(getNewDevice);
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
        acquisitionData,
        guaranteeDate,
        guaranteeKm,
        guaranteeMonthCount,
    }));
    yield put(actions.newDevice.clear());
}

function* loginSaga() {
    const { email, password }: ReturnType<typeof getUserCredentials> = yield select(getUserCredentials);
    const { data }: ReturnType<typeof getUser> = yield call(getUser, email, password);
    yield put(actions.user.setLoggedHash(data?.loggedHash));
    yield put(actions.user.setStorageCapacityMb(data?.storageCapacityMb));
    yield put(actions.user.setUsedStorageMb(data?.usedStorageMb));
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

function* newDeviceSaga(action: { type: string }) {
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
