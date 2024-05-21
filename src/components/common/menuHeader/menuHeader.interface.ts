 import {StyleProp, ViewStyle} from 'react-native/types';

export interface menuHeaderProps {
  image?: boolean;
  closeImage?: boolean;
  onEdit?: () => void;
  name?: string;
  containerStyle?: StyleProp<ViewStyle> | undefined;
  onpress?: () => void;
}
