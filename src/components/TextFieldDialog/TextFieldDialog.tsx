import { FunctionComponent, useEffect, useState } from "react";
import { DialogActions, DialogContent, DialogTitle, Button } from "@material-ui/core";

import { doNothing } from "../../utils";
import { strings } from "../../strings";
import { TextField } from "../TextField";
import { Spacer } from "../Spacer";
import { Dialog } from "../Dialog";

export type TextFieldDialogProps = {
    title?: string,
    isOpened?: boolean,
    errorMessage?: string,
    defaultValue?: string,
    type?: "float" | "integer" | "text",
    label?: string,
    onConfirm: (text?: string) => void,
    onCancel?: (text?: string) => void,
}

/**
 * Dialog pro zadávání textové hodnoty.
 * Hodnota se před uložením ořízne o počáteční a koncové bílé znaky.
 * V případě, že je výsledná hodnota prázdný řetězec, se hodnota při potvrzení považuje za _undefined_.
 * Dialog může zobrazovat chybovou hlášku, která je po úpravě hodnoty skryta.
 */
export const TextFieldDialog: FunctionComponent<TextFieldDialogProps> = ({
    isOpened = true,
    defaultValue,
    onConfirm,
    onCancel,
    title,
    errorMessage,
    type = "text",
    label,
}) => {
    const [isErrorMessageVisible, setIsErrorMessageVisible] = useState(false);
    const [value, setValue] = useState<string | undefined>(defaultValue);

    useEffect(() => {
        // Při aktualizaci chybové hlášky je hláška opět zobrazena, pokud není prázdná
        setIsErrorMessageVisible(errorMessage !== undefined);
    }, [errorMessage]);

    const handleChange = (value: string) => {
        // Skrytí chybové zprávy po úpravě hodnoty
        setIsErrorMessageVisible(false);
        setValue(value);
    }

    const handleCancel = () => {
        onCancel ? onCancel(value) : doNothing();
    }

    const handleConfirm = () => {
        const trimmedValue = value?.trim();
        onConfirm(trimmedValue === "" ? undefined : value);
        setIsErrorMessageVisible(true);
    }

    return (
        <Dialog
            onClose={handleCancel}
            {...{ isOpened }}
        >
            {title ? (
                <DialogTitle>
                    {title}
                </DialogTitle>
            ) : null}
            <DialogContent>
                <Spacer size={1} direction="column" />
                <TextField
                    isSelectAllOnFocusActive={true}
                    isAutofocusActive={true}
                    isFullWidth={true}
                    onEnterPress={handleConfirm}
                    onChange={handleChange}
                    errorMessage={isErrorMessageVisible ? errorMessage : undefined}
                    {...{ type, label, value }}
                />
            </DialogContent>
            <DialogActions>
                {onCancel ? (
                    <Button onClick={handleCancel} color="primary">
                        {strings.cancel}
                    </Button>
                ) : null}
                <Button onClick={handleConfirm} color="primary">
                    {strings.give}
                </Button>
            </DialogActions>
        </Dialog>
    );
};
