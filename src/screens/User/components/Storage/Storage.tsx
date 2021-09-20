import { FunctionComponent } from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../../../store";
import { StorageComponent } from "../StorageComponent";

export const Storage: FunctionComponent = () => {
    const actual = useSelector<RootState, number | undefined>((state) => state.user.usedStorageMb);

    const overall = useSelector<RootState, number | undefined>((state) => state.user.storageCapacityMb);

    return (
        <StorageComponent {...{ actual, overall }} />
    );
};
