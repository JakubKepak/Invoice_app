import { FunctionComponent } from "react"
import { Typography } from "@material-ui/core"

import { useStyles } from "./utils"

export type PageSubtitleProps = {
    text: string
}

export const PageSubtitle: FunctionComponent<PageSubtitleProps> = ({
    text,
}) => {
    const classes = useStyles()

    return (
        <Typography
            component="h1"
            variant="subtitle1"
            className={classes.title}
        >
            {text}
        </Typography>
    )
}
