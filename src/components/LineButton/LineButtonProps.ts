export type LineButtonProps = {
  text: string;
  visualVariant?: "clickable" | "disabled" | "normal";
  className?: string;
  startAdornment?: any;
  onClick?: () => void;
};
