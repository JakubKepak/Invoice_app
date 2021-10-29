import { FunctionComponent } from "react"
import { Box, Grid } from "@material-ui/core";

import { strings } from "../../strings";
import { OnConfirmNumberDialog } from "../../utils"
import { Amount } from "../Amount";
import { LineButton } from "../LineButton";
import { Unplugger } from "../Unplugger";
import { NumberFieldDialog } from "../NumberDialog";
import { BooleanState } from "../BooleanState";
import { ErrorMessage } from "../ErrorMessage";
import { StringState } from "../StringState";
import { useStyles } from "./utils";

export type AmountLineProps = {
    label: string,
    value: number | undefined,
    unit: string,
    title: string,
    errorMessage?: string,
    maxValue?: number,
    onConfirm: ({ value, closeDialog, setDialogErrorMessage }: OnConfirmNumberDialog) => void,
}

export const AmountLine: FunctionComponent<AmountLineProps> = ({ label, value, unit, title, onConfirm, maxValue, errorMessage }) => {
    const classes = useStyles();

    return (
        <BooleanState>
            {({ isEnabled: isDialogOpened, disable: closeDialog, enable: openDialog }) => (
                <>
                    <Grid
                        container={true}
                        direction="row"
                        alignItems="center"
                        className={classes.root}
                        onClick={openDialog}
                    >
                        <Box flex={1}>
                            <Amount
                                label={title}
                                {...{ value, unit }}
                            />

                        </Box>
                        <Box>
                            <LineButton text={strings.give} visualVariant="clickable" />
                            {errorMessage ? (
                                <Box className={classes.error}>
                                    <ErrorMessage text={errorMessage} />
                                </Box>
                            ) : null}
                        </Box>
                    </Grid>
                    <Unplugger isPlugged={isDialogOpened}>
                        <StringState>
                            {({ value: dialogErrorMessage, setValue: setDialogErrorMessage }) => (
                                <NumberFieldDialog
                                    type="float"
                                    onConfirm={(value) => onConfirm({ value, closeDialog, setDialogErrorMessage })}
                                    value={value ?? maxValue}
                                    onCancel={closeDialog}
                                    errorMessage={dialogErrorMessage}
                                    {...{ label, title }}
                                />
                            )}
                        </StringState>
                    </Unplugger>
                </>
            )}
        </BooleanState>
    );
};
