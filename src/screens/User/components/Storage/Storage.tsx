import { FunctionComponent } from "react";

import { useRootSelector } from "../../../../utils";
import { StorageComponent } from "../StorageComponent";

export const Storage: FunctionComponent = () => {
    const actual = useRootSelector<number | undefined>((state) => state.user.usedStorageMb);
    const overall = useRootSelector<number | undefined>((state) => state.user.storageCapacityMb);

    return (
        <StorageComponent {...{ actual, overall }} />
    );
};
