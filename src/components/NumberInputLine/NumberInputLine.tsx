import { FunctionComponent, useState } from "react";

import { strings } from "../../strings";
import { parseFloatOrUndefined, parseIntOrUndefined } from "../../utils";
import { TextFieldDialog } from "../TextFieldDialog";
import { TextLine } from "../TextLine";
import { Unplugger } from "../Unplugger";

type OnConfirm = {
    value?: number,
    closeDialog: () => void,
    setErrorMessage: (errorMessage: string) => void,
}

export type NumberInputLineProps = {
    title: string,
    value?: number,
    errorMessage?: string,
    description?: string,
    type: "float" | "integer",
    label: string,
    formatter?: (value?: number) => string | undefined,
    onConfirm: ({ value, closeDialog, setErrorMessage }: OnConfirm) => void,
}

export const NumberInputLine: FunctionComponent<NumberInputLineProps> = ({
    title,
    value,
    onConfirm,
    formatter,
    errorMessage,
    description,
    type,
    label,
}) => {
    const [isDialogOpened, setIsDialogOpened] = useState(false);
    const [dialogErrorMessage, setDialogErrorMessage] = useState<string | undefined>(undefined);

    const closeDialog = () => setIsDialogOpened(false);

    return (
        <>
            <TextLine
                rightText={(formatter ? formatter(value) : value?.toString()) ?? strings.give}
                onClick={() => setIsDialogOpened(true)}
                {...{ title, description, errorMessage }}
            />
            <Unplugger isPlugged={isDialogOpened}>
                <TextFieldDialog
                    errorMessage={dialogErrorMessage}
                    value={value?.toString().replace(".", ",")}
                    onConfirm={(value) => {
                        setDialogErrorMessage(undefined);
                        if (value === undefined) {
                            onConfirm({ value, closeDialog, setErrorMessage: setDialogErrorMessage });
                            return;
                        }
                        const number = type === "float" ? parseFloatOrUndefined(value) : parseIntOrUndefined(value);
                        if (number === undefined) {
                            setDialogErrorMessage("Zadejte číselnou hodnotu");
                            return;
                        }
                        onConfirm({ value: number, closeDialog, setErrorMessage: setDialogErrorMessage });
                    }}
                    onCancel={() => {
                        closeDialog();
                        setDialogErrorMessage(undefined);
                    }}
                    {...{ type, label }}
                />
            </Unplugger>
        </>
    );
};
