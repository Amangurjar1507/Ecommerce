import Snackbar from 'react-native-snackbar';
import font from '../theme/font';
import color from '../theme/color';

export const ToastMessage = (
  text: string,
  backgroundColor?: string,
  marginBottom?: number,
  textColor?: string,
   onDismiss?: () => void // Added onDismiss as an optional parameter
) => {
  return Snackbar.show({
    text: text,
    textColor: textColor,
    backgroundColor: backgroundColor,
    marginBottom: marginBottom,
    fontFamily: font.PoppinsSemiBold,
    duration: 2200, // Use duration if provided, otherwise default to LENGTH_SHORT
    action: {
      text: 'Cancel',
      textColor: textColor ??  color.black, // Fallback to white if textColor is not provided
       onPress: () => {
        Snackbar.dismiss(); // Dismiss the snackbar when action button is pressed
        if (onDismiss) {
          onDismiss();
        }
      }
    },
    onDismiss: () => {
      if (onDismiss) {
        onDismiss();
      }
    }
  });
};
