import { put, takeLatest, select } from "redux-saga/effects";

import { getUUID } from "../../utils";
import { actions } from "../actions";
import { getLastSelectedOrFirstDeviceId } from "../selectors";
import {
    getExpenseDate,
    getExpenseNote,
    getExpenseOdometerState,
    getExpenseAttachmentUrlList,
    getExpensePrice,
    getExpenseTypeId,
    getExpenseCategoryId,
} from "./selectors";

export function* expenseSaga() {
    yield takeLatest(actions.expense.save.type, saveExpenseSaga);
}

function* saveExpenseSaga() {
    const date: ReturnType<typeof getExpenseDate> = yield select(getExpenseDate);
    const odometerState: ReturnType<typeof getExpenseOdometerState> = yield select(getExpenseOdometerState);
    const attachmentUrlList: ReturnType<typeof getExpenseAttachmentUrlList> = yield select(getExpenseAttachmentUrlList);
    const note: ReturnType<typeof getExpenseNote> = yield select(getExpenseNote);
    const lastSelectedOrFirstDeviceId: ReturnType<typeof getLastSelectedOrFirstDeviceId> = yield select(getLastSelectedOrFirstDeviceId);
    const expensePrice: ReturnType<typeof getExpensePrice> = yield select(getExpensePrice);
    const expenseTypeId: ReturnType<typeof getExpenseTypeId> = yield select(getExpenseTypeId);
    const expenseCategoryId: ReturnType<typeof getExpenseCategoryId> = yield select(getExpenseCategoryId);

    if (date === undefined || odometerState === undefined || lastSelectedOrFirstDeviceId === undefined || expensePrice === undefined) {
        return;
    }

    yield put(
        actions.expense.addExpense({
            id: getUUID(),
            deviceId: lastSelectedOrFirstDeviceId,
            expenseTypeId,
            expenseCategoryId,
            expensePrice,
            date,
            odometerValue: odometerState,
            attachmentUrlList,
            note,
        }),
    );

    yield put(actions.expense.reset());
}
