import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(({ palette }) => ({
    root: {
        borderBottom: `1px solid ${palette.grey[400]}`,
    },
}));
