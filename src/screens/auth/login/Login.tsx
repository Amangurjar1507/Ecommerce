import React, {FC} from 'react';
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import useLogin from './useLogin';
import {
  Button,
  CustomStatusbar,
  InputContainer,
} from '../../../components/componentsIndex';
import styles from './login.style';
import color from '../../../theme/color';

const Login: FC = () => {
  const {
    data,
    textInputChange,
    handlePasswordChange,
    handleLogin,
    handleSignUp,
    loading,
  } = useLogin();

  return (
    <View style={styles.container}>
      <CustomStatusbar backgroundColor={color.customStatusbar} />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <ScrollView
            bounces={false}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled">
            <Text style={styles.text_footer}>UserEmail</Text>
            <View style={styles.action}>
              <InputContainer
                placeholder="UserEmail"
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
              Password
            </Text>
            <View style={styles.action}>
              <InputContainer
                placeholder="Your Password"
                // secureTextEntry={data.secureTextEntry ? true : false}
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(val: any) => handlePasswordChange(val)}
                secureTextEntry={true}
              />
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
                onPress={handleLogin}
                title="Login"
                colors={color.buttTextColor}
                textColor={color.white}
                isLoading={loading}
              />
              <Text onPress={handleSignUp} style={styles.sign}>
                Sign Up
              </Text>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </Animatable.View>
    </View>
  );
};

export default Login;
