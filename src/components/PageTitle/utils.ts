import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(({ spacing, palette }) => ({
  title: {
    margin: spacing(2),
    textTransform: "uppercase",
  },
  pageHeader: {
    display: "flex",
    position: "relative",
    justifyContent: "center",
  },
  backButtonWrapper: {
    display: "flex",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: "10px",
  },
}));
