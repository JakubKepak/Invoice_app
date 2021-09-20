import { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { Button, Grid, Box } from "@material-ui/core";

import { Copyright, RouterLink, Logo, Icon, Spacer, TextField } from "../../components";
import { RootState, actions, getIsUserLoggedIn } from "../../store";
import { useRootSelector } from "../../utils";
import { useStyles } from "./utils";

export const Login: FunctionComponent = () => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const email = useSelector<RootState, string | undefined>((state) => state.user.email);
    const password = useSelector<RootState, string | undefined>((state) => state.user.password);
    const isUserLoggedIn = useRootSelector<boolean>((state) => getIsUserLoggedIn(state));

    const history = useHistory();
    const location = useLocation<{ from: { pathname: string } }>();

    const login = () => dispatch(actions.user.login());

    useEffect(() => {
        const from = location.state?.from ?? { pathname: "/" };
        if (isUserLoggedIn) {
            history.replace(from);
        }
    }, [isUserLoggedIn, history, location]);

    return (
        <Box className={classes.root}>
            <Box className={classes.content}>
                <Logo size="big" />
                <form className={classes.form} noValidate>
                    <Spacer size={2} direction="column" />
                    <TextField
                        isRequired={true}
                        isFullWidth={true}
                        value={email ?? ""}
                        label="E-mail"
                        type="email"
                        onEnterPress={login}
                        autoComplete="email"
                        isAutofocusActive={true}
                        onChange={(value) => dispatch(actions.user.setEmail(value))}
                        startIcon={<Icon name="at" size="tiny" variant="disabled" />}
                    />
                    <Spacer size={3} direction="column" />
                    <TextField
                        isRequired={true}
                        value={password ?? ""}
                        isFullWidth={true}
                        onEnterPress={login}
                        label="Heslo"
                        type="password"
                        onChange={(value) => dispatch(actions.user.setPassword(value))}
                        autoComplete="current-password"
                        startIcon={<Icon name="password" size="tiny" variant="disabled" />}
                    />
                    <Spacer size={1} direction="column" />
                    <Button
                        fullWidth={true}
                        variant="contained"
                        color="primary"
                        onClick={login}
                        className={classes.submit}
                    >
                        Přihlásit
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <RouterLink to="zapomenute-heslo">
                                Zapomenuté heslo?
                            </RouterLink>
                        </Grid>
                        <Grid item>
                            <RouterLink to="registrace">
                                Nemáte účet?
                            </RouterLink>
                        </Grid>
                    </Grid>
                </form>
            </Box>
            <Spacer size={6} direction="column" />
            <Copyright />
        </Box>
    );
}
