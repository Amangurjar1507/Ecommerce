import {StatusBarProps, StyleProp, ViewStyle} from 'react-native';

interface CustomStatusBarProps {
  statusBarProps?: StatusBarProps;
  containerStyle?: StyleProp<ViewStyle> | undefined;
  backgroundColor?: string;
  animated?: boolean | undefined;
  translucent?: boolean | undefined;
  barStyle?: 'default' | 'dark-content' | 'light-content';
  hidden?: boolean | undefined;
}
