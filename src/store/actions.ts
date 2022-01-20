import { categorySlice } from "./category/slice";
import { coachbuilderSlice } from "./coachbuilder/coachbuilder";
import { deviceListSlice } from "./deviceList/deviceList";
import { fuelSlice } from "./fuel/fuel";
import { manufacturerSlice } from "./manufacturer/manufacturer";
import { modelSlice } from "./model/slice";
import { newDeviceSlice } from "./newDevice/slice";
import { odometerStateSlice } from "./odometer/slice";
import { refuelingSlice } from "./refueling/slice";
import { settingsSlice } from "./settings/slice";
import { unitSlice } from "./unit/slice";
import { userSlice } from "./user/slice";
import {expenseSlice} from "./expense/slice";

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
    settings: settingsSlice.actions,
    refueling: refuelingSlice.actions,
    odometerState: odometerStateSlice.actions,
    expense: expenseSlice.actions,
}
