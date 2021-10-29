import { FunctionComponent } from "react";
import { useDispatch } from "react-redux";

import {
    getSecondaryFuelAmountL,
    getSecondaryFuelPrice,
    getSecondaryFuelUnitPrice,
    actions as allActions,
    getRefuelingSecondaryFuelAmountErrorMessage,
    getRefuelingSecondaryFuelPriceErrorMessage,
    getRefuelingSecondaryFuelUnitPriceErrorMessage,
    getRefuelingSecondaryFuel,
    getLastSelectedOrFirstDevice,
} from "../../../../store";
import { strings } from "../../../../strings";
import { INVENTORY_LINK } from "../../../../constants";
import { useNavigate, useRootSelector } from "../../../../utils";
import { Device, Fuel as FuelType } from "../../../../types";
import { Fuel } from "../Fuel";

export const SecondaryFuel: FunctionComponent = () => {
    const { navigate } = useNavigate();
    const dispatch = useDispatch();
    const actions = allActions.refueling;
    const amount = useRootSelector<number | undefined>(getSecondaryFuelAmountL);
    const price = useRootSelector<number | undefined>(getSecondaryFuelPrice);
    const unitPrice = useRootSelector<number | undefined>(getSecondaryFuelUnitPrice);
    const amountErrorMessage = useRootSelector<string | undefined>(getRefuelingSecondaryFuelAmountErrorMessage);
    const priceErrorMessage = useRootSelector<string | undefined>(getRefuelingSecondaryFuelPriceErrorMessage);
    const unitPriceErrorMessage = useRootSelector<string | undefined>(getRefuelingSecondaryFuelUnitPriceErrorMessage);
    const fuel = useRootSelector<FuelType | undefined>(getRefuelingSecondaryFuel);
    const device = useRootSelector<Device | undefined>(getLastSelectedOrFirstDevice);

    if (device === undefined) {
        return null;
    }

    return (
        <Fuel
            title={`Množství: ${fuel?.name}`}
            onAmountChange={(value) => dispatch(actions.requestSetSecondaryFuelAmountL(value))}
            onPriceChange={(value) => dispatch(actions.requestSetSecondaryFuelPrice(value))}
            onUnitPriceChange={(value) => dispatch(actions.requestSetSecondaryFuelUnitPrice(value))}
            onNextClick={() => {
                if (amount === undefined) {
                    dispatch(actions.setSecondaryFuelAmountErrorMessage(strings.requiredValue))
                }
                if (price === undefined) {
                    dispatch(actions.setSecondaryFuelPriceErrorMessage(strings.requiredValue))
                }
                if (unitPrice === undefined) {
                    dispatch(actions.setSecondaryFuelUnitPriceErrorMessage(strings.requiredValue))
                }
                if (amount !== undefined && price !== undefined && unitPrice !== undefined) {
                    dispatch(actions.save());
                    navigate(`/${INVENTORY_LINK}`);
                }
            }}
            maxAmount={device.secondaryTankVolume ?? 0}
            onIsFullTankSelected={(isFull) => dispatch(actions.setIsSecondaryTankFull(isFull))}
            nextText={strings.complete}
            {...{ amount, price, unitPrice, amountErrorMessage, priceErrorMessage, unitPriceErrorMessage }}
        />
    );
};
