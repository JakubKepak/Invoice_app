import { FunctionComponent, ReactElement, useState } from "react";

export type StringStateChildrenProps = {
    value: string | undefined,
    setValue: (value: string | undefined) => void,
}

export type StringStateProps = {
    children: (props: StringStateChildrenProps) => ReactElement,
}

export const StringState: FunctionComponent<StringStateProps> = ({ children }) => {
    const [value, setValue] = useState<string | undefined>(undefined);

    return children({ value, setValue });
}
