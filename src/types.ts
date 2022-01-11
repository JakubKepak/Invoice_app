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
    manufacturerId: string,
    categoryId?: string,
    spz?: string,
    manufacturedYearMonthText?: string,
    imageUrl?: string,
    modelId: string,
    vin: string,
    number?: string,
    motorization?: string,
    powerKw?: number,
    powerRPM?: number,
    fuelId?: string,
    firstRegistrationDate?: Date,
    acquisitionDate?: Date,
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
    mainFuelId: string,
    secondaryFuelId?: string,
    mainTankVolume: number,
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
    num_models: number,
    img_url: string,
    max_car_id: number,
    id: number,
    name: string,
    avg_horsepower: number,
    avg_price: number,
}

export type Unit = {
    id: string,
    abbreviation: string,
}

export type RecordType = "odometer" | "refueling" | "expense" | "fault" | "maintenance";

export type RecordData = {
    id: string,
    type: RecordType,
    date: Date,
    odometerValue: number,
    fuelAmountL?: number,
    fuelAbbreviation?: string,
    fuelPrice?: number,
    expenseCategory?: string,
    expenseType?: string,
    expensePrice?: number,
    variant: "note" | "warning",
    sortValue: number,
}

export type Record = {
    id: string,
    type: RecordType,
    title: string,
    subtitle: string | undefined,
    rightText: string | undefined,
    rightDescription: string | undefined,
    rightDescriptionVariant: "note" | "warning",
}

export type OdometerState = {
    id: string,
    deviceId: string,
    date: Date,
    value: number,
    attachmentUrlList: string[],
    note?: string,
}

export type NewDeviceErrorDataState = {
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

export type Refueling = {
    id: string,
    deviceId: string,
    fuelId: string,
    date: Date,
    odometerValue: number,
    attachmentUrlList: string[],
    note?: string,
    fuelAmountL: number,
    fuelPrice: number,
    fuelUnitPrice: number,
    isTankFull: boolean,
}

export type Expense = {
    id: string,
    deviceId: string,
    expenseTypeId: string,
    expenseCategoryId: string,
    expensePrice: number,
    date: Date,
    odometerValue: number,
    attachmentUrlList: string[],
    note?: string,
}

export type ExpenseTypeList = {
    id: string,
    name: string,
}

export type ExpenseCategoryList = {
    id: string,
    category: string,
    type: ExpenseTypeList[],
}

export type AddRefuelingPageId = "odometer" | "fuels" | "main-fuel" | "secondary-fuel";

export type AddExpensePageId = "category-selection" | "specification";

export type IconName =
    | "add"
    | "add-small"
    | "agendas"
    | "analytics"
    | "at"
    | "calendar"
    | "car"
    | "car-wide"
    | "cloud"
    | "expenses"
    | "fault"
    | "folder"
    | "chevron-right"
    | "list-wide"
    | "note"
    | "oil"
    | "parameters"
    | "password"
    | "plan"
    | "progress"
    | "project"
    | "refueling"
    | "servis"
    | "tachometer"
    | "user-wide";
