import { add, format } from "date-fns";
import czechLocale from "date-fns/locale/cs";

export const getCurrentYear = () => new Date().getFullYear()

export const getToday = () => new Date();

export const createYearMonth = (year: number, month: number) => new Date(year, month, 0, 0, 0, 0, 0);

export const dateToYearMonthText = (date?: Date): string | undefined => date === undefined ? undefined : `${date.getFullYear()}/${date.getMonth() + 1}`;

export const yearMonthTextToDate = (yearMonthText?: string): Date | undefined => {
    const values = yearMonthText?.split("/");

    if (values === undefined) {
        return undefined;
    }

    const [yearText, monthText] = values;

    if (yearText === undefined || monthText === undefined) {
        return undefined;
    }

    const year = Number.parseInt(yearText, 10);
    const month = Number.parseInt(monthText, 10);

    if (Number.isNaN(year) || Number.isNaN(month)) {
        return undefined;
    }

    if (year < 0 || month < 1 || month > 12) {
        return undefined;
    }

    return new Date(year, month - 1);
}

export const formatYearMonthDate = (yearMonthDate?: Date): string | undefined => {
    if (yearMonthDate === undefined) {
        return undefined;
    }

    return format(yearMonthDate, "LLLL Y", { locale: czechLocale });
}

export const formatYearMonthText = (yearMonthText?: string): string | undefined => {
    const date = yearMonthTextToDate(yearMonthText);

    if (date === undefined) {
        return undefined;
    }

    return formatYearMonthDate(date);
}

export const addMonths = (date: Date, monthCount: number) => add(date, { months: monthCount });

export const addDays = (date: Date, dayCount: number) => add(date, { days: dayCount });
