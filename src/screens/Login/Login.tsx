import {FunctionComponent} from "react";
import {Button, CssBaseline, TextField, Grid, Box, Container, InputAdornment} from "@material-ui/core";

import {Copyright, RouterLink, Logo, Icon} from "../../components";
import {useStyles} from "./utils";

export const Login: FunctionComponent = () => {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Logo size="big" />
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        autoFocus={true}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Icon name="at" size="tiny" variant="disabled" />
                                </InputAdornment>
                            )
                        }}
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
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Icon name="password" size="tiny" variant="disabled" />
                                </InputAdornment>
                            )
                        }}
                    />
                    <RouterLink to="technika">
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                                Přihlásit
                        </Button>
                    </RouterLink>
                    <Grid container>
                        <Grid item xs>
                            <RouterLink to="zapomenute-heslo">
                                Zapomenuté heslo?
                            </RouterLink>
                        </Grid>
                        <Grid item>
                            <RouterLink to="registrace">
                                Nemáte účet? Vytvořte nový
                            </RouterLink>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}
