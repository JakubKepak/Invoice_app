import { AxiosResponse } from "axios";
import { put, takeLatest, call } from "redux-saga/effects";

import { strictCapitalize } from "../../utils";
import { ManufacturerResponse } from "../../types";
import { getManufacturerList } from "../../api";
import { actions } from "../actions";

export function* manufacturerSaga() {
    yield takeLatest(actions.manufacturer.getList.type, getManufacturerListSaga);
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
