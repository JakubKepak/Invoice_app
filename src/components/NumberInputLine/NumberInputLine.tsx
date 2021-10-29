import { FunctionComponent } from "react";

import { strings } from "../../strings";
import { OnConfirmNumberDialog } from "../../utils";
import { NumberFieldDialog } from "../NumberDialog";
import { TextLine } from "../TextLine";
import { Unplugger } from "../Unplugger";
import { BooleanState } from "../BooleanState";
import { StringState } from "../StringState";

export type NumberInputLineProps = {
    title: string,
    value: number | undefined,
    errorMessage?: string,
    description?: string,
    type: "float" | "integer",
    label: string,
    formatter?: (value: number | undefined) => string | undefined,
    onConfirm: ({ value, closeDialog, setDialogErrorMessage }: OnConfirmNumberDialog) => void,
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
}) => (
    <BooleanState>
        {({ isEnabled: isDialogOpened, disable: closeDialog, enable: openDialog }) => (
            <>
                <TextLine
                    rightText={(formatter ? formatter(value) : value?.toString()) ?? strings.give}
                    onClick={openDialog}
                    {...{ title, description, errorMessage }}
                />
                <Unplugger isPlugged={isDialogOpened}>
                    <StringState>
                        {({ value: dialogErrorMessage, setValue: setDialogErrorMessage }) => (
                            <NumberFieldDialog
                                onConfirm={(value) => onConfirm({ value, closeDialog, setDialogErrorMessage })}
                                errorMessage={dialogErrorMessage}
                                onCancel={closeDialog}
                                {...{ type, label, title, value }}
                            />
                        )}
                    </StringState>
                </Unplugger>
            </>
        )}
    </BooleanState>
);
