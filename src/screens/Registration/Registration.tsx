import { FunctionComponent, useState } from "react";
import { Button, CssBaseline, Box, Typography, Container } from "@material-ui/core";

import { Copyright, RouterLink, Spacer, TextField } from "../../components";
import { useStyles } from "./utils";

export const Registration: FunctionComponent = () => {
    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Registrace
                </Typography>
                <Typography component="h3" variant="subtitle2">
                    Základní údaje
                </Typography>
                <form className={classes.form} noValidate={true}>
                    <Spacer size={2} direction="column" />
                    <TextField
                        isRequired={true}
                        isFullWidth={true}
                        label="E-mail"
                        autoComplete="email"
                        isAutofocusActive={true}
                        value={email}
                        onChange={(value) => setEmail(value)}
                    />
                    <Spacer size={3} direction="column" />
                    <TextField
                        isRequired={true}
                        isFullWidth={true}
                        label="Heslo"
                        type="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(value) => setPassword(value)}
                    />
                    <Spacer size={3} direction="column" />
                    <TextField
                        isRequired={true}
                        isFullWidth={true}
                        label="Zopakovat heslo"
                        type="password"
                        autoComplete="current-password"
                        value={passwordAgain}
                        onChange={(value) => setPasswordAgain(value)}
                    />
                    <Spacer size={1} direction="column" />
                    <RouterLink to="technika">
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Registrovat
                        </Button>
                    </RouterLink>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}
