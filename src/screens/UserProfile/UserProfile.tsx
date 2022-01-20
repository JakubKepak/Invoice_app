import { Box, Button } from "@material-ui/core";
import { FunctionComponent, useState } from "react";
import {
  Spacer,
  TextInputLine,
} from "../../components";
import SettingsPagesTitle from "../../components/PageTitle/SettingsPagesTitle";
import { useStyles } from "./utils";

// TODO: Consider using formik

export const UserProfile: FunctionComponent = () => {
  const classes = useStyles();

//   For now just local states. But it should be handled by formik or reducer
  const [userName, setUserName] = useState<string | undefined>();
  const [name, setName] = useState<string | undefined>();
  const [surname, setSurname] = useState<string | undefined>();
  const [email, setEmail] = useState<string | undefined>();
  const [mobilePhone, setMobilePhone] = useState<string | undefined>();
  const [address, setAddress] = useState<string | undefined>();
  const [sex, setSex] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();

//   Send data via api and store them in local state. Probably GraphQL
  const sendHandler = () => {
    console.info("send data to backend and internal storage - GraphQL, Redux?");
  };

  return (
    <Box>
      <Spacer size={2} direction="column" />
      <SettingsPagesTitle text={"Profil uživatele"} />
      <TextInputLine
        value={userName}
        title="Uživatelské jméno"
        onConfirm={({ value, closeDialog }) => {
          setUserName(value);
          closeDialog();
        }}
      />
      <TextInputLine
        value={name}
        title="Jméno"
        onConfirm={({ value, closeDialog }) => {
          setName(value);
          closeDialog();
        }}
      />
      <TextInputLine
        value={surname}
        title="Přijmení"
        onConfirm={({ value, closeDialog }) => {
          setSurname(value);
          closeDialog();
        }}
      />
      <TextInputLine
        value={email}
        title="E-mail"
        onConfirm={({ value, closeDialog }) => {
          setEmail(value);
          closeDialog();
        }}
      />
      <TextInputLine
        value={mobilePhone}
        title="Mobilní telefon"
        onConfirm={({ value, closeDialog }) => {
          setMobilePhone(value);
          closeDialog();
        }}
      />
      <TextInputLine
        value={address}
        title="Bydliště"
        onConfirm={({ value, closeDialog }) => {
          setAddress(value);
          closeDialog();
        }}
      />
      <TextInputLine
        value={sex}
        title="Pohlaví"
        onConfirm={({ value, closeDialog }) => {
          setSex(value);
          closeDialog();
        }}
      />
      <TextInputLine
        value={password}
        title="Heslo"
        onConfirm={({ value, closeDialog }) => {
          setPassword(value);
          closeDialog();
        }}
      />
      <Spacer size={2} direction="column" />
      <div className={classes.buttonContainer}>
        <Button variant="contained" color="primary" onClick={sendHandler}>
          Uložit
        </Button>
      </div>
    </Box>
  );
};
