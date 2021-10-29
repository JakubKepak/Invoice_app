import { FunctionComponent } from "react";
import { useDispatch } from "react-redux";

import { Search } from "../../../../components";
import { actions } from "../../../../store";
import { Coachbuilder } from "../../../../types";
import { useNavigate, useRootSelector } from "../../../../utils";

export const CoachbuilderList: FunctionComponent = () => {
    const list = useRootSelector<Coachbuilder[]>((state) => state.coachbuilder.list);

    const dispatch = useDispatch();
    const { goBack } = useNavigate();

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
