import { put, takeLatest, select } from "redux-saga/effects";

import { getUUID } from "../../utils";
import { actions } from "../actions";
import { getLastSelectedOrFirstDeviceId } from "../selectors";
import {
    getOdometerStateAttachmentUrlList,
    getOdometerStateDate,
    getOdometerStateNote,
    getOdometerStateValue,
} from "./selectors";

export function* odometerSaga() {
    yield takeLatest(actions.odometerState.save.type, saveOdometerStateSaga);
}

function* saveOdometerStateSaga() {
    const date: ReturnType<typeof getOdometerStateDate> = yield select(getOdometerStateDate);
    const attachmentUrlList: ReturnType<typeof getOdometerStateAttachmentUrlList> = yield select(getOdometerStateAttachmentUrlList);
    const value: ReturnType<typeof getOdometerStateValue> = yield select(getOdometerStateValue);
    const note: ReturnType<typeof getOdometerStateNote> = yield select(getOdometerStateNote);
    const lastSelectedOrFirstDeviceId: ReturnType<typeof getLastSelectedOrFirstDeviceId> = yield select(getLastSelectedOrFirstDeviceId);

    if (date === undefined || value === undefined || lastSelectedOrFirstDeviceId === undefined) {
        return;
    }
    yield put(actions.odometerState.addOdometerState({
        id: getUUID(),
        deviceId: lastSelectedOrFirstDeviceId,
        date,
        value,
        attachmentUrlList,
        note,
    }));
    yield put(actions.odometerState.reset());
}
