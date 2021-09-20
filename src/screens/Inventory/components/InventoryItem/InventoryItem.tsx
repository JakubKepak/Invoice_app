import { FunctionComponent } from "react"
import { useSelector } from "react-redux";

import { RootState, getDeviceName, getDevice } from "../../../../store";
import { InventoryItemComponent, InventoryItemComponentProps } from "../InventoryItemComponent";

export type InventoryItemProps = {
    id: string;
}

export const InventoryItem: FunctionComponent<InventoryItemProps> = ({ id }) => {
    const inventoryItemProps = useSelector<RootState, InventoryItemComponentProps | undefined>((state) => {
        const device = getDevice(state, id);

        if (device === undefined) {
            return undefined;
        }

        return {
            imageUrl: device.imageUrl,
            title: getDeviceName(state, id),
            spz: device.spz,
            manufacturedYearMonthText: device.manufacturedYearMonthText,
        };
    });

    return inventoryItemProps !== undefined ? (
        <InventoryItemComponent {...inventoryItemProps} />
    ) : null;
};
