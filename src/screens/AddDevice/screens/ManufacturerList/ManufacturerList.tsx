import { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";

import { actions, RootState } from "../../../../store";
import { strings } from "../../../../strings";
import { Manufacturer } from "../../../../types";
import { useNavigate } from "../../../../utils";
import { Search } from "../../components"

export const ManufacturerList: FunctionComponent = () => {
    const list = useSelector<RootState, Manufacturer[]>((state) => state.manufacturer.list);

    const dispatch = useDispatch();
    const [, goBack] = useNavigate();

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
