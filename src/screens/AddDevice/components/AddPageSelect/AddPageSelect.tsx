import { ChangeEvent, FunctionComponent } from "react"
import { Select, MenuItem } from "@material-ui/core";

import { pageList } from "../../utils";
import { AddPageSelectProps } from "./AddPageSelectProps";

export const AddPageSelect: FunctionComponent<AddPageSelectProps> = ({ value, onChange, className }) => {
    const handleNavigation = (event: ChangeEvent<{ value: unknown }>) => {
        const page = pageList.find((page) => page.id === event.target.value as string);
        if (page !== undefined) {
            onChange(page)
        }
    }

    return (
        <Select
            value={value.id}
            onChange={handleNavigation}
            className={className}
        >
            {pageList.map((page) => (
                <MenuItem key={page.id} value={page.id}>
                    {page.title}
                </MenuItem>
            ))}
        </Select>
    );
};
