import { put, takeLatest, select, takeEvery } from "redux-saga/effects";

import { getUUID, round } from "../../utils";
import { actions } from "../actions";
import { getLastSelectedOrFirstDeviceId, getRefuelingMainFuel, getRefuelingSecondaryFuel } from "../selectors";
import {
    getMainFuelAmountL,
    getMainFuelLeastPriorityField,
    getMainFuelPrice,
    getMainFuelUnitPrice,
    getRefuelingAttachmentUrlList,
    getRefuelingDate,
    getRefuelingNote,
    getRefuelingOdometerState,
    getSecondaryFuelAmountL,
    getSecondaryFuelLeastPriorityField,
    getSecondaryFuelPrice,
    getSecondaryFuelUnitPrice,
    getIsSecondaryTankFull,
    getIsMainTankFull,
} from "./selectors";

export function* refuelingSaga() {
    yield takeEvery([actions.refueling.setIsMainFuelSelected, actions.refueling.setIsSecondaryFuelSelected], refuelingErrorSaga);
    yield takeLatest(actions.refueling.save.type, saveRefuelingSaga);
    yield takeEvery(actions.refueling.requestSetMainFuelAmountL, mainFuelAmountLSaga);
    yield takeEvery(actions.refueling.requestSetMainFuelPrice, mainFuelPriceSaga);
    yield takeEvery(actions.refueling.requestSetMainFuelUnitPrice, mainFuelUnitPriceSaga);
    yield takeEvery(actions.refueling.requestSetSecondaryFuelAmountL, secondaryFuelAmountLSaga);
    yield takeEvery(actions.refueling.requestSetSecondaryFuelPrice, secondaryFuelPriceSaga);
    yield takeEvery(actions.refueling.requestSetSecondaryFuelUnitPrice, secondaryFuelUnitPriceSaga);
}

function* mainFuelAmountLSaga(action: { payload: number | undefined }) {
    const fuelAmountL = action.payload;
    const mainFuelUnitPrice: ReturnType<typeof getMainFuelUnitPrice> = yield select(getMainFuelUnitPrice);
    const mainFuelPrice: ReturnType<typeof getMainFuelPrice> = yield select(getMainFuelPrice);
    const mainFuelLeastPriorityField: ReturnType<typeof getMainFuelLeastPriorityField> = yield select(getMainFuelLeastPriorityField);
    if (fuelAmountL !== undefined && mainFuelUnitPrice !== undefined && mainFuelPrice !== undefined) {
        if (mainFuelLeastPriorityField === "price") {
            yield put(actions.refueling.setMainFuelPrice(round(fuelAmountL * mainFuelUnitPrice, 2)));
        } else {
            yield put(actions.refueling.setMainFuelUnitPrice(round(mainFuelPrice / fuelAmountL, 2)));
        }
    }
    yield put(actions.refueling.setMainFuelAmountL(round(action.payload, 2)));
}

function* mainFuelPriceSaga(action: { payload: number | undefined }) {
    const mainFuelAmountL: ReturnType<typeof getMainFuelAmountL> = yield select(getMainFuelAmountL);
    const fuelPrice = action.payload;
    if (mainFuelAmountL !== undefined && fuelPrice !== undefined) {
        yield put(actions.refueling.setMainFuelUnitPrice(round(fuelPrice / mainFuelAmountL, 2)));
        yield put(actions.refueling.setMainFuelLeastPriorityField("unitPrice"));
    }
    yield put(actions.refueling.setMainFuelPrice(round(fuelPrice, 2)));
}

function* mainFuelUnitPriceSaga(action: { payload: number | undefined }) {
    const mainFuelAmountL: ReturnType<typeof getMainFuelAmountL> = yield select(getMainFuelAmountL);
    const fuelUnitPrice = action.payload;
    if (mainFuelAmountL !== undefined && fuelUnitPrice !== undefined) {
        yield put(actions.refueling.setMainFuelPrice(round(fuelUnitPrice * mainFuelAmountL, 2)));
        yield put(actions.refueling.setMainFuelLeastPriorityField("price"));
    }
    yield put(actions.refueling.setMainFuelUnitPrice(round(fuelUnitPrice, 2)));
}

function* refuelingErrorSaga(action: { type: string }) {
    switch (action.type) {
        case actions.refueling.setIsMainFuelSelected.type:
        case actions.refueling.setIsSecondaryFuelSelected.type:
            yield put(actions.refueling.setUnselectedFuelErrorMessage(undefined));
            return;
    }
}

function* secondaryFuelAmountLSaga(action: { payload: number | undefined }) {
    const fuelAmountL = action.payload;
    const secondaryFuelUnitPrice: ReturnType<typeof getSecondaryFuelUnitPrice> = yield select(getSecondaryFuelUnitPrice);
    const secondaryFuelPrice: ReturnType<typeof getSecondaryFuelPrice> = yield select(getSecondaryFuelPrice);
    const secondaryFuelLeastPriorityField: ReturnType<typeof getSecondaryFuelLeastPriorityField> = yield select(getSecondaryFuelLeastPriorityField);
    if (fuelAmountL !== undefined && secondaryFuelUnitPrice !== undefined && secondaryFuelPrice !== undefined) {
        if (secondaryFuelLeastPriorityField === "price") {
            yield put(actions.refueling.setSecondaryFuelPrice(round(fuelAmountL * secondaryFuelUnitPrice, 2)));
        } else {
            yield put(actions.refueling.setSecondaryFuelUnitPrice(round(secondaryFuelPrice / fuelAmountL, 2)));
        }
    }
    yield put(actions.refueling.setSecondaryFuelAmountL(round(action.payload, 2)));
}

