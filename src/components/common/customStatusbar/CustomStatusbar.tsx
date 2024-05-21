 import React, {FC, memo} from 'react';
import {StatusBar, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {CustomStatusBarProps} from './customStatusbarProps';
 
const CustomStatusBar: FC<CustomStatusBarProps> = ({
  containerStyle,
  backgroundColor,
  barStyle,
  animated,
  translucent,
  hidden,
  ...props
}) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        {
          height: insets.top,
          backgroundColor: backgroundColor,
        },
        containerStyle,
      ]}>
      <StatusBar
        animated={animated}
        backgroundColor={backgroundColor}
        barStyle={barStyle}
        translucent={translucent}
        hidden={hidden}
        {...props}
      />
    </View>
  );
};
export default memo(CustomStatusBar);
 