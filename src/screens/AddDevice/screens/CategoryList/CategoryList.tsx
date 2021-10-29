import { FunctionComponent } from "react";
import { useDispatch } from "react-redux";

import { Search } from "../../../../components";
import { actions } from "../../../../store";
import { strings } from "../../../../strings";
import { Category } from "../../../../types";
import { useNavigate, useRootSelector } from "../../../../utils";

export const CategoryList: FunctionComponent = () => {
    const list = useRootSelector<Category[]>((state) => state.category.list);

    const dispatch = useDispatch();
    const { goBack } = useNavigate();

    const onSelect = (item: Category | undefined) => {
        dispatch(actions.newDevice.setCategoryId(item?.id))
        goBack();
    }

    return (
        <Search
            isSearchActive={false}
            title={strings.category}
            {...{ list, onSelect }}
        />
    );
};
