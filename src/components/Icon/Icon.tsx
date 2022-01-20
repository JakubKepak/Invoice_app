import { FunctionComponent } from "react";

import { IconName } from "../../types";
import { IconProps } from "./IconProps";
import { useStyles } from "./utils";
import "./styles.css";

const icons: { [name in IconName]: string } = {
  add: "904",
  "add-small": "904",
  agendas: "900",
  analytics: "901",
  at: "906",
  calendar: "902",
  car: "903",
  "car-wide": "90a",
  cloud: "914",
  expenses: "91c",
  fault: "91f",
  folder: "908",
  "chevron-right": "907",
  "chevron-left": "907",
  "list-wide": "90d",
  note: "910",
  oil: "919",
  parameters: "917",
  password: "90e",
  plan: "90f",
  progress: "912",
  project: "914",
  refueling: "916",
  servis: "90b",
  tachometer: "915",
  "user-wide": "91a",
};

export const Icon: FunctionComponent<IconProps> = ({ name, size = "medium", variant = "primary", className }) => {
    const classes = useStyles({ name, size, variant });

    return (
        <div
            className={classes.root + " " + className}
            dangerouslySetInnerHTML={{ __html: `&#xe${icons[name]};` }}
        />
    );
};
