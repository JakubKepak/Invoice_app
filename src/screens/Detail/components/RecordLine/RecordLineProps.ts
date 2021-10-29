import { ReactElement } from "react";

export type RecordLineProps = {
    icon: ReactElement,
    title: string,
    rightText: string | undefined,
    rightDescription: string | undefined,
    subtitle?: string,
    rightDescriptionVariant?: "note" | "warning",
}
