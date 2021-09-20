import { ReactElement, useState } from "react";
import { DialogActions, DialogContent, DialogTitle, Button } from "@material-ui/core";

import { Spacer } from "../Spacer";
import { Select, SelectItem } from "../Select";
import { Dialog } from "../Dialog";

export type DoubleSelectDialogProps<F, S> = {
    isOpened?: boolean,
    valueList: [F | undefined, S | undefined],
    labels: [string, string],
    title?: string,
    firstSelectItemList: SelectItem<F>[],
    secondSelectItemList: SelectItem<S>[],
    onConfirm: (first: F | undefined, second: S | undefined) => void,
    onCancel?: () => void,
}

export function DoubleSelectDialog<F, S>({
    isOpened = true,
    valueList,
    labels,
    title,
    firstSelectItemList,
    secondSelectItemList,
    onConfirm,
    onCancel,
}: DoubleSelectDialogProps<F, S>): ReactElement {
    const [first, setFirst] = useState<F | undefined>(valueList[0]);
    const [second, setSecond] = useState<S | undefined>(valueList[1]);

    return (
        <Dialog
            onClose={() => onCancel ? onCancel() : undefined}
            isOpened={isOpened}
        >
            {title ? (
                <DialogTitle>{title}</DialogTitle>
            ) : null}
            <DialogContent>
                <Spacer size={1} direction="column" />
                <Select<F>
                    isFullWidth={true}
                    label={labels[0]}
                    value={first}
                    selectItemList={firstSelectItemList}
                    onChange={(item) => setFirst(item)}
                />
                <Spacer size={2} direction="column" />
                <Select<S>
                    isFullWidth={true}
                    label={labels[1]}
                    value={second}
                    selectItemList={secondSelectItemList}
                    onChange={(item) => setSecond(item)}
                />
            </DialogContent>
            <DialogActions>
                {onCancel ? (
                    <Button
                        onClick={onCancel ? () => onCancel() : undefined}
                        color="primary"
                    >
                        Zrušit
                    </Button>
                ) : null}
                <Button
                    onClick={() => onConfirm(first, second)}
                    color="primary"
                >
                    Zadat
                </Button>
            </DialogActions>
        </Dialog>
    );
};
