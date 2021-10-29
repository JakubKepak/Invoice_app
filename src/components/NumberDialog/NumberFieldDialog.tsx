import { FunctionComponent } from "react";

import { parseFloatOrUndefined, parseIntOrUndefined } from "../../utils";
import { TextFieldDialog } from "../TextFieldDialog";

export type NumberFieldDialogProps = {
    title?: string,
    isOpened?: boolean,
    errorMessage?: string,
    value: number | undefined,
    type: "float" | "integer",
    label?: string,
    onConfirm: (value: number | undefined) => void,
    onCancel?: () => void,
}

export const NumberFieldDialog: FunctionComponent<NumberFieldDialogProps> = ({
    title,
    isOpened = true,
    errorMessage,
    value,
    type,
    label,
    onConfirm,
    onCancel,
}) => (
    <TextFieldDialog
        defaultValue={value?.toString().replace(".", ",")}
        onConfirm={(value) => {
            if (value === undefined) {
                onConfirm(value);
                return;
            }
            const number = type === "float" ? parseFloatOrUndefined(value) : parseIntOrUndefined(value);
            onConfirm(number);
        }}
        {...{ type, label, title, isOpened, errorMessage, onCancel }}
    />
);
