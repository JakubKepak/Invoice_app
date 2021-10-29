import { FunctionComponent } from "react";
import { Checkbox as CheckboxComponent, FormControlLabel } from "@material-ui/core";

export type CheckboxProps = {
    value: boolean,
    onChange: (value: boolean) => void,
    label: string,
}

export const Checkbox: FunctionComponent<CheckboxProps> = ({ value, onChange, label }) => (
    <FormControlLabel
        checked={value}
        onChange={(_, isChecked) => onChange(isChecked)}
        control={<CheckboxComponent color="primary" />}
        {...{ label }}
    />
);
