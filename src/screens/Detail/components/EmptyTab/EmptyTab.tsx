import { FunctionComponent } from "react";
import { Typography } from "@material-ui/core";

import { Spacer } from "../../../../components";

export const EmptyTab: FunctionComponent = () => (
    <>
        <Spacer size={2} direction="column" />
        <Typography component="div" variant="subtitle2" align="center">
            Zatím nejsou dostupné žádné záznamy
        </Typography>
    </>
);
