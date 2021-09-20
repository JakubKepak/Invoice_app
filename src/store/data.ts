import { SelectItem } from "../components";
import { TransmissionType } from "../types";
import { createRange } from "../utils";

export const transmissionTypeSelectItemList: SelectItem<TransmissionType>[] = [
    { payload: TransmissionType.Automatic, title: "Automatická" },
    { payload: TransmissionType.Manual, title: "Manuální" },
    { payload: TransmissionType.Permanent, title: "Stálý převod" },
]

export const transmissionNumberSelectItemList: SelectItem<number>[] = createRange(10).map(index => ({ payload: index + 4, title: `${index + 4}stupňová` }));
