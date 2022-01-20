import { RootState } from '../store'

const getDeviceListState = (state: RootState) => state.deviceList

const getDeviceList = (state: RootState) => getDeviceListState(state).list

export const getDevice = (state: RootState, id: string | undefined) =>
    getDeviceList(state).find((device) => device.id === id)

export const getDeviceIdList = (state: RootState) =>
    getDeviceList(state).map((device) => device.id)

export const getFirstDevice = (state: RootState) => getDeviceIdList(state)[0]

export const getDeviceFuelCount = (
    state: RootState,
    id: string | undefined
): number => {
    if (id === undefined) {
        return 0
    }

    const device = getDevice(state, id)

    if (device === undefined) {
        return 0
    }

    return [device.mainFuelId, device.secondaryFuelId].filter(
        (fuelId) => fuelId !== undefined
    ).length
}
