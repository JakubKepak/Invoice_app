import { FunctionComponent } from "react";

import { strings } from "../../strings";
import { TextFieldDialog } from "../TextFieldDialog";
import { TextLine } from "../TextLine";
import { Unplugger } from "../Unplugger";
import { BooleanState } from "../BooleanState";
import { StringState } from "../StringState";

type OnConfirmDialog = {
    value?: string,
    closeDialog: () => void,
    setErrorMessage: (errorMessage: string) => void,
}

export type TextInputLineProps = {
    title: string,
    value?: string,
    errorMessage?: string,
    onConfirm: ({ value, closeDialog, setErrorMessage }: OnConfirmDialog) => void,
}

export const TextInputLine: FunctionComponent<TextInputLineProps> = ({ title, value, errorMessage, onConfirm }) => (
    <BooleanState>
        {({ isEnabled: isDialogOpened, enable: openDialog, disable: closeDialog }) => (
            <>
                <TextLine
                    title={title}
                    rightText={value ?? strings.give}
                    onClick={openDialog}
                    errorMessage={errorMessage}
                />
                <Unplugger isPlugged={isDialogOpened}>
                    <StringState>
                        {({ value: dialogErrorMessage, setValue: setDialogErrorMessage }) => (
                            <TextFieldDialog
                                errorMessage={dialogErrorMessage}
                                onConfirm={(value) => onConfirm({ value, closeDialog, setErrorMessage: setDialogErrorMessage })}
                                onCancel={closeDialog}
                                label={title}
                                {...{ defaultValue: value }}
                            />
                        )}
                    </StringState>
                </Unplugger>
            </>
        )}
    </BooleanState>
);
