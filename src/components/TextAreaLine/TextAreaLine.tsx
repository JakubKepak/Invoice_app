import { FunctionComponent } from "react";
import { Box } from "@material-ui/core";

import { LineTitle } from "../LineTitle";
import { TextField } from "../TextField";
import { useStyles } from "./utils";

export type TextAreaLineProps = {
    title: string,
    text?: string,
    onChange: (text: string) => void,
}

export const TextAreaLine: FunctionComponent<TextAreaLineProps> = ({ title, text, onChange }) => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <LineTitle className={classes.title} title={title} />
            <TextField
                value={text}
                isMultiline={true}
                isSelectAllOnFocusActive={true}
                className={classes.input}
                onChange={onChange}
            />
        </Box>
    );
}
