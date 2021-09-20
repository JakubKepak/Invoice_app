import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TransmissionType } from "../../types";

import { doNothing, getToday, isDebug } from "../../utils";

export type ErrorDataState = {
    model?: string,
    manufacturer?: string,
    vin?: string,
    fuel?: string,
    mainTankVolume?: string,
    secondaryTankVolume?: string,
    initalDate?: string,
    initialOdometerState?: string,
    initialConsumption?: string,
    coachbuilder?: string,
}

type State = {
    vin?: string,
    categoryId?: string,
    name?: string,
    manufacturerId?: string,
    modelId?: string,
    spz?: string,
    manufacturedYearMonthText?: string,
    number?: string;
    motorization?: string,
    powerKw?: number,
    powerRPM?: number,
    mainFuelId?: string,
    secondaryFuelId?: string,
    firstRegistrationDate?: Date,
    acquisitionData?: Date,
    odometerValue?: number,
    guaranteeDate?: Date,
    guaranteeMonthCount?: number,
    guaranteeKm?: number,
    initalDate?: Date,
    initialOdometerState?: number,
    initialConsumption?: number,
    note?: string,
    attachmentUrlList?: string[],
    mainTankVolume?: number,
    secondaryTankVolume?: number,
    torqueNm?: number,
    torqueRPM?: number,
    transmissionType?: TransmissionType,
    transmissionNumber?: number,
    errorData: ErrorDataState,
    coachbuilderId?: string,
    colorText?: string,
    engineVolumeCcm?: number,
}

const debugInitialState: State = {
    categoryId: "1",
    errorData: {},
    vin: "TMBZZZAAZJD622775",
    manufacturerId: "14",
    modelId: "5",
    mainFuelId: "4",
    mainTankVolume: 55,
    initalDate: getToday(),
}

const initialState: State = {
    errorData: {},
    initalDate: getToday(),
};

