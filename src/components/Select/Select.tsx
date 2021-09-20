import { ReactElement } from "react"
import { Select as SelectComponent, MenuItem, FormControl, InputLabel } from "@material-ui/core";
import { SelectInputProps } from "@material-ui/core/Select/SelectInput";

import { strings } from "../../strings";
import { SelectProps } from "./types";
import { useStyles } from "./utils";

export function Select<T>({
    value,
    selectItemList,
    onChange,
    label,
    isFullWidth,
}: SelectProps<T>): ReactElement {
    const classes = useStyles();
    const selectItem = selectItemList.find((selectItem) => selectItem.payload === value);

    const handleChange: SelectInputProps["onChange"] = (event) => onChange(
        selectItemList.find((selectItem) => selectItem.title === event.target.value)?.payload
    );

    return (
        <FormControl fullWidth={isFullWidth} variant="outlined">
            <InputLabel id={label}>
                {label}
            </InputLabel>
            <SelectComponent
                labelId={label}
                label={label}
                fullWidth={isFullWidth}
                value={selectItem?.title ?? ""}
                onChange={handleChange}
            >
                <MenuItem value={""} className={classes.empty} >
                    {strings.cancelSelection}
                </MenuItem>
                {selectItemList.map(selectItem => (
                    <MenuItem value={selectItem.title} >
                        {selectItem.title}
                    </MenuItem>
                ))
                }
            </SelectComponent >
        </FormControl>
    );
};
