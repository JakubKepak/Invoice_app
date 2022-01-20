import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(({ palette }) => ({
    list: {
        backgroundColor: palette.background.paper,
        flex: 1,
        flexDirection: "column",
        overflowY: "auto",
    },
}))
