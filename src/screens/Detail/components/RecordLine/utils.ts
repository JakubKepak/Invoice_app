import { makeStyles, Theme } from "@material-ui/core/styles";

import { RecordLineProps } from "./RecordLineProps";

export const useStyles = makeStyles<Theme, RecordLineProps>(({ spacing, palette }) => ({
    root: {
    },
    title: {
        paddingLeft: spacing(2),
    },
    subtitle: {
        paddingLeft: spacing(2),
        marginTop: -spacing(1),
        color: palette.grey["500"],
    },
    leftContainer: {
        flexGrow: 1,
    },
    rightText: {
        fontWeight: "bold",
        textAlign: "end",
    },
    rightDescription: ({ rightDescriptionVariant }) => ({
        color: rightDescriptionVariant === "note" ? palette.grey["500"] : palette.error.dark,
        textAlign: "end",
        fontWeight: rightDescriptionVariant === "note" ? "normal" : "bold",
        marginTop: -spacing(1),
    }),
    textContainer: {
        flexGrow: 1,
    },
}));
