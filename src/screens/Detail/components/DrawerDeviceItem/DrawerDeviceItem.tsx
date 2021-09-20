import { FunctionComponent } from "react";

import { Device } from "../../../../types";
import { useRootSelector } from "../../../../utils";
import { getDevice, getDeviceName } from "../../../../store";
import { DrawerDeviceItemComponent } from "../DrawerDeviceItemComponent";

export type DrawerDeviceItemProps = {
    id: string,
    onClick: () => void,
}

export const DrawerDeviceItem: FunctionComponent<DrawerDeviceItemProps> = ({ id, onClick }) => {
    const device = useRootSelector<Device | undefined>((state) => getDevice(state, id));
    const deviceName = useRootSelector<string>((state) => getDeviceName(state, id));

    if (device === undefined) {
        return null;
    }

    return (
        <DrawerDeviceItemComponent {...device} name={deviceName} onClick={onClick} />
    );

};
