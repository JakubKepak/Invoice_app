import { FunctionComponent, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { Loading } from "../../components";
import { LOGIN_LINK } from "../../constants";
import { actions } from "../../store";

export const Logout: FunctionComponent = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(actions.user.logout());
        history.push(LOGIN_LINK);
    }, [history, dispatch]);

    return (
        <Loading />
    );
};
