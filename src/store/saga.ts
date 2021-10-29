import { all } from "redux-saga/effects";

import { manufacturerSaga } from "./manufacturer/saga";
import { userSaga } from "./user/saga";
import { newDeviceSaga } from "./newDevice/saga";
import { odometerSaga } from "./odometer/saga";
import { refuelingSaga } from "./refueling/saga";

export function* saga() {
    yield all([
        manufacturerSaga(),
        newDeviceSaga(),
        odometerSaga(),
        refuelingSaga(),
        userSaga(),
    ]);
}
