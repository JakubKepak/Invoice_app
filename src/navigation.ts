import {AddExpensePageId, AddRefuelingPageId} from "./types";

export type AddRefuelingPage = {
    id: AddRefuelingPageId,
    address: string,
    title: string,
}

export type AddExpensePage = {
    id: AddExpensePageId,
    address: string,
    title: string,
}

export const addRefuelingPageMap: { [id in AddRefuelingPageId]: AddRefuelingPage } = {
    "odometer": { id: "odometer", address: "tachometr", title: "Tachometr" },
    "fuels": { id: "fuels", address: "paliva", title: "Paliva" },
    "main-fuel": { id: "main-fuel", address: "hlavni-palivo", title: "Hlavní palivo" },
    "secondary-fuel": { id: "secondary-fuel", address: "sekundarni-palivo", title: "Sekundární palivo" },
};

export const addExpensePageMap: { [id in AddExpensePageId]: AddExpensePage } = {
    "category-selection": { id: "category-selection", address: "kategorie", title: "Kategorie" },
    "specification": { id: "specification", address: "specifikace", title: "Specifikace" }
};


export const addRefuelingPageList = Object.values(addRefuelingPageMap);
export const addExpensePageList = Object.values(addExpensePageMap);