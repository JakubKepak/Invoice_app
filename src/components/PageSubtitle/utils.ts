import { makeStyles } from "@material-ui/core/styles"

export const useStyles = makeStyles(({ spacing }) => ({
    title: {
        margin: spacing(2, 2, 0, 2),
        textTransform: "uppercase",
    },
}))
