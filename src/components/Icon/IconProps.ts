export type IconName = "add" | "add-small" | "agendas" | "analytics" | "at" | "calendar" | "car" | "car-wide" | "cloud" | "expenses" | "fault" | "folder" | "chevron-right" | "list-wide" | "note" | "oil" | "parameters" | "password" | "plan" | "progress" | "project" | "refueling" | "servis" | "tachometer" | "user-wide";

export type IconProps = {
    className?: string;
    name: IconName;
    variant?: "primary" | "disabled" | "success" | "white";
    size?: "micro" | "tiny" | "small" | "medium" | "large";
};
