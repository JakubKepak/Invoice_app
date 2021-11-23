import {Box, Grid, Typography} from "@material-ui/core";
import { FunctionComponent } from "react";
import { useDispatch } from "react-redux";

import { DateLine, Delimiter, FileLine, NavigationButtons, NumberInputLine, TextAreaLine } from "../../../../components";
import { strings } from "../../../../strings";
import {Device, Expense} from "../../../../types";
import {formatKc, formatKm, useNavigate, useRootSelector} from "../../../../utils";
import { useStyles } from "./utils";
import {
    getExpenseNote,
    getLastSelectedOrFirstDeviceId,
    getDevice,
    getLastSelectedDeviceLastOdometerValue,
    getExpenseDate,
    getExpenseOdometerState,
    getExpenseAttachmentUrlList,
    getOdometerStateErrorMessage,
    getExpensePrice,
    actions as allActions,
    getExpensePriceErrorMessage,
    getSelectedDeviceExpenseList,
    getLastDeviceExpense,
    getLastSelectedDeviceId, getExpenseCategoryId, getExpenseTypeId,
} from "../../../../store";
import {SelectedDeviceDisabledLine} from "../../../AddRefueling/components";
import {INVENTORY_LINK} from "../../../../constants";
import {getExpenseCategoryText, getExpenseType, getExpenseTypeText} from "../../../../store/expenseList/selectors";

export const Specification: FunctionComponent = () => {
    const classes = useStyles();
    const { navigate, goBack } = useNavigate();
    const dispatch = useDispatch();
    const note = useRootSelector<string | undefined>(getExpenseNote);
    const id = useRootSelector<string | undefined>(getLastSelectedOrFirstDeviceId);
    const device = useRootSelector<Device | undefined>((state) => getDevice(state, id));
    const date = useRootSelector<Date | undefined>(getExpenseDate);
    const odometerValue = useRootSelector<number | undefined>(getExpenseOdometerState);
    const expensePrice = useRootSelector<number | undefined>(getExpensePrice);
    const attachmentUrlList = useRootSelector<string[] | undefined>(getExpenseAttachmentUrlList);
    const lastDeviceOdometerValue = useRootSelector<number | undefined>(getLastSelectedDeviceLastOdometerValue);
    const actions = allActions.expense;
    const odometerStateErrorMessage = useRootSelector<string | undefined>(getOdometerStateErrorMessage);
    const expensePriceErrorMessage = useRootSelector<string | undefined>(getExpensePriceErrorMessage);
    const expenseCategoryId = useRootSelector<string | undefined>((state) => getExpenseCategoryId(state));
    const expenseTypeId = useRootSelector<string | undefined>((state) => getExpenseTypeId(state));
    const expenseType = useRootSelector<string | undefined>((state) => getExpenseTypeText(state, expenseCategoryId, expenseTypeId));
    const expenseCategory = useRootSelector<string | undefined>((state) => getExpenseCategoryText(state, expenseCategoryId));

    if (device === undefined) {
        goBack();
        return null;
    }

    return (
        <Box className={classes.root}>
            <Grid className={classes.page}>
                <SelectedDeviceDisabledLine />
                <Typography component="h1" variant="body1" className={classes.title}>
                    {expenseCategory}: {expenseType}
                </Typography>
                <Delimiter />
                <DateLine
                    defaultValue={date}
                    title={strings.date}
                    onConfirm={({ value }) => {
                        dispatch(actions.setDate(value))
                    }}
                />
                <NumberInputLine
                    title="Stav tachometru"
                    label={`Stav tachometru v km${lastDeviceOdometerValue !== undefined ? ` (${formatKm(lastDeviceOdometerValue)})` : ""}`}
                    description={`Poslední stav${formatKm(lastDeviceOdometerValue) ? `: ${formatKm(lastDeviceOdometerValue)}` : " je neznámý"}`}
                    type="float"
                    value={odometerValue}
                    formatter={formatKm}
                    onConfirm={({ value, closeDialog }) => {
                        dispatch(actions.setOdometerState(value));
                        closeDialog();
                    }}
                    errorMessage={odometerStateErrorMessage}
                />
                <NumberInputLine
                    title="Cena celkem"
                    label="Cena celkem v Kč"
                    type="float"
                    value={expensePrice}
                    formatter={formatKc}
                    onConfirm={({ value, closeDialog }) => {
                        dispatch(actions.setPrice(value));
                        closeDialog();
                    }}
                    errorMessage={expensePriceErrorMessage}
                />
                <FileLine
                    fileUrlList={attachmentUrlList}
                    onConfirm={(fileUrlList) => {
                        fileUrlList.forEach((fileUrl) => {
                            dispatch(actions.addAttachmentUrl(fileUrl));
                        });
                    }}
                    onRemoveItem={(fileUrl) => dispatch(actions.removeAttachmentUrl(fileUrl))}
                />
                <Delimiter />
                <TextAreaLine
                    title="Poznámka"
                    text={note}
                    onChange={(value) => dispatch(actions.setNote(value))}
                />
                <Delimiter />
            </Grid>
            <NavigationButtons
                previousText={strings.previous}
                nextText={strings.complete}
                onNextClick={() => {
                    if (odometerValue === undefined) {
                        dispatch(actions.setOdometerStateError(strings.requiredValue))
                    }
                    if (expensePrice === undefined) {
                        dispatch(actions.setExpensePriceError(strings.requiredValue))
                    }
                    if (expensePrice !== undefined) {
                        dispatch(actions.save());
                        navigate(`/${INVENTORY_LINK}`);
                    }
                }}
                onPreviousClick={goBack}
            />
        </Box>
    );
};
