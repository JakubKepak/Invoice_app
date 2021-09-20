import { FunctionComponent } from "react";
import { useDispatch } from "react-redux";

import { actions, getFuelOptions } from "../../../../store";
import { Fuel } from "../../../../types";
import { useNavigate, useRootSelector } from "../../../../utils";
import { Search } from "../../components"

export const FuelList: FunctionComponent = () => {
    const list = useRootSelector<{ name: string, list: Fuel[] }[]>((state) => getFuelOptions(state));

    console.log(list);

    const dispatch = useDispatch();
    const [, goBack] = useNavigate();

    const onSelect = (value: { name: string, list: Fuel[] } | undefined) => {
        dispatch(actions.newDevice.setMainFuelId(value?.list[0]?.id))
        dispatch(actions.newDevice.setSecondaryFuelId(value?.list[1]?.id))
        goBack();
    }

    return (
        <Search
            title="Palivo"
            isSearchActive={false}
            {...{ list, onSelect }}
        />
    );
};
