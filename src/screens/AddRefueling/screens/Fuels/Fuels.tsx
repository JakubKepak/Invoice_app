import { Box, Grid } from "@material-ui/core";
import { FunctionComponent } from "react";
import { useDispatch } from "react-redux";

import { NavigationButtons, PageTitle, Checkbox, ErrorMessage, Spacer } from "../../../../components";
import { addRefuelingPageMap } from "../../../../navigation";
import {
    actions as allActions,
    getRefuelingMainFuel,
    getRefuelingSecondaryFuel,
    getIsMainFuelSelected,
    getIsSecondaryFuelSelected,
    getRefuelingUnselectedFuelErrorMessage,
} from "../../../../store";
import { strings } from "../../../../strings";
import { Fuel } from "../../../../types";
import { looseCapitalize, useNavigate, useRootSelector } from "../../../../utils";
import { SelectedDeviceDisabledLine } from "../../components";
import { useStyles } from "./utils";

export const Fuels: FunctionComponent = () => {
    const classes = useStyles();
    const { navigate, goBack } = useNavigate();
    const dispatch = useDispatch();
    const actions = allActions.refueling;
    const mainFuel = useRootSelector<Fuel | undefined>(getRefuelingMainFuel);
    const secondaryFuel = useRootSelector<Fuel | undefined>(getRefuelingSecondaryFuel);
    const isMainFuelSelected = useRootSelector<boolean>(getIsMainFuelSelected);
    const isSecondaryFuelSelected = useRootSelector<boolean>(getIsSecondaryFuelSelected);
    const refuelingUnselectedFuelErrorMessage = useRootSelector<string | undefined>(getRefuelingUnselectedFuelErrorMessage);

    return (
        <Box className={classes.root}>
            <Grid className={classes.page}>
                <SelectedDeviceDisabledLine />
                <PageTitle text="Vyber typ paliva" />
                <Grid
                    className={classes.content}
                    container={true}
                    direction="column"
                >
                    {mainFuel !== undefined ? (
                        <Checkbox
                            label={looseCapitalize(mainFuel.name)}
                            value={isMainFuelSelected}
                            onChange={value => dispatch(actions.setIsMainFuelSelected(value))}
                        />
                    ) : null}
                    {secondaryFuel !== undefined ? (
                        <Checkbox
                            label={looseCapitalize(secondaryFuel.name)}
                            value={isSecondaryFuelSelected}
                            onChange={value => dispatch(actions.setIsSecondaryFuelSelected(value))}
                        />
                    ) : null}
                    {refuelingUnselectedFuelErrorMessage !== undefined ? (
                        <>
                            <Spacer size={1} direction="column" />
                            <ErrorMessage text={refuelingUnselectedFuelErrorMessage} />
                        </>
                    ) : null}
                </Grid>
            </Grid>
            <NavigationButtons
                previousText={strings.previous}
                nextText={strings.next}
                onNextClick={() => {
                    if (isMainFuelSelected) {
                        navigate(`./${addRefuelingPageMap["main-fuel"].address}`);
                    } else if (isSecondaryFuelSelected) {
                        navigate(`./${addRefuelingPageMap["secondary-fuel"].address}`);
                    } else {
                        dispatch(actions.setUnselectedFuelErrorMessage("Vyberte alespoň jedno palivo"));
                    }
                }}
                onPreviousClick={goBack}
            />
        </Box>
    );
};
