import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(({ spacing, palette }) => ({
    root: {
        margin: spacing(2, 2),
    },
    image: {
        display: "block",
        width: "100% !important", // Přepisuje chování komponenty _Shimmer_
        aspectRatio: "2", // Nutné kvůli _Shimmer_ komponentě
        height: "unset !important",
        borderRadius: spacing(1),
    },
    label: {
        color: palette.grey[400],
    },
}));
