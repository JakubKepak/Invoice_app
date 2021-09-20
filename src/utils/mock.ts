import { AxiosResponse } from "axios";

export function createAxiosResponse<T>(data: T, message: string, statusCode: number): AxiosResponse<T> {
    return {
        data,
        status: statusCode,
        statusText: message,
        headers: {},
        config: {},
    }
}
