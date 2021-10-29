export type SearchProps<T> = {
    list: T[],
    onSelect: (value: T | undefined) => void,
    title: string,
    isSearchActive: boolean,
    orderType?: "none" | "asc" | "desc",
}
