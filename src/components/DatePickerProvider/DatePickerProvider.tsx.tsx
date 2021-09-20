import { FunctionComponent, MouseEventHandler, ReactElement } from "react";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import czechLocale from "date-fns/locale/cs";

export type DatePickerProviderChildrenProps = {
    onClick?: MouseEventHandler<HTMLElement>,
}

export type DatePickerProviderProps = {
    value?: Date,
    type?: "yearMonth",
    onChange: (date?: Date) => void,
    children: (props: DatePickerProviderChildrenProps) => ReactElement,
}

export const DatePickerProvider: FunctionComponent<DatePickerProviderProps> = ({ children, value, onChange, type }) => (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={czechLocale}>
        <DatePicker
            views={type === "yearMonth" ? ["year", "month"] : undefined}
            disableFuture={true}
            value={value}
            onChange={(date) => onChange(date ?? undefined)}
            TextFieldComponent={({ onClick }) => children({ onClick })}
            cancelLabel="Zrušit"
            okLabel="OK"
        />
    </MuiPickersUtilsProvider>
);
