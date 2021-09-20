import {ReactElement} from "react"

export type ListItemProps = {
    icon?: ReactElement;
    title: string;
    destination: string;
    variant?: "primary" | "success" | "disabled",
}
