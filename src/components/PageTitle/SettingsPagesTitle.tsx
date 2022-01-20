import { Box, Typography } from "@material-ui/core";
import BackButton from "../BackButton/BackButton";
import { useStyles } from "./utils";

interface ISettingsPagesTitle {
  text: string;
}

export default function SettingsPagesTitle({ text }: ISettingsPagesTitle) {
  const classes = useStyles();

  return (
    <Box className={classes.pageHeader}>
      <BackButton />
      <Typography component="h1" variant="h5" align="center">
        {text}
      </Typography>
    </Box>
  );
}
