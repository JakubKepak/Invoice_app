export const round = (value: number | undefined, digits: number) => {
    if (value === undefined) {
        return undefined;
    }
    const result = parseFloat(value.toFixed(digits));
    if (Number.isNaN(result)) {
        return undefined;
    }
    return result
}

export const maxOrUndefined = (a: number | undefined, b: number | undefined): number | undefined => {
    if (a === undefined) {
        return b;
    }
    if (b === undefined) {
        return a;
    }
    return Math.max(a, b);
}
