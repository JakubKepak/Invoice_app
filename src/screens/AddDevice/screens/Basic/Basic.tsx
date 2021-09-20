import { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@material-ui/core";

import { RouterLink, TextLine, TextInputLine, DateLine } from "../../../../components";
import { actions, RootState, ErrorDataState, getNewDeviceCategory } from "../../../../store";
import { Category, Manufacturer, Model } from "../../../../types";
import { dateToYearMonthText, formatYearMonthDate, useNavigate, useRootSelector, yearMonthTextToDate } from "../../../../utils";
import { strings } from "../../../../strings";
import { VIN_REGEX } from "../../../../constants";
import { NavigationButtons, PageTitle } from "../../components";
import { pageMap } from "../../utils";

export const Basic: FunctionComponent = () => {
    const dispatch = useDispatch();
    const [navigate] = useNavigate();

    const name = useSelector<RootState, string | undefined>((state) => state.newDevice.name);
    const vin = useSelector<RootState, string | undefined>((state) => state.newDevice.vin);
    const spz = useSelector<RootState, string | undefined>((state) => state.newDevice.spz);
    const category = useSelector<RootState, Category | undefined>((state) => getNewDeviceCategory(state));
    const model = useSelector<RootState, Model | undefined>((state) => state.model.list.find((category) => category.id === state.newDevice.modelId));
    const manufacturer = useSelector<RootState, Manufacturer | undefined>((state) => state.manufacturer.list.find((manufacturer) => manufacturer.id === state.newDevice.manufacturerId));
    const manufactureDate = useSelector<RootState, Date | undefined>((state) => yearMonthTextToDate(state.newDevice.manufacturedYearMonthText));
    const number = useSelector<RootState, string | undefined>((state) => state.newDevice.number);
    const errorData = useRootSelector<ErrorDataState>((state) => state.newDevice.errorData);

    const validate = () => {
        let isValid = true;
        if (vin === undefined) {
            dispatch(actions.newDevice.setVinError(strings.requiredValue));
            isValid = false;
        }
        if (model === undefined) {
            dispatch(actions.newDevice.setModelError(strings.requiredValue));
            isValid = false;
        }
        if (manufacturer === undefined) {
            dispatch(actions.newDevice.setManufacturerError(strings.requiredValue));
            isValid = false;
        }
        if (isValid) {
            navigate(`./${pageMap["parameters"].address}`);
        }
    }

    return (
        <Box>
            <PageTitle text="Základní údaje" />
            <RouterLink to="/vyber-kategorii">
                <TextLine title={strings.category} rightText={category?.name ?? strings.select} />
            </RouterLink>
            <TextInputLine
                value={name}
                title="Vlastní název"
                onConfirm={({ value, closeDialog }) => {
                    dispatch(actions.newDevice.setName(value));
                    closeDialog();
                }}
            />
            <RouterLink to="/vyber-znacku">
                <TextLine errorMessage={errorData.manufacturer} title={strings.manufacturer} rightText={manufacturer?.name ?? strings.select} />
            </RouterLink>
            <RouterLink to="/vyber-model">
                <TextLine title={strings.model} errorMessage={errorData.model} rightText={model?.name ?? strings.select} />
            </RouterLink>
            <DateLine
                defaultValue={manufactureDate}
                formatter={formatYearMonthDate}
                type="yearMonth"
                title="Rok výroby"
                onConfirm={({ value }) => {
                    dispatch(actions.newDevice.setManufacturedYearMonthText(dateToYearMonthText(value)));
                }}
            />
            <TextInputLine
                title={strings.vin}
                value={vin}
                errorMessage={errorData.vin}
                onConfirm={({ value, closeDialog, setErrorMessage }) => {
                    if (value === undefined) {
                        dispatch(actions.newDevice.setVin(value));
                        closeDialog();
                        return;
                    }
                    if (value.length !== 17) {
                        setErrorMessage(`Musí mít délku 17 znaků (má ${value.length})`);
                        return;
                    }
                    if (value.match(VIN_REGEX) === null) {
                        setErrorMessage("Obsahuje nevalidní znaky");
                        return;
                    }
                    dispatch(actions.newDevice.setVin(value));
                    closeDialog();
                }}
            />
            <TextInputLine
                title="Registrační značka"
                value={spz}
                onConfirm={({ value, closeDialog }) => {
                    dispatch(actions.newDevice.setSpz(value));
                    closeDialog();
                }}
            />
            <TextInputLine
                title="Výrobní číslo"
                value={number}
                onConfirm={({ value, closeDialog }) => {
                    dispatch(actions.newDevice.setNumber(value));
                    closeDialog();
                }}
            />
            <NavigationButtons
                onPreviousClick={() => navigate(`./${pageMap["vin"].address}`)}
                onNextClick={() => validate()}
            />
        </Box >
    );
};
