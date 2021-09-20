import { ReactElement } from "react";

export type RecordLineProps = {
    icon: ReactElement,
    title: string,
    rightText: string,
    rightDescription: string,
    subtitle?: string,
    rightDescriptionVariant?: "note" | "warning",
}
