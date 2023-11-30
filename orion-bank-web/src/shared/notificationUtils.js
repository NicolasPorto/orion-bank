import { toast } from 'react-toastify';

export const showSuccessNotification = (message) => {
  toast.success(message);
};

export const showErrorNotification = (message) => {
  toast.error(message);
};