import { FunctionComponent, ReactElement, useState } from "react";

export type BooleanStateChildrenProps = {
    isEnabled: boolean,
    setIsEnabled: (value: boolean) => void,
    toggle: () => void,
    enable: () => void,
    disable: () => void,
}

export type BooleanStateProps = {
    children: (props: BooleanStateChildrenProps) => ReactElement,
}

export const BooleanState: FunctionComponent<BooleanStateProps> = ({ children }) => {
    const [isEnabled, setIsEnabled] = useState(false);

    const enable = () => setIsEnabled(true);

    const disable = () => setIsEnabled(false);

    const toggle = () => setIsEnabled((value) => !value);

    return children({ isEnabled, setIsEnabled, enable, disable, toggle });
}
