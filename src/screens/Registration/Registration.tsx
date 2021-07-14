import {FunctionComponent} from "react";
import {Button, CssBaseline, TextField, Box, Typography, Container} from "@material-ui/core";

import {Copyright, RouterLink} from "../../components";
import {useStyles} from "./utils";

export const Registration: FunctionComponent = () => {
    const classes = useStyles();

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
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Heslo"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Zopakovat heslo"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
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
