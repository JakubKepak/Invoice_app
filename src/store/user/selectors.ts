import { RootState } from "../store";

const getState = (state: RootState) => state.user;

const getUserEmail = (state: RootState) => getState(state).email;

const getUserPassword = (state: RootState) => getState(state).password;

const getUserLoggedHash = (state: RootState) => getState(state).loggedHash;

export const getUserCredentials = (state: RootState) => ({
    email: getUserEmail(state),
    password: getUserPassword(state),
});

export const getIsUserLoggedIn = (state: RootState) => getUserLoggedHash(state) !== undefined;
