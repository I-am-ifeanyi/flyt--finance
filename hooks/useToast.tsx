import Toast from 'react-native-toast-message';

type Props = {
  title?: string;
  message: string;
};

export const useToast = () => {
  const error = ({ title, message }: Props) => {
    Toast.show({
      type: 'error',
      text1: title || 'Error',
      text2: message,
    });
  };

  const success = ({ title, message }: Props) => {
    Toast.show({
      type: 'success',
      text1: title || 'Success',
      text2: message,
    });
  };

  const info = ({ title, message }: Props) => {
    Toast.show({
      type: 'info',
      text1: title,
      text2: message,
    });
  };

  const custom = ({ title, message }: Props) => {
    Toast.show({
      type: 'tomato',
      text1: title || 'Error',
      text2: message,
    });
  };

  return { error, success, info, custom };
};
