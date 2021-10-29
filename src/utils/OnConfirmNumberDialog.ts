export type OnConfirmNumberDialog = {
    value: number | undefined,
    closeDialog: () => void,
    setDialogErrorMessage: (errorMessage: string | undefined) => void,
}
