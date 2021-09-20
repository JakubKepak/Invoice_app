import { ChangeEvent, FocusEvent, KeyboardEventHandler, KeyboardEvent, ReactElement, forwardRef } from "react";
import { InputAdornment, TextField as TextFieldComponent } from "@material-ui/core";

export type TextFieldProps = {
    value: string | undefined,
    type?: "float" | "integer" | "text" | "password" | "email",
    errorMessage?: string,
    onChange: (value: string) => void,
    onKeyPress?: KeyboardEventHandler,
    isSelectAllOnFocusActive?: boolean,
    onFocus?: () => void,
    onEnterPress?: () => void,
    isAutofocusActive?: boolean,
    isFullWidth?: boolean,
    label?: string,
    startIcon?: ReactElement,
    isMultiline?: boolean,
    className?: string,
    isRequired?: boolean,
    autoComplete?: string,
    margin?: "dense" | "normal",
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(({
    value,
    type,
    errorMessage,
    onChange,
    onKeyPress,
    isSelectAllOnFocusActive,
    onFocus,
    onEnterPress,
    isAutofocusActive,
    isFullWidth,
    label,
    startIcon,
    isMultiline,
    className,
    isRequired,
    autoComplete,
    margin,
}, ref) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value;
        switch (type) {
            case "integer":
                onChange(value.replaceAll(/[,.-]/g, ""));
                break;
            case "float":
                onChange(value.replaceAll("-", ""));
                break;
            default:
                onChange(value);
        }
    }

    const getValue = () => {
        if (type === "float") {
            return value?.replace(",", ".");
        } else {
            return value;
        }
    }

    const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
        if (isSelectAllOnFocusActive) {
            event.currentTarget.select();
        }
        if (onFocus) {
            onFocus();
        }
    }

    const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        if (onEnterPress) {
            if (event.key === "Enter") {
                onEnterPress()
            }
        }
        if (onKeyPress) {
            onKeyPress(event);
        }
    }

    const getInputMode = () => {
        switch (type) {
            case "float":
                return "decimal";
            case "integer":
                return "numeric";
            default:
                return "text";
        }
    }

    const getInputType = () => {
        switch (type) {
            case "float":
            case "integer":
                return "number";
            case "password":
                return "password";
            case "email":
                return "email";
            default:
                return "text";
        }
    }

    return (
        <TextFieldComponent
            helperText={errorMessage}
            onFocus={handleFocus}
            variant="outlined"
            error={errorMessage !== undefined}
            autoFocus={isAutofocusActive}
            fullWidth={isFullWidth}
            inputProps={{
                inputMode: getInputMode(),
                min: getInputType() === "number" ? 0 : undefined,
            }}
            type={getInputType()}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            value={getValue()}
            required={isRequired}
            InputProps={{
                startAdornment: startIcon ? (
                    <InputAdornment position="start">
                        {startIcon}
                    </InputAdornment>
                ) : undefined,
            }}
            inputRef={ref}
            multiline={isMultiline}
            {...{ label, className, autoComplete, margin }}
        />
    );
});
