import { put, takeLatest, call, select } from "redux-saga/effects";

import { getUser } from "../../api";
import { getUserCredentials } from "../user/selectors";
import { actions } from "../actions";

export function* userSaga() {
    yield takeLatest(actions.user.login.type, loginSaga);
}

function* loginSaga() {
    const { email, password }: ReturnType<typeof getUserCredentials> = yield select(getUserCredentials);
    const { data }: ReturnType<typeof getUser> = yield call(getUser, email, password);
    yield put(actions.user.setLoggedHash(data?.loggedHash));
    yield put(actions.user.setStorageCapacityMb(data?.storageCapacityMb));
    yield put(actions.user.setUsedStorageMb(data?.usedStorageMb));
}
