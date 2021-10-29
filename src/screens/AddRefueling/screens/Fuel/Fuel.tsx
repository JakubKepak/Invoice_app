import { Box, Button, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid } from "@material-ui/core";
import { FunctionComponent, useState } from "react";

import { NavigationButtons, PageTitle, Spacer, Delimiter, AmountLine } from "../../../../components";
import { Dialog } from "../../../../components/Dialog";
import { strings } from "../../../../strings";
import { useNavigate } from "../../../../utils";
import { SelectedDeviceDisabledLine } from "../../components";
import { useStyles } from "./utils";

export type AlertDialogProps = {
    isOpened: boolean,
    title: string,
    message: string,
    onPositiveButtonClick: () => void,
    onNegativeButtonClick: () => void,
}

export const AlertDialog: FunctionComponent<AlertDialogProps> = ({
    isOpened,
    title,
    message,
    onPositiveButtonClick,
    onNegativeButtonClick,
}) => {
    return (
        <Dialog
            onClose={onNegativeButtonClick}
            {...{ isOpened }}
        >
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {message}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={onNegativeButtonClick}
                    color="primary"
                >
                    Ne
                </Button>
                <Button
                    autoFocus={true}
                    onClick={onPositiveButtonClick}
                    color="primary">
                    Ano
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export type FuelProps = {
    title: string,
    onNextClick: () => void,
    amount: number | undefined,
    unitPrice: number | undefined,
    price: number | undefined,
    onAmountChange: (value: number | undefined) => void,
    onPriceChange: (value: number | undefined) => void,
    onUnitPriceChange: (value: number | undefined) => void,
    nextText: string,
    amountErrorMessage: string | undefined,
    priceErrorMessage: string | undefined,
    unitPriceErrorMessage: string | undefined,
    maxAmount: number,
    onIsFullTankSelected: (isFullTank: boolean) => void,
}

export const Fuel: FunctionComponent<FuelProps> = ({
    title,
    onNextClick,
    amount,
    unitPrice,
    price,
    onAmountChange,
    onPriceChange,
    onUnitPriceChange,
    nextText,
    amountErrorMessage,
    priceErrorMessage,
    unitPriceErrorMessage,
    maxAmount,
    onIsFullTankSelected,
}) => {
    const classes = useStyles();
    const { goBack } = useNavigate();
    const [isFullTankDialogVisible, setIsFullTankDialogVisible] = useState(false);

    return (
        <Box className={classes.root}>
            <Grid className={classes.page}>
                <SelectedDeviceDisabledLine />
                <PageTitle text={title} />
                <Spacer size={2} direction="column" />
                <AmountLine
                    title="Objem"
                    unit="l"
                    label="Natankovaný objem v litrech"
                    value={amount}
                    maxValue={maxAmount}
                    onConfirm={({ value, setDialogErrorMessage, closeDialog }) => {
                        if (value === undefined) {
                            onAmountChange(value);
                            closeDialog();
                            return;
                        }
                        if (value > maxAmount) {
                            setDialogErrorMessage("Musí být menší než kapacita nádrže");
                            return;
                        }
                        onAmountChange(value);
                        closeDialog();
                        setIsFullTankDialogVisible(true);
                    }}
                    errorMessage={amountErrorMessage}
                />
                <Spacer size={2} direction="column" />
                <Delimiter />
                <Spacer size={2} direction="column" />
                <AmountLine
                    title="Cena celkem"
                    unit="Kč"
                    label="Celková cena v Kč"
                    value={price}
                    onConfirm={({ value, closeDialog }) => {
                        onPriceChange(value);
                        closeDialog();
                    }}
                    errorMessage={priceErrorMessage}
                />
                <Spacer size={2} direction="column" />
                <Delimiter />
                <Spacer size={2} direction="column" />
                <AmountLine
                    title="Cena za litr"
                    unit="Kč"
                    label="Cena za litr v Kč"
                    value={unitPrice}
                    onConfirm={({ value, closeDialog }) => {
                        onUnitPriceChange(value);
                        closeDialog();
                    }}
                    errorMessage={unitPriceErrorMessage}
                />
                <Spacer size={2} direction="column" />
                <Delimiter />
            </Grid>
            <NavigationButtons
                previousText={strings.previous}
                onNextClick={onNextClick}
                onPreviousClick={goBack}
                {...{ nextText }}
            />
            <AlertDialog
                isOpened={isFullTankDialogVisible}
                title="Plná nádrž"
                message="Tankováno do plné nádrže?"
                onPositiveButtonClick={() => {
                    onIsFullTankSelected(true);
                    setIsFullTankDialogVisible(false);
                }}
                onNegativeButtonClick={() => {
                    onIsFullTankSelected(false);
                    setIsFullTankDialogVisible(false);
                }}
            />
        </Box>
    );
};
