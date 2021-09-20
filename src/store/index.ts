import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";

import {
    categorySlice,
    deviceListSlice,
    manufacturerSlice,
    newDeviceSlice,
    userSlice,
    modelSlice,
    fuelSlice,
    coachbuilderSlice,
    unitSlice,
} from "./slices";
import { saga } from "./saga";

const sagaMiddleware = createSagaMiddleware();

export * from "./selectors";
export * from "./data";
export type { ErrorDataState } from "./slices";

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
    },
    middleware: (getDefaultMiddleWare) => getDefaultMiddleWare({ thunk: false })
        .concat(sagaMiddleware)
        .concat(createLogger({
            collapsed: true,
        })),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const actions = {
    user: userSlice.actions,
    newDevice: newDeviceSlice.actions,
    category: categorySlice.actions,
    manufacturer: manufacturerSlice.actions,
    deviceList: deviceListSlice.actions,
    model: modelSlice.actions,
    fuel: fuelSlice.actions,
    coachbuilder: coachbuilderSlice.actions,
    unit: unitSlice.actions,
}

sagaMiddleware.run(saga);
