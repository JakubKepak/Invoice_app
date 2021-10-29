import { FunctionComponent } from "react";
import { useDispatch } from "react-redux";

import {
    getMainFuelAmountL,
    getMainFuelPrice,
    getMainFuelUnitPrice,
    actions as allActions,
    getIsSecondaryFuelSelected,
    getRefuelingMainFuelAmountErrorMessage,
    getRefuelingMainFuelPriceErrorMessage,
    getRefuelingMainFuelUnitPriceErrorMessage,
    getRefuelingMainFuel,
    getLastSelectedOrFirstDevice,
} from "../../../../store";
import { strings } from "../../../../strings";
import { INVENTORY_LINK } from "../../../../constants";
import { useNavigate, useRootSelector } from "../../../../utils";
import { Device, Fuel as FuelType } from "../../../../types";
import { addRefuelingPageMap } from "../../../../navigation";
import { Fuel } from "../Fuel";

export const MainFuel: FunctionComponent = () => {
    const { navigate } = useNavigate();
    const dispatch = useDispatch();
    const actions = allActions.refueling;
    const amount = useRootSelector<number | undefined>(getMainFuelAmountL);
    const price = useRootSelector<number | undefined>(getMainFuelPrice);
    const unitPrice = useRootSelector<number | undefined>(getMainFuelUnitPrice);
    const isSecondaryFuelSelected = useRootSelector<boolean>(getIsSecondaryFuelSelected);
    const amountErrorMessage = useRootSelector<string | undefined>(getRefuelingMainFuelAmountErrorMessage);
    const priceErrorMessage = useRootSelector<string | undefined>(getRefuelingMainFuelPriceErrorMessage);
    const unitPriceErrorMessage = useRootSelector<string | undefined>(getRefuelingMainFuelUnitPriceErrorMessage);
    const fuel = useRootSelector<FuelType | undefined>(getRefuelingMainFuel);
    const device = useRootSelector<Device | undefined>(getLastSelectedOrFirstDevice);

    if (device === undefined) {
        return null;
    }

    return (
        <Fuel
            title={`Množství: ${fuel?.name}`}
            onAmountChange={(value) => dispatch(actions.requestSetMainFuelAmountL(value))}
            onPriceChange={(value) => dispatch(actions.requestSetMainFuelPrice(value))}
            onUnitPriceChange={(value) => dispatch(actions.requestSetMainFuelUnitPrice(value))}
            onNextClick={() => {
                if (amount === undefined) {
                    dispatch(actions.setMainFuelAmountErrorMessage(strings.requiredValue))
                }
                if (price === undefined) {
                    dispatch(actions.setMainFuelPriceErrorMessage(strings.requiredValue))
                }
                if (unitPrice === undefined) {
                    dispatch(actions.setMainFuelUnitPriceErrorMessage(strings.requiredValue))
                }
                if (amount !== undefined && price !== undefined && unitPrice !== undefined) {
                    if (isSecondaryFuelSelected) {
                        navigate(`./${addRefuelingPageMap["secondary-fuel"].address}`);
                    } else {
                        dispatch(actions.save());
                        navigate(`/${INVENTORY_LINK}`);
                    }
                }
            }}
            maxAmount={device.mainTankVolume}
            onIsFullTankSelected={(isFull) => dispatch(actions.setIsMainTankFull(isFull))}
            nextText={isSecondaryFuelSelected ? strings.next : strings.complete}
            {...{ amount, price, unitPrice, amountErrorMessage, priceErrorMessage, unitPriceErrorMessage }}
        />
    );
};
