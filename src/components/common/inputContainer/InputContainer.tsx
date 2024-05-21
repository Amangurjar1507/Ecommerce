import React, {FC, memo, useState} from 'react';
import {TextInput, View, TouchableOpacity, Text, Image} from 'react-native';
import styles from './inputContainer.style';
import color from '../../../theme/color';
import imageIndex from '../../../assets/imageIndex';

const InputContainer: FC<any> = ({
  placeholder,
  onChangeText,
  value,
  secureTextEntry,
  autoCapitalize,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(secureTextEntry);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={color.backGray}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={isPasswordVisible}
        autoCapitalize={autoCapitalize}
      />
      {secureTextEntry && (
        <TouchableOpacity
          onPress={togglePasswordVisibility}
          style={{
            marginLeft: 10,
            alignItems: 'flex-end', // Align button to end horizontally
            justifyContent: 'center',
          }}>
          <Image
            tintColor={color.white}
            style={{height: 20, width: 22}}
            source={isPasswordVisible ? imageIndex.eyes : imageIndex.hide}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default memo(InputContainer);
