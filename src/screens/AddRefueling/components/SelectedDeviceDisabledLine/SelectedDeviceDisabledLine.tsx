import { FunctionComponent } from "react";

import { DeviceLine } from "../../../../components";
import { getLastSelectedOrFirstDeviceId, getDeviceName, getLastSelectedOrFirstDevice } from "../../../../store";
import { Device } from "../../../../types";
import { useRootSelector } from "../../../../utils";

export const SelectedDeviceDisabledLine: FunctionComponent = () => {
    const id = useRootSelector<string | undefined>(getLastSelectedOrFirstDeviceId);
    const device = useRootSelector<Device | undefined>(getLastSelectedOrFirstDevice);
    const name = useRootSelector<string>((state) => getDeviceName(state, id));

    if (device === undefined) {
        return null;
    }

    return (
        <DeviceLine
            spz={device.spz}
            imageUrl={device.imageUrl}
            {...{ name }}
        />
    );
};
