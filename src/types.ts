export type Manufacturer = {
    id: string,
    name: string,
}

export type Category = {
    id: string,
    name: string,
}

export type Coachbuilder = {
    id: string,
    name: string,
}

export enum TransmissionType {
    Automatic = 0,
    Manual = 1,
    Permanent = 2,
}

export type Device = {
    id: string,
    name?: string,
    manufacturerId?: string,
    categoryId?: string,
    spz?: string,
    manufacturedYearMonthText?: string,
    imageUrl?: string,
    modelId?: string,
    vin?: string,
    number?: string;
    motorization?: string,
    powerKw?: number,
    powerRPM?: number,
    fuelId?: string,
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
    engineVolumeCcm?: number,
    torqueNm?: number,
    torqueRPM?: number,
    transmissionNumber?: number,
    transmissionType?: number,
    mainFuelId?: string,
    secondaryFuelId?: string,
    mainTankVolume?: number,
    secondaryTankVolume?: number,
    coachbuilderId?: string,
    colorText?: string,
}

export type Model = {
    id: string,
    name: string,
    manufacturerId: string,
}

export type Fuel = {
    id: string,
    name: string,
    unitId: string,
}

export type ManufacturerResponse = {
    "num_models": number,
    "img_url": string,
    "max_car_id": number,
    "id": number,
    "name": string,
    "avg_horsepower": number,
    "avg_price": number,
}



export type Unit = {
    id: string,
    abbreviation: string,
};
