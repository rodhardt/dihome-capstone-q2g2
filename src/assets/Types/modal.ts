export interface ModalData {
  title: string;
  closeFunction: () => void;
  message: string;
  textareaPlaceholder?: string;
  confirmButton?: {
    confirmText: string;
    confirmFunction: (input?: string) => void;
  };
  cancelButton?: { cancelText: string; cancelFunction: () => void };
}
