import React from "react";
import ReactDOM from "react-dom";
import { CssBaseline } from "@material-ui/core";

import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import { App } from "./App";
import "./index.scss";

ReactDOM.render(
    <React.StrictMode>
        <CssBaseline />
        <App />
    </React.StrictMode>,
    document.getElementById("root"),
);

serviceWorkerRegistration.register();
reportWebVitals();
