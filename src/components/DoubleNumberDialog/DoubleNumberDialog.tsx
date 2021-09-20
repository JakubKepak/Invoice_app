import { FunctionComponent, useRef, useState } from "react";
import { DialogActions, DialogContent, DialogTitle, Button } from "@material-ui/core";

import { doNothing, parseFloatOrUndefined, valueOrUndefined } from "../../utils";
import { Spacer } from "../Spacer";
import { TextField } from "../TextField";
import { Dialog } from "../Dialog";

export type DoubleNumberDialogProps = {
    isOpened?: boolean,
    valueList: [number | undefined, number | undefined],
    labels: [string, string],
    title?: string,
    onConfirm: (firstValue?: number, secondValue?: number) => void,
    onCancel?: (firstValue?: number, secondValue?: number) => void,
}

export const DoubleNumberDialog: FunctionComponent<DoubleNumberDialogProps> = ({
    isOpened = true,
    valueList,
    labels,
    title,
    onConfirm,
    onCancel,
}) => {
    const [firstText, setFirstText] = useState<string | undefined>(valueList[0]?.toString());
    const [secondText, setSecondText] = useState<string | undefined>(valueList[1]?.toString());
    const [firstErrorMessage, setFirstErrorMessage] = useState<string | undefined>(undefined);
    const [secondErrorMessage, setSecondErrorMessage] = useState<string | undefined>(undefined);
    const secondInputRef = useRef<HTMLInputElement>(null);

    const handleFirstValueChange = (value: string) => {
        setFirstText(value)
    }

    const handleSecondValueChange = (value: string) => {
        setSecondText(value)
    }

    const handleCancel = () => {
        onCancel ? onCancel(textToNumber(firstText), textToNumber(secondText)) : doNothing();
    }

    const handleConfirm = () => {
        let isValid = true;
        setFirstErrorMessage(undefined);
        setSecondErrorMessage(undefined);
        if (valueOrUndefined(firstText) !== undefined) {
            if (textToNumber(firstText) === undefined) {
                isValid = false;
                setFirstErrorMessage("Zadejte číslo");
            }
        }
        if (valueOrUndefined(secondText) !== undefined) {
            if (textToNumber(secondText) === undefined) {
                isValid = false;
                setSecondErrorMessage("Zadejte číslo");
            }
        }
        if (isValid) {
            onConfirm(textToNumber(firstText), textToNumber(secondText));
        }
    }

    const textToNumber = (text?: string) => parseFloatOrUndefined(valueOrUndefined(text));

    return (
        <Dialog
            onClose={handleCancel}
            isOpened={isOpened}
        >
            {title ? (
                <DialogTitle>{title}</DialogTitle>
            ) : null}
            <DialogContent>
                <Spacer size={1} direction="column" />
                <TextField
                    errorMessage={firstErrorMessage}
                    onEnterPress={() => {
                        if (secondInputRef.current) {
                            secondInputRef.current.focus()
                        }
                    }}
                    isSelectAllOnFocusActive={true}
                    isAutofocusActive={true}
                    isFullWidth={true}
                    value={firstText}
                    type="float"
                    label={labels[0]}
                    onChange={handleFirstValueChange}
                />
                <Spacer size={2} direction="column" />
                <TextField
                    onEnterPress={() => handleConfirm()}
                    type="float"
                    ref={secondInputRef}
                    errorMessage={secondErrorMessage}
                    isFullWidth={true}
                    isSelectAllOnFocusActive={true}
                    value={secondText}
                    label={labels[1]}
                    onChange={handleSecondValueChange}
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