function* secondaryFuelPriceSaga(action: { payload: number | undefined }) {
    const secondaryFuelAmountL: ReturnType<typeof getSecondaryFuelAmountL> = yield select(getSecondaryFuelAmountL);
    const fuelPrice = action.payload;
    if (secondaryFuelAmountL !== undefined && fuelPrice !== undefined) {
        yield put(actions.refueling.setSecondaryFuelUnitPrice(round(fuelPrice / secondaryFuelAmountL, 2)));
        yield put(actions.refueling.setSecondaryFuelLeastPriorityField("unitPrice"));
    }
    yield put(actions.refueling.setSecondaryFuelPrice(round(fuelPrice, 2)));
}

function* secondaryFuelUnitPriceSaga(action: { payload: number | undefined }) {
    const secondaryFuelAmountL: ReturnType<typeof getSecondaryFuelAmountL> = yield select(getSecondaryFuelAmountL);
    const fuelUnitPrice = action.payload;
    if (secondaryFuelAmountL !== undefined && fuelUnitPrice !== undefined) {
        yield put(actions.refueling.setSecondaryFuelPrice(round(fuelUnitPrice * secondaryFuelAmountL, 2)));
        yield put(actions.refueling.setSecondaryFuelLeastPriorityField("price"));
    }
    yield put(actions.refueling.setSecondaryFuelUnitPrice(round(fuelUnitPrice, 2)));
}

function* saveRefuelingSaga() {
    const date: ReturnType<typeof getRefuelingDate> = yield select(getRefuelingDate);
    const odometerState: ReturnType<typeof getRefuelingOdometerState> = yield select(getRefuelingOdometerState);
    const attachmentUrlList: ReturnType<typeof getRefuelingAttachmentUrlList> = yield select(getRefuelingAttachmentUrlList);
    const note: ReturnType<typeof getRefuelingNote> = yield select(getRefuelingNote);
    const lastSelectedOrFirstDeviceId: ReturnType<typeof getLastSelectedOrFirstDeviceId> = yield select(getLastSelectedOrFirstDeviceId);
    const mainFuel: ReturnType<typeof getRefuelingMainFuel> = yield select(getRefuelingMainFuel);
    const secondaryFuel: ReturnType<typeof getRefuelingSecondaryFuel> = yield select(getRefuelingSecondaryFuel);
    const mainFuelAmountL: ReturnType<typeof getMainFuelAmountL> = yield select(getMainFuelAmountL);
    const mainFuelPrice: ReturnType<typeof getMainFuelPrice> = yield select(getMainFuelPrice);
    const mainFuelUnitPrice: ReturnType<typeof getMainFuelUnitPrice> = yield select(getMainFuelUnitPrice);
    const secondaryFuelAmountL: ReturnType<typeof getSecondaryFuelAmountL> = yield select(getSecondaryFuelAmountL);
    const secondaryFuelPrice: ReturnType<typeof getSecondaryFuelPrice> = yield select(getSecondaryFuelPrice);
    const secondaryFuelUnitPrice: ReturnType<typeof getSecondaryFuelUnitPrice> = yield select(getSecondaryFuelUnitPrice);
    const isMainTankFull: ReturnType<typeof getIsMainTankFull> = yield select(getIsMainTankFull);
    const isSecondaryTankFull: ReturnType<typeof getIsSecondaryTankFull> = yield select(getIsSecondaryTankFull);

    if (date === undefined || odometerState === undefined || lastSelectedOrFirstDeviceId === undefined) {
        return;
    }

    if (mainFuel !== undefined && mainFuelAmountL !== undefined && mainFuelPrice !== undefined && mainFuelUnitPrice !== undefined) {
        yield put(actions.refueling.addRefueling({
            id: getUUID(),
            deviceId: lastSelectedOrFirstDeviceId,
            date,
            odometerValue: odometerState,
            attachmentUrlList,
            note,
            fuelAmountL: mainFuelAmountL,
            fuelPrice: mainFuelPrice,
            fuelUnitPrice: mainFuelUnitPrice,
            fuelId: mainFuel.id,
            isTankFull: isMainTankFull,
        }));
    }

    if (secondaryFuel !== undefined && secondaryFuelAmountL !== undefined && secondaryFuelPrice !== undefined && secondaryFuelUnitPrice !== undefined) {
        yield put(actions.refueling.addRefueling({
            id: getUUID(),
            deviceId: lastSelectedOrFirstDeviceId,
            date,
            odometerValue: odometerState,
            attachmentUrlList,
            note,
            fuelAmountL: secondaryFuelAmountL,
            fuelPrice: secondaryFuelPrice,
            fuelUnitPrice: secondaryFuelUnitPrice,
            fuelId: secondaryFuel.id,
            isTankFull: isSecondaryTankFull,
        }));
    }

    yield put(actions.refueling.reset());
}
