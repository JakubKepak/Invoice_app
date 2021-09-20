import { MouseEventHandler } from "react";

export type TextLineProps = {
    title?: string,
    description?: string,
    rightText?: string,
    errorMessage?: string,
    onClick?: MouseEventHandler<HTMLElement>,
    visualVariant?: "clickable" | "disabled" | "normal",
}
