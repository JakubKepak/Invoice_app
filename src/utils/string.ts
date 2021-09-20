export const valueOrUndefined = (text?: string): string | undefined => {
    if (text === undefined) {
        return undefined;
    }
    if (text.trim().length === 0) {
        return undefined;
    }
    return text;
}

export const looseCapitalize = (text: string) => {
    if (text.length < 2) {
        return text.toUpperCase();
    }
    return text.charAt(0).toUpperCase() + text.slice(1);
}

export const strictCapitalize = (text: string) => {
    if (text.length < 2) {
        return text.toUpperCase();
    }
    return text.charAt(0).toUpperCase() + text.slice(1).toLocaleLowerCase();
}

export const toAscii = (text: string) => text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

export const getIsTextUppercased = (text: string) => text.toUpperCase() === text;

export const getLowerCasedNotAbbreviation = (text: string) => getIsTextUppercased(text) ? text : text.toLocaleLowerCase();
