import { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";

import { actions, RootState } from "../../../../store";
import { Coachbuilder } from "../../../../types";
import { useNavigate } from "../../../../utils";
import { Search } from "../../components"

export const CoachbuilderList: FunctionComponent = () => {
    const list = useSelector<RootState, Coachbuilder[]>((state) => state.coachbuilder.list);

    const dispatch = useDispatch();
    const [, goBack] = useNavigate();

    const onSelect = (item: Coachbuilder | undefined) => {
        dispatch(actions.newDevice.setCoachbuilderId(item?.id))
        goBack();
    }

    return (
        <Search
            isSearchActive={false}
            title="Karoserie"
            {...{ list, onSelect }}
        />
    );
};
