import { FunctionComponent, SyntheticEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Grid, IconButton, Typography } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { DropzoneDialog } from "material-ui-dropzone";

import { INVENTORY_LINK } from "../../../../constants";
import { actions, RootState } from "../../../../store";
import { convertBytesToMbsOrKbs, useNavigate } from "../../../../utils";
import { NavigationButtons, PageTitle } from "../../components";
import { pageMap } from "../../utils";
import { useStyles } from "./utils";
import { TextField } from "../../../../components";

export const Note: FunctionComponent = () => {
    const [isAttachmentDialogOpened, setIsAttachmentDialogOpened] = useState(false);

    const classes = useStyles();
    const dispatch = useDispatch();
    const [navigate] = useNavigate();

    const note = useSelector<RootState, string | undefined>((state) => state.newDevice.note);
    const attachmentUrlList = useSelector<RootState, string[] | undefined>((state) => state.newDevice.attachmentUrlList);

    const handleSave = (fileList: File[], event: SyntheticEvent) => {
        event.stopPropagation(); // Nejspíš chyba knihovny _material-ui-dropzone_
        fileList.forEach((file) => {
            dispatch(actions.newDevice.addAttachmentUrl(file.name));
        });
        setIsAttachmentDialogOpened(false);
    }

    return (
        <Box>
            <PageTitle text="Chcete ještě něco doplnit?" />
            <Box>
                <Grid className={classes.attachmentGrid}>
                    <Grid
                        container={true}
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Typography
                            component="div"
                            variant="subtitle1"
                            className={classes.title}
                        >
                            Přílohy
                        </Typography>
                        <Typography
                            component="div"
                            variant="subtitle1"
                            className={classes.textButton}
                            onClick={() => setIsAttachmentDialogOpened(true)}
                        >
                            Přidat
                        </Typography>
                    </Grid>
                    <DropzoneDialog
                        open={isAttachmentDialogOpened}
                        onSave={handleSave}
                        acceptedFiles={["image/jpeg", "image/png", "image/bmp"]}
                        showPreviews={true}
                        dropzoneText="Klikněte pro nahrání"
                        maxFileSize={5000000} // Velikost v bytech
                        onClose={(event: SyntheticEvent) => {
                            event.stopPropagation(); // Nejspíš chyba knihovny _material-ui-dropzone_
                            setIsAttachmentDialogOpened(false);
                        }}
                        submitButtonText="Nahrát"
                        dialogTitle={""}
                        cancelButtonText="Zrušit"
                        getFileAddedMessage={() => "Soubor byl úspěšně přidán. "}
                        previewText="Náhled"
                        getFileLimitExceedMessage={(filename) => `Soubor ${filename} je příliš velký. `}
                        getFileRemovedMessage={() => "Soubor úspěšně smazán. "}
                        getDropRejectMessage={(rejectedFile, acceptedFiles, maxFileSize) => {
                            let message = "Soubor ".concat(rejectedFile.name, " byl zamítnut. ");
                            if (!acceptedFiles.includes(rejectedFile.type)) {
                                message += "Typ souboru není podprován. ";
                            }
                            if (rejectedFile.size > maxFileSize) {
                                message += "Soubor je příliš velký. Maximální velikost je " + convertBytesToMbsOrKbs(maxFileSize) + ". ";
                            }
                            return message;
                        }}
                    />
                    {attachmentUrlList?.map((attachmentUrl) => (
                        <Grid
                            container={true}
                            justifyContent="space-between"
                            alignItems="center"
                            key={attachmentUrl}
                        >
                            <Typography
                                component="div"
                                variant="subtitle1"
                                className={classes.attachment}
                            >
                                {attachmentUrl}
                            </Typography>
                            <IconButton onClick={() => dispatch(actions.newDevice.removeAttachmentUrl(attachmentUrl))}>
                                <Delete className={classes.iconButton} />
                            </IconButton>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Typography
                component="div"
                variant="subtitle1"
                className={classes.title}
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
            <NavigationButtons
                onPreviousClick={() => navigate(`./${pageMap["initial"].address}`)}
                nextText="Dokončit"
                onNextClick={() => {
                    dispatch(actions.newDevice.save());
                    navigate(`/${INVENTORY_LINK}`);
                }}
            />
        </Box >
    );
};
