import { FunctionComponent, useEffect, useState } from "react";
import { DialogActions, DialogContent, DialogTitle, Button } from "@material-ui/core";

import { doNothing } from "../../utils";
import { TextField } from "../TextField";
import { Spacer } from "../Spacer";
import { Dialog } from "../Dialog";

export type TextFieldDialogProps = {
    title?: string,
    isOpened?: boolean,
    errorMessage?: string,
    value?: string,
    type?: "float" | "integer" | "text",
    label?: string,
    onConfirm: (text?: string) => void,
    onCancel?: (text?: string) => void,
}

export const TextFieldDialog: FunctionComponent<TextFieldDialogProps> = ({
    isOpened = true,
    value,
    onConfirm,
    onCancel,
    title,
    errorMessage,
    type,
    label,
}) => {
    const [temporaryErrorMessage, setTemporaryErrorMessage] = useState<string | undefined>(undefined);
    const [text, setText] = useState<string | undefined>(value);

    useEffect(() => {
        setTemporaryErrorMessage(errorMessage);
    }, [errorMessage]);

    const handleChange = (value: string) => {
        setTemporaryErrorMessage(undefined);
        setText(value);
    }

    const handleCancel = () => {
        onCancel ? onCancel(text) : doNothing();
    }

    const handleConfirm = () => {
        const trimmedValue = text?.trim();
        onConfirm(trimmedValue === "" ? undefined : text);
    }

    return (
        <Dialog
            onClose={() => onCancel ? onCancel(text) : {}}
            isOpened={isOpened}
        >
            {title ? (
                <DialogTitle>{title}</DialogTitle>
            ) : null}
            <DialogContent>
                <Spacer size={1} direction="column" />
                <TextField
                    isSelectAllOnFocusActive={true}
                    isAutofocusActive={true}
                    isFullWidth={true}
                    value={text}
                    onEnterPress={() => handleConfirm()}
                    onChange={handleChange}
                    errorMessage={temporaryErrorMessage}
                    {...{ type, label }}
                />
            </DialogContent>
            <DialogActions>
                {onCancel ? (
                    <Button onClick={handleCancel} color="primary">
                        Zrušit
                    </Button>
                ) : null}
                <Button onClick={handleConfirm} color="primary">
                    Zadat
                </Button>
            </DialogActions>
        </Dialog>
    );
};
