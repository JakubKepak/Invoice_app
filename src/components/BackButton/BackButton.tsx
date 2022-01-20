import { useHistory } from "react-router-dom";
import { LineButton } from "../LineButton";
import { useStyles } from "./utils";

export default function BackButton() {
  const classes = useStyles();
  const history = useHistory();

  const goBackHandler = () => {
    history.goBack();
  };

  return (
    <LineButton
      text={"zpět"}
      visualVariant="clickable"
      className={classes.backButtonWrapper}
      startAdornment={true}
      iconName={"chevron-left"}
      onClick={goBackHandler}
    />
  );
}
