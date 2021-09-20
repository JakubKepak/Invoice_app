import { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";

import { actions, RootState } from "../../../../store";
import { strings } from "../../../../strings";
import { Category } from "../../../../types";
import { useNavigate } from "../../../../utils";
import { Search } from "../../components"

export const CategoryList: FunctionComponent = () => {
    const list = useSelector<RootState, Category[]>((state) => state.category.list);

    const dispatch = useDispatch();
    const [, goBack] = useNavigate();

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
