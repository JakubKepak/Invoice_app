import { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@material-ui/core";

import { NumberInputLine, DateLine } from "../../../../components";
import { actions, ErrorDataState, RootState } from "../../../../store";
import { formatFuelConsumption, formatKm, useNavigate, useRootSelector } from "../../../../utils";
import { strings } from "../../../../strings";
import { NavigationButtons, PageTitle } from "../../components";
import { pageMap } from "../../utils";

export const Initial: FunctionComponent = () => {
    const dispatch = useDispatch();
    const [navigate] = useNavigate();

    const initialDate = useSelector<RootState, Date | undefined>((state) => state.newDevice.initalDate);
    const initialOdometerState = useSelector<RootState, number | undefined>((state) => state.newDevice.initialOdometerState);
    const initialConsumption = useSelector<RootState, number | undefined>((state) => state.newDevice.initialConsumption);
    const errorData = useRootSelector<ErrorDataState>((state) => state.newDevice.errorData);

    const validate = () => {
        let isValid = true;

        if (initialDate === undefined) {
            isValid = false;
            dispatch(actions.newDevice.setInitalDateError(strings.requiredValue));
        }

        if (initialOdometerState === undefined) {
            isValid = false;
            dispatch(actions.newDevice.setInitialOdometerStateError(strings.requiredValue));
        }

        if (initialConsumption === undefined) {
            isValid = false;
            dispatch(actions.newDevice.setInitialConsumptionError(strings.requiredValue));
        }

        if (isValid) {
            navigate(`./${pageMap["note"].address}`)
        }
    }

    return (
        <Box>
            <PageTitle text="Začátek evidence v MechIS" />
            <DateLine
                title={strings.date}
                defaultValue={initialDate}
                errorMessage={errorData.initalDate}
                onConfirm={({ value }) => {
                    dispatch(actions.newDevice.setInitalDate(value));
                }}
            />
            <NumberInputLine
                value={initialOdometerState}
                formatter={formatKm}
                errorMessage={errorData.initialOdometerState}
                type="float"
                title="Stav tachometru"
                label="Stav tachometru v km"
                onConfirm={({ value, closeDialog }) => {
                    dispatch(actions.newDevice.setInitialOdometerState(value));
                    closeDialog();
                }}
            />
            <NumberInputLine
                value={initialConsumption}
                errorMessage={errorData.initialConsumption}
                title="Současná spotřeba benzínu, nafty, LPG…"
                label="Současná spotřeba v l/100 km"
                type="float"
                formatter={formatFuelConsumption}
                onConfirm={({ value, closeDialog }) => {
                    dispatch(actions.newDevice.setInitialConsumption(value));
                    closeDialog();
                }}
            />
            <NavigationButtons
                onPreviousClick={() => navigate(`./${pageMap["operation"].address}`)}
                onNextClick={() => validate()}
            />
        </Box >
    );
};
