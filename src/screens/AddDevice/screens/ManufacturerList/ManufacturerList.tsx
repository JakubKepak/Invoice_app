import { FunctionComponent } from "react";
import { useDispatch } from "react-redux";

import { Search } from "../../../../components";
import { actions } from "../../../../store";
import { strings } from "../../../../strings";
import { Manufacturer } from "../../../../types";
import { useNavigate, useRootSelector } from "../../../../utils";

export const ManufacturerList: FunctionComponent = () => {
    const list = useRootSelector<Manufacturer[]>((state) => state.manufacturer.list);

    const dispatch = useDispatch();
    const { goBack } = useNavigate();

    const onSelect = (item: Manufacturer | undefined) => {
        dispatch(actions.newDevice.setManufacturerId(item?.id))
        goBack();
    }

    return (
        <Search
            title={strings.manufacturer}
            isSearchActive={true}
            {...{ list, onSelect }}
        />
    );
};
