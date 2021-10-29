import { IconName } from "../../types";

export type IconProps = {
    className?: string;
    name: IconName;
    variant?: "primary" | "disabled" | "success" | "white";
    size?: "micro" | "tiny" | "small" | "medium" | "large";
};
