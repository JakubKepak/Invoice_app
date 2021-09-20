import { useSelector } from "react-redux";

import { RootState } from "../store";

export const doNothing = () => { };

export function useRootSelector<T>(selector: (state: RootState) => T) {
    return useSelector<RootState, T>(selector);
};

export const createRange = (count: number) => Array.from(Array(count).keys());

export const createPluralGetter = (
    strings: { one: string, few: string, other: string },
) => (number: number | undefined): string => {
    switch (number) {
        case 1:
            return strings.one;
        case 2:
        case 3:
        case 4:
            return strings.few;
        default:
            return strings.other;
    }
}
