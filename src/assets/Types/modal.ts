export interface ModalData {
  title: string;
  closeFunction: () => void;
  message: string;
  textareaPlaceholder?: string;
  textareaValue?: "string";
  textareaFunction?: () => void;
  confirmText?: string;
  confirmFunction?: () => void;
  cancelText?: string;
  cancelFunction?: () => void;
}
