import React, {FC, memo} from 'react';
import {
  ActivityIndicator,
  ActivityIndicatorProps,
  ColorValue,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';
import style from './button.style';
import LinearGradient from 'react-native-linear-gradient';
import color from '../../../theme/color';

const Button: FC<any> = ({
  onPress,
  title,
  isLoading,
  colors,
  textColor,
  buttonStyle,
  linearStyle
}) => {
  return (
    <TouchableOpacity style={[style.button, buttonStyle]} onPress={onPress}
    >
      <LinearGradient colors={colors} style={[style.button,linearStyle]}>
        {isLoading ? (
          <ActivityIndicator size="small" color={color.white} />
        ) : (
          <Text style={[style.text, {color: textColor}]}>{title}</Text>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default memo(Button);
