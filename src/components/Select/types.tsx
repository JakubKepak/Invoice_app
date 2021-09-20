export type SelectItem<T> = {
    title: string,
    payload: T,
}

export type SelectProps<T> = {
    value: T | undefined;
    selectItemList: SelectItem<T>[];
    label?: string,
    onChange: (value: T | undefined) => void;
    isFullWidth?: boolean,
}
