import { toast } from 'react-toastify';

// contactform api

const toTitleCase = phrase => {
  return phrase
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const phoneNumberAutoFormat = phoneNumber => {
  const number = phoneNumber.trim().replace(/[^0-9]/g, '');

  if (number.length < 4) return number;
  if (number.length < 7) return number.replace(/(\d{3})(\d{1})/, '$1-$2');
  if (number.length < 11)
    return number.replace(/(\d{3})(\d{3})(\d{1})/, '$1-$2-$3');
  return number.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
};

// toast api

const toastMsg = () =>
  toast.success('New contact created!', {
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });

const toastContactSucces = () =>
  toast.success('Contact deleted!', {
    position: 'top-center',
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });

const loginError = () =>
  toast.warn('Wrong password or email', {
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });

const sighupError = () =>
  toast.warn('Name or email already exists', {
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });

export {
  toTitleCase,
  phoneNumberAutoFormat,
  toastMsg,
  toastContactSucces,
  loginError,
  sighupError,
};
