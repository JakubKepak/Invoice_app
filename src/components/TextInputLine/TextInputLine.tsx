import { FunctionComponent, useState } from "react";

import { strings } from "../../strings";
import { TextFieldDialog } from "../TextFieldDialog";
import { TextLine } from "../TextLine";
import { Unplugger } from "../Unplugger";

type OnConfirm = {
    value?: string,
    closeDialog: () => void,
    setErrorMessage: (errorMessage: string) => void,
}

export type TextInputLineProps = {
    title: string,
    value?: string,
    errorMessage?: string,
    onConfirm: ({ value, closeDialog, setErrorMessage }: OnConfirm) => void,
}

export const TextInputLine: FunctionComponent<TextInputLineProps> = ({ title, value, errorMessage, onConfirm }) => {
    const [isDialogOpened, setIsDialogOpened] = useState(false);
    const [dialogErrorMessage, setDialogErrorMessage] = useState<string | undefined>(undefined);

    const closeDialog = () => setIsDialogOpened(false);

    return (
        <>
            <TextLine
                title={title}
                rightText={value ?? strings.give}
                onClick={() => setIsDialogOpened(true)}
                errorMessage={errorMessage}
            />
            <Unplugger isPlugged={isDialogOpened}>
                <TextFieldDialog
                    errorMessage={dialogErrorMessage}
                    onConfirm={(value) => onConfirm({ value, closeDialog, setErrorMessage: setDialogErrorMessage })}
                    onCancel={closeDialog}
                    label={title}
                    {...{ value }}
                />
            </Unplugger>
        </>
    );
};
