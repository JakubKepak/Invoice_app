import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Device } from "../../types";

type State = {
    list: Device[],
}

const initialState: State = {
    list: [
        {
            id: "1",
            name: "Dravec",
            spz: "5B7-8573",
            manufacturerId: "14",
            manufacturedYearMonthText: "2020/3",
            imageUrl: "https://1gr.cz/fotky/idnes/21/012/r7/FDV88aa39_skoda_roomster.jpeg",
            categoryId: "1",
            modelId: "7",
            vin: "12345678901234567",
            mainFuelId: "1",
            mainTankVolume: 40,
        },
        {
            id: "2",
            spz: "5A7-5218",
            manufacturerId: "14",
            manufacturedYearMonthText: "2013/5",
            imageUrl: "https://img.auto.cz/foto/skoda-bazar-mpv/NjkweDQyNS9jZW50ZXIvbWlkZGxlL3NtYXJ0L2ZpbHRlcnM6cXVhbGl0eSg4NSkvaW1n/4607650.jpg?st=5TXqdmzlUNbHMbAngZhm4hTPhFT7YQQ6lKadhwFNjNU&e=2145916800",
            categoryId: "1",
            modelId: "7",
            vin: "12345678901234567",
            mainFuelId: "2",
            secondaryFuelId: "1",
            mainTankVolume: 40,
            secondaryTankVolume: 30,
        },
        {
            id: "3",
            spz: "4B6-9641",
            manufacturerId: "14",
            manufacturedYearMonthText: "2012/1",
            imageUrl: "https://d15-a.sdn.cz/d_15/c_img_F_J/OF5hnY.jpeg?fl=cro,0,56,1280,720%7Cres,1200,,1%7Cwebp,75",
            categoryId: "1",
            modelId: "5",
            vin: "12345678901234567",
            mainFuelId: "2",
            mainTankVolume: 40,
        },
        {
            id: "4",
            name: "Kráska",
            spz: "5C9-8573",
            manufacturerId: "15",
            manufacturedYearMonthText: "2014/1",
            imageUrl: "https://www.midalu.eu/images/ctverec2.png",
            categoryId: "2",
            modelId: "8",
            vin: "12345678901234567",
            mainFuelId: "3",
            mainTankVolume: 40,
        },
    ],
};

export const deviceListSlice = createSlice({
    name: "deviceList",
    initialState,
    reducers: {
        setList: (state, action: PayloadAction<Device[]>) => { state.list = action.payload },
        add: (state, action: PayloadAction<Device>) => { state.list.push(action.payload) },
    },
});
