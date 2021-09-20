import { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@material-ui/core";

import { NumberInputLine, DateLine, Spacer } from "../../../../components";
import { actions, RootState } from "../../../../store";
import { formatKm, formatUnitFloat, useNavigate } from "../../../../utils";
import { pageMap } from "../../utils";
import { NavigationButtons, PageTitle } from "../../components";
import { strings } from "../../../../strings";

export const Operation: FunctionComponent = () => {
    const dispatch = useDispatch();
    const [navigate] = useNavigate();

    const firstRegistrationDate = useSelector<RootState, Date | undefined>((state) => state.newDevice.firstRegistrationDate);
    const acquisitionData = useSelector<RootState, Date | undefined>((state) => state.newDevice.acquisitionData);
    const odometerValue = useSelector<RootState, number | undefined>((state) => state.newDevice.odometerValue);
    const guaranteeDate = useSelector<RootState, Date | undefined>((state) => state.newDevice.guaranteeDate);
    const guaranteeMonthCount = useSelector<RootState, number | undefined>((state) => state.newDevice.guaranteeMonthCount);
    const guaranteeKm = useSelector<RootState, number | undefined>((state) => state.newDevice.guaranteeKm);

    return (
        <Box>
            <PageTitle text="Provozní údaje" />
            <DateLine
                defaultValue={firstRegistrationDate}
                onConfirm={({ value }) => dispatch(actions.newDevice.setFirstRegistrationData(value))}
                title="První registrace"
                description="Dle technického průkazu"
            />
            <DateLine
                defaultValue={acquisitionData}
                title="Majitelem od"
                description="Dle kupní smlouvy"
                onConfirm={({ value }) => {
                    dispatch(actions.newDevice.setAcquisitionDate(value))
                }}
            />
            <NumberInputLine
                title="Stav tachometru"
                label="Stav tachometru v km"
                description="Dle kupní smlouvy"
                type="float"
                value={odometerValue}
                formatter={formatKm}
                onConfirm={({ value, closeDialog }) => {
                    dispatch(actions.newDevice.setOdometerValue(value));
                    closeDialog();
                }}
            />
            <Spacer size={2} direction="column" />
            <PageTitle text="Záruční podmínky" />
            <DateLine
                defaultValue={guaranteeDate}
                title="Od"
                onConfirm={({ value }) => {
                    dispatch(actions.newDevice.setGuaranteeDate(value))
                }}
            />
            <NumberInputLine
                title="Počet měsíců"
                label="Počet měsíců"
                value={guaranteeMonthCount}
                formatter={(value) => formatUnitFloat(value, strings.monthPlural(value))}
                type="integer"
                onConfirm={({ value, closeDialog }) => {
                    dispatch(actions.newDevice.setGuaranteeMonthCount(value));
                    closeDialog();
                }}
            />
            <NumberInputLine
                title="Počet kilometrů"
                label="Počet kilometrů v km"
                formatter={formatKm}
                value={guaranteeKm}
                type="integer"
                onConfirm={({ value, closeDialog }) => {
                    dispatch(actions.newDevice.setGuaranteeKm(value));
                    closeDialog();
                }}
            />
            <NavigationButtons
                onPreviousClick={() => navigate(`./${pageMap["parameters"].address}`)}
                onNextClick={() => navigate(`./${pageMap["initial"].address}`)}
            />
        </Box >
    );
};
