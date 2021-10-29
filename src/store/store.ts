import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";

import { saga } from "./saga";
import { userSlice } from "./user/slice";
import { newDeviceSlice } from "./newDevice/slice";
import { categorySlice } from "./category/slice";
import { manufacturerSlice } from "./manufacturer/manufacturer";
import { deviceListSlice } from "./deviceList/deviceList";
import { modelSlice } from "./model/slice";
import { fuelSlice } from "./fuel/fuel";
import { coachbuilderSlice } from "./coachbuilder/coachbuilder";
import { unitSlice } from "./unit/slice";
import { settingsSlice } from "./settings/slice";
import { refuelingSlice } from "./refueling/slice";
import { odometerStateSlice } from "./odometer/slice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        newDevice: newDeviceSlice.reducer,
        category: categorySlice.reducer,
        manufacturer: manufacturerSlice.reducer,
        deviceList: deviceListSlice.reducer,
        model: modelSlice.reducer,
        fuel: fuelSlice.reducer,
        coachbuilder: coachbuilderSlice.reducer,
        unit: unitSlice.reducer,
        settings: settingsSlice.reducer,
        refueling: refuelingSlice.reducer,
        odometerState: odometerStateSlice.reducer,
    },
    middleware: (getDefaultMiddleWare) => getDefaultMiddleWare({ thunk: false })
        .concat(sagaMiddleware)
        .concat(createLogger({
            collapsed: true,
        })),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

sagaMiddleware.run(saga);
