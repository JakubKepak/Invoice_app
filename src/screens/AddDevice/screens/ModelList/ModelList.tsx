import { FunctionComponent } from "react";
import { useDispatch } from "react-redux";

import { Search } from "../../../../components";
import { actions } from "../../../../store";
import { strings } from "../../../../strings";
import { Category, Model } from "../../../../types";
import { useNavigate, useRootSelector } from "../../../../utils";

export const ModelList: FunctionComponent = () => {
    const list = useRootSelector<Model[]>((state) => state.model.list.filter((model) => model.manufacturerId === state.newDevice.manufacturerId));

    const dispatch = useDispatch();
    const { goBack } = useNavigate();

    const onSelect = (item: Category | undefined) => {
        dispatch(actions.newDevice.setModelId(item?.id))
        goBack();
    }

    return (
        <Search
            title={strings.model}
            isSearchActive={true}
            {...{ list, onSelect }}
        />
    );
};
