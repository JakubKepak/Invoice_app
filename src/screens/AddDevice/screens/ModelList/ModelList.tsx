import { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";

import { actions, RootState } from "../../../../store";
import { strings } from "../../../../strings";
import { Category, Model } from "../../../../types";
import { useNavigate } from "../../../../utils";
import { Search } from "../../components"

export const ModelList: FunctionComponent = () => {
    const list = useSelector<RootState, Model[]>((state) => state.model.list.filter((model) => model.manufacturerId === state.newDevice.manufacturerId));

    const dispatch = useDispatch();
    const [, goBack] = useNavigate();

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
