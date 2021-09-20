import { FunctionComponent } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

import { LOGIN_LINK } from "../../constants";
import { getIsUserLoggedIn } from "../../store";
import { useRootSelector } from "../../utils";

export type PrivateRouteProps = RouteProps;

export const PrivateRoute: FunctionComponent<PrivateRouteProps> = ({ children, ...rest }) => {
    const isUserLoggedIn = useRootSelector<boolean>((state) => getIsUserLoggedIn(state));

    return (
        <Route
            {...rest}
            render={({ location }) => isUserLoggedIn ? children : (
                <Redirect
                    to={{
                        pathname: `/${LOGIN_LINK}`,
                        state: { from: location }
                    }}
                />
            )}
        />
    );
};
