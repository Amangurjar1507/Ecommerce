import React, {FC} from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {
  Button,
  CustomStatusbar,
  InputContainer,
} from '../../../components/componentsIndex';
import color from '../../../theme/color';
import useSignUp from './useSignUp';
import styles from './signUp.style';

const SignUp: FC = () => {
  const {
    data,
    setData,
    textInputChange,
    updateSecureTextEntry,
    handlePasswordChange,
    signupUserWithEmailAndPassword,
    loading,
    onLogin,
  } = useSignUp();

  return (
    <View style={styles.container}>
      <CustomStatusbar backgroundColor={color.customStatusbar} />
      <View style={styles.header}>
        <Text style={styles.text_header}>Register Now!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={[styles.footer]}>
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <ScrollView
            bounces={false}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled">
            <Text style={styles.text_footer}>Your Email</Text>
            <View style={styles.action}>
              <InputContainer
                placeholder="Email"
                placeholderTextColor={color.backGray}
                onChangeText={textInputChange}
                value={data.userEmail}
              />
            </View>
            {data.isValidUser ? null : (
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>Please enter valid email</Text>
              </Animatable.View>
            )}
            <Text
              style={[
                styles.text_footer,
                {
                  marginTop: 35,
                },
              ]}>
              Your Password
            </Text>
            <View style={styles.action}>
              <InputContainer
                placeholder=" Password"
                placeholderTextColor={color.backGray}
                secureTextEntry={data.secureTextEntry ? true : false}
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(val: string) => handlePasswordChange(val)}
              />
              <TouchableOpacity
                onPress={updateSecureTextEntry}></TouchableOpacity>
            </View>
            {data.isValidPassword ? null : (
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>
                  Password must be 6 characters long.
                </Text>
              </Animatable.View>
            )}
            <View style={styles.button}>
              <Button
                onPress={signupUserWithEmailAndPassword}
                title=" Sign Up"
                colors={color.buttTextColor}
                textColor={color.white}
                isLoading={loading}
              />
              <Text onPress={onLogin} style={styles.sign}>
                Login
              </Text>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </Animatable.View>
    </View>
  );
};

export default SignUp;
