import { FunctionComponent } from "react";

export type UnpluggerProps = {
    isPlugged: boolean,
}

export const Unplugger: FunctionComponent<UnpluggerProps> = ({ isPlugged, children }) => isPlugged ? <>{children}</> : null;
