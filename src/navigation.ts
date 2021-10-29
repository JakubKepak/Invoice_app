import { AddRefuelingPageId } from "./types";

export type AddRefuelingPage = {
    id: AddRefuelingPageId,
    address: string,
    title: string,
}

export const addRefuelingPageMap: { [id in AddRefuelingPageId]: AddRefuelingPage } = {
    "odometer": { id: "odometer", address: "tachometr", title: "Tachometr" },
    "fuels": { id: "fuels", address: "paliva", title: "Paliva" },
    "main-fuel": { id: "main-fuel", address: "hlavni-palivo", title: "Hlavní palivo" },
    "secondary-fuel": { id: "secondary-fuel", address: "sekundarni-palivo", title: "Sekundární palivo" },
};

export const addRefuelingPageList = Object.values(addRefuelingPageMap);
