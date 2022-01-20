import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(({ spacing }) => ({
    root: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
    content: {
        flex: 1,
        overflowY: "auto",
        padding: spacing(3, 3, 2, 3),
    },
    pageHeader:{
        display: 'flex',
        position: 'relative',
        justifyContent: 'center',
    },
    backButtonWrapper: {
        display: 'flex',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: '10px'
    }
}));