export const newDeviceSlice = createSlice({
    name: "newDevice",
    initialState: isDebug ? debugInitialState : initialState,
    reducers: {
        setVin: (state, action: PayloadAction<string | undefined>) => {
            state.vin = action.payload;
        },
        setCategoryId: (state, action: PayloadAction<string | undefined>) => {
            state.categoryId = action.payload;
        },
        setName: (state, action: PayloadAction<string | undefined>) => {
            state.name = action.payload;
        },
        setManufacturerId: (state, action: PayloadAction<string | undefined>) => {
            state.manufacturerId = action.payload;
            state.modelId = undefined;
        },
        setModelId: (state, action: PayloadAction<string | undefined>) => {
            state.modelId = action.payload;
        },
        setSpz: (state, action: PayloadAction<string | undefined>) => {
            state.spz = action.payload;
        },
        setManufacturedYearMonthText: (state, action: PayloadAction<string | undefined>) => {
            state.manufacturedYearMonthText = action.payload;
        },
        setNumber: (state, action: PayloadAction<string | undefined>) => {
            state.number = action.payload;
        },
        setMotorization: (state, action: PayloadAction<string | undefined>) => {
            state.motorization = action.payload;
        },
        setPowerKw: (state, action: PayloadAction<number | undefined>) => {
            state.powerKw = action.payload;
        },
        setPowerRPM: (state, action: PayloadAction<number | undefined>) => {
            state.powerRPM = action.payload;
        },
        setMainFuelId: (state, action: PayloadAction<string | undefined>) => doNothing(),
        setSecondaryFuelId: (state, action: PayloadAction<string | undefined>) => doNothing(),
        _setMainFuelId: (state, action: PayloadAction<string | undefined>) => {
            state.mainFuelId = action.payload;
        },
        _setSecondaryFuelId: (state, action: PayloadAction<string | undefined>) => {
            state.secondaryFuelId = action.payload;
        },
        setFirstRegistrationData: (state, action: PayloadAction<Date | undefined>) => {
            state.firstRegistrationDate = action.payload;
        },
        setAcquisitionDate: (state, action: PayloadAction<Date | undefined>) => {
            state.acquisitionData = action.payload;
        },
        setOdometerValue: (state, action: PayloadAction<number | undefined>) => {
            state.odometerValue = action.payload;
        },
        setGuaranteeDate: (state, action: PayloadAction<Date | undefined>) => {
            state.guaranteeDate = action.payload;
        },
        setGuaranteeMonthCount: (state, action: PayloadAction<number | undefined>) => {
            state.guaranteeMonthCount = action.payload;
        },
        setGuaranteeKm: (state, action: PayloadAction<number | undefined>) => {
            state.guaranteeKm = action.payload;
        },
        setInitalDate: (state, action: PayloadAction<Date | undefined>) => {
            state.initalDate = action.payload;
        },
        setInitialOdometerState: (state, action: PayloadAction<number | undefined>) => {
            state.initialOdometerState = action.payload;
        },
        setInitialConsumption: (state, action: PayloadAction<number | undefined>) => {
            state.initialConsumption = action.payload;
        },
        setNote: (state, action: PayloadAction<string | undefined>) => {
            state.note = action.payload;
        },
        setAttachmentUrlList: (state, action: PayloadAction<string[] | undefined>) => {
            state.attachmentUrlList = action.payload;
        },
        addAttachmentUrl: (state, action: PayloadAction<string>) => {
            state.attachmentUrlList = [...state.attachmentUrlList ?? [], action.payload]
        },
        removeAttachmentUrl: (state, action: PayloadAction<string>) => {
            state.attachmentUrlList = state.attachmentUrlList?.filter((attachmentUrl) => attachmentUrl !== action.payload);
        },
        save: doNothing,
        clear: () => initialState,
        setVinError: (state, action: PayloadAction<string | undefined>) => {
            state.errorData.vin = action.payload;
        },
        setModelError: (state, action: PayloadAction<string | undefined>) => {
            state.errorData.model = action.payload;
        },
        setManufacturerError: (state, action: PayloadAction<string | undefined>) => {
            state.errorData.manufacturer = action.payload;
        },
        setInitalDateError: (state, action: PayloadAction<string | undefined>) => {
            state.errorData.initalDate = action.payload;
        },
        setInitialConsumptionError: (state, action: PayloadAction<string | undefined>) => {
            state.errorData.initialConsumption = action.payload;
        },
        setInitialOdometerStateError: (state, action: PayloadAction<string | undefined>) => {
            state.errorData.initialOdometerState = action.payload;
        },
        setMainTankVolumeError: (state, action: PayloadAction<string | undefined>) => {
            state.errorData.mainTankVolume = action.payload;
        },
        setSecondaryTankVolumeError: (state, action: PayloadAction<string | undefined>) => {
            state.errorData.secondaryTankVolume = action.payload;
        },
        setFuelError: (state, action: PayloadAction<string | undefined>) => {
            state.errorData.fuel = action.payload;
        },
        setMainTankVolume: (state, action: PayloadAction<number | undefined>) => {
            state.mainTankVolume = action.payload;
        },
        setSecondaryTankVolume: (state, action: PayloadAction<number | undefined>) => {
            state.secondaryTankVolume = action.payload;
        },
        setTorqueNm: (state, action: PayloadAction<number | undefined>) => {
            state.torqueNm = action.payload;
        },
        setTorqueRPM: (state, action: PayloadAction<number | undefined>) => {
            state.torqueRPM = action.payload;
        },
        setTransmissionType: (state, action: PayloadAction<TransmissionType | undefined>) => {
            state.transmissionType = action.payload;
        },
        setTransmissionNumber: (state, action: PayloadAction<number | undefined>) => {
            state.transmissionNumber = action.payload;
        },
        setCoachbuilderId: (state, action: PayloadAction<string | undefined>) => {
            state.coachbuilderId = action.payload;
        },
        setCoachbuilderError: (state, action: PayloadAction<string | undefined>) => {
            state.errorData.coachbuilder = action.payload;
        },
        setColorText: (state, action: PayloadAction<string | undefined>) => {
            state.colorText = action.payload;
        },
        setEngineVolumeCcm: (state, action: PayloadAction<number | undefined>) => {
            state.engineVolumeCcm = action.payload;
        },
    },
});
