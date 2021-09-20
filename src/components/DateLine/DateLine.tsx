import { FunctionComponent } from "react";

import { strings } from "../../strings";
import { formatDate } from "../../utils";
import { DatePickerProvider } from "../DatePickerProvider";
import { TextLine } from "../TextLine";

type OnConfirm = {
    value?: Date,
}

export type DateLineProps = {
    title: string,
    description?: string,
    defaultValue?: Date,
    type?: "yearMonth",
    errorMessage?: string,
    formatter?: (date?: Date) => string | undefined,
    onConfirm: ({ value }: OnConfirm) => void,
}

export const DateLine: FunctionComponent<DateLineProps> = ({
    title,
    defaultValue,
    onConfirm,
    description,
    type,
    formatter,
    errorMessage,
}) => {
    const rightText = formatter !== undefined ? formatter(defaultValue) : formatDate(defaultValue);

    return (
        <DatePickerProvider
            value={defaultValue}
            onChange={(value) => onConfirm({ value })}
            type={type}
        >
            {({ onClick }) => (
                <TextLine
                    rightText={rightText ?? strings.select}
                    {...{ errorMessage, title, description, onClick }}
                />
            )}
        </DatePickerProvider>
    );
};
