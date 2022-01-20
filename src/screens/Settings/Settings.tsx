import { FunctionComponent } from "react";
import { Box } from "@material-ui/core";

import { BottomNavigation, ListItem, Spacer } from "../../components";
import { USER_LINK } from "../../constants";
import { useStyles } from "./styles";
import SettingsPagesTitle from "../../components/PageTitle/SettingsPagesTitle";

export const Settings: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.content}>
        <SettingsPagesTitle text={"Nastavení"} />
        <Spacer size={2} direction="column" />
        <ListItem title="Oznámení" destination="o-aplikaci" />
        <ListItem title="Zobrazení" destination="o-aplikaci" />
        <ListItem title="Konkrétní technika" destination="o-aplikaci" />
        <ListItem title="Obecné" destination="o-aplikaci" />
        <ListItem title="Jazyk" destination="o-aplikaci" />
      </Box>
      <BottomNavigation selectedItem={USER_LINK} />
    </Box>
  );
};
