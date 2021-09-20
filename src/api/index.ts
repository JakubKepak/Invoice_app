import axios, { AxiosResponse } from "axios";

import { ManufacturerResponse } from "../types";
import { createAxiosResponse } from "../utils";
import { MANUFACTURER_LIST_URL } from "./constants";

export const getManufacturerList = () => axios.get<ManufacturerResponse[]>(MANUFACTURER_LIST_URL);

const userData = {
    id: 12,
    telefon: "+123 456 789 012",
    usedStorageMb: 49.5,
    storageCapacityMb: 150,
    name: "Karel",
    surname: "Nový",
    createdDate: Date(),
    loggedHash: "123465",
}

export const getUser = (email?: string, password?: string): AxiosResponse<typeof userData | undefined> => {
    if (email === "admin" && password === "admin") {
        return createAxiosResponse(userData, "OK", 200);
    } else {
        return createAxiosResponse(undefined, "Neexistující účet", 404);
    }
};
