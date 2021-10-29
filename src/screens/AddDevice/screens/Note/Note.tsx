import { FunctionComponent } from "react";
import { useDispatch } from "react-redux";
import { Box, Typography } from "@material-ui/core";

import { INVENTORY_LINK } from "../../../../constants";
import { Delimiter, FileLine, NavigationButtons, PageTitle, TextField } from "../../../../components";
import { actions } from "../../../../store";
import { useNavigate, useRootSelector } from "../../../../utils";
import { strings } from "../../../../strings";
import { pageMap } from "../../utils";
import { useStyles } from "./utils";

export const Note: FunctionComponent = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { navigate } = useNavigate();
    const note = useRootSelector<string | undefined>((state) => state.newDevice.note);
    const attachmentUrlList = useRootSelector<string[] | undefined>((state) => state.newDevice.attachmentUrlList);

    return (
        <Box>
            <PageTitle text="Chcete ještě něco doplnit?" />
            <FileLine
                fileUrlList={attachmentUrlList}
                onConfirm={(fileUrlList) => {
                    fileUrlList.forEach((fileUrl) => {
                        dispatch(actions.newDevice.addAttachmentUrl(fileUrl));
                    });
                }}
                onRemoveItem={(fileUrl) => dispatch(actions.newDevice.removeAttachmentUrl(fileUrl))}
            />
            <Delimiter />
            <Typography
                component="div"
                variant="subtitle1"
                className={classes.noteTitle}
            >
                Poznámka
            </Typography>
            <TextField
                value={note}
                isMultiline={true}
                isSelectAllOnFocusActive={true}
                className={classes.note}
                onChange={(value) => dispatch(actions.newDevice.setNote(value))}
            />
            <Delimiter />
            <NavigationButtons
                onPreviousClick={() => navigate(`./${pageMap["initial"].address}`)}
                previousText={strings.previous}
                nextText={strings.complete}
                onNextClick={() => {
                    dispatch(actions.newDevice.save());
                    navigate(`/${INVENTORY_LINK}`);
                }}
            />
        </Box >
    );
};
