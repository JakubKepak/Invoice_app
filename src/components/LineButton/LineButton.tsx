import { Typography } from "@material-ui/core";
import { FunctionComponent } from "react"
import { Icon } from "../Icon";

import { LineButtonProps } from "./LineButtonProps";
import { useStyles } from "./utils";

export const LineButton: FunctionComponent<LineButtonProps> = ({
  text,
  visualVariant,
  className,
  startAdornment,
  iconName,
  onClick,
}) => {
  const classes = useStyles({ text, visualVariant });

  return (
    <Typography
      component="div"
      variant="subtitle1"
      className={`${classes.rightText} ${className}`}
      onClick={onClick}
    >
      {startAdornment && iconName &&(
        <Icon
          name={iconName}
          className={classes.chevron}
          variant="disabled"
          size="micro"
        />
      )}
      {text}
    </Typography>
  );
};
