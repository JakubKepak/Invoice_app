import { FunctionComponent, SyntheticEvent, useState } from "react";
import { Grid, IconButton, Typography } from "@material-ui/core";
import { Delete } from "@material-ui/icons";

import { useStyles } from "./utils";
import { AttachmentDialog } from "../AttachmentDialog";
import { TextLine } from "../TextLine";

export type FileLineProps = {
    fileUrlList: string[] | undefined,
    onConfirm: (fileUrlList: string[]) => void,
    onRemoveItem: (fileUrl: string) => void,
    description?: string,
}

export const FileLine: FunctionComponent<FileLineProps> = ({
    fileUrlList,
    onConfirm,
    onRemoveItem,
    description,
}) => {
    const classes = useStyles();
    const [isAttachmentDialogOpened, setIsAttachmentDialogOpened] = useState(false);

    const handleSave = (fileList: File[], event: SyntheticEvent) => {
        event.stopPropagation(); // Nejspíš chyba knihovny _material-ui-dropzone_
        onConfirm(fileList.map((file) => file.name));
        setIsAttachmentDialogOpened(false);
    }

    return (
        <Grid>
            <TextLine
                onClick={() => setIsAttachmentDialogOpened(true)}
                title="Přílohy"
                rightText="Přidat"
                description={description}
                isBottomDelimiterActive={false}
            />
            {(fileUrlList !== undefined && fileUrlList.length !== 0) ? (
                <Grid className={classes.attachmentList}>
                    {fileUrlList?.map((fileUrl) => (
                        <Grid
                            container={true}
                            justifyContent="space-between"
                            alignItems="center"
                            key={fileUrl}
                        >
                            <Typography
                                component="div"
                                variant="subtitle1"
                                className={classes.attachment}
                            >
                                {fileUrl}
                            </Typography>
                            <IconButton onClick={() => onRemoveItem(fileUrl)}>
                                <Delete className={classes.iconButton} />
                            </IconButton>
                        </Grid>
                    ))}
                </Grid>
            ) : null}
            <AttachmentDialog
                isOpened={isAttachmentDialogOpened}
                onSave={handleSave}
                onClose={() => setIsAttachmentDialogOpened(false)}
            />
        </Grid>
    )
};
