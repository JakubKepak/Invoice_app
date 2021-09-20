import { FunctionComponent } from "react";
import { Box, Typography, Button } from "@material-ui/core";
import { Shimmer, Image } from "react-shimmer";

import { RouterLink, Spacer } from "../../../../components";
import { ADD_LINK, PHOTO_VIN_LINK } from "../../../../constants";
import { pageMap } from "../../utils";
import { useStyles } from "./utils";

export const Vin: FunctionComponent = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Typography component="div" variant="subtitle2" className={classes.label}>
                Ukázka umíštění VIN kódu
            </Typography>
            <Image
                src="/img/vin.jpg"
                fadeIn={true}
                NativeImgProps={{
                    alt: "Umístění",
                    className: classes.image,
                }}
                fallback={
                    <Shimmer
                        width={600}
                        height={300}
                        className={classes.image}
                    />
                }
            />
            <Spacer size={2} direction="column" />
            <RouterLink to={`/${PHOTO_VIN_LINK}`}>
                <Button fullWidth={true} variant="contained" color="primary">Vyfotit VIN kód</Button>
            </RouterLink>
            <Spacer size={2} direction="column" />
            <RouterLink to={`./${pageMap["basic"].address}`}>
                <Button fullWidth={true} variant="outlined" color="primary">Zadat údaje ručně</Button>
            </RouterLink>
            <Spacer size={2} direction="column" />
            <RouterLink to={`/${ADD_LINK}`}>
                <Button fullWidth={true} variant="outlined" color="default">Zrušit</Button>
            </RouterLink>
        </Box>
    );
};
