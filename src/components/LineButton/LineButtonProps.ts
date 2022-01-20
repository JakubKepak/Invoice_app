import { IconName } from "../../types";

export type LineButtonProps = {
  text: string;
  visualVariant?: "clickable" | "disabled" | "normal";
  className?: string;
  startAdornment?: boolean;
  iconName?: IconName;
  onClick?: () => void;
};
