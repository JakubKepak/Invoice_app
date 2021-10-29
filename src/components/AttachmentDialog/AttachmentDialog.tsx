import { FunctionComponent, SyntheticEvent } from "react";
import { DropzoneDialog } from "material-ui-dropzone";

import { convertBytesToMbsOrKbs } from "../../utils";
import { strings } from "../../strings";

export type AttachmentDialogProps = {
    isOpened: boolean,
    onSave: (fileList: File[], event: SyntheticEvent) => void,
    onClose: () => void,
}

export const AttachmentDialog: FunctionComponent<AttachmentDialogProps> = ({
    isOpened,
    onSave,
    onClose,
}) => {
    return (
        <DropzoneDialog
            open={isOpened}
            onSave={onSave}
            acceptedFiles={["image/jpeg", "image/png", "image/bmp"]}
            showPreviews={true}
            dropzoneText="Klikněte pro nahrání"
            maxFileSize={5000000} // Velikost v bytech
            onClose={(event: SyntheticEvent) => {
                event.stopPropagation(); // Nejspíš chyba knihovny _material-ui-dropzone_
                onClose();
            }}
            submitButtonText="Nahrát"
            dialogTitle={""}
            cancelButtonText={strings.cancel}
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
    );
};
