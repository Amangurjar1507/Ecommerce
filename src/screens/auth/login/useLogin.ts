import React, {useCallback, useState} from 'react';
import {useAuthNavigation} from '../../../hooks/useAppNavigation';
import {Alert} from 'react-native';
import Snackbar from 'react-native-snackbar';
import color from '../../../theme/color';
import {strongRegex} from '../../../validation/stringValidation';
import auth from '@react-native-firebase/auth';

const useLogin = () => {
  const navigation = useAuthNavigation();
  const [loading, setLoading] = useState<boolean>(false);

  const [data, setData] = React.useState({
    userEmail: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  //** Navigate to HomeBottomTabs screen */
  const handleLogin = () => {
    if (!strongRegex.test(data.userEmail)) {
      Snackbar.show({
        text: 'Please enter a valid email',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: color.warning,
        action: {
          text: 'UNDO',
          textColor: color.white,
          onPress: () => {
            // Handle UNDO action if needed
          },
        },
      });
      return;
    } else if (data.password.length < 6) {
      Snackbar.show({
        text: 'Password must be at least 6 characters long',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: color.warning,
        action: {
          text: 'UNDO',
          textColor: color.white,
          onPress: () => {
            // Handle UNDO action if needed
          },
        },
      });
      return;
    }
    setLoading(true);
    auth()
      .signInWithEmailAndPassword(data.userEmail, data.password)
      .then(() => {
        setLoading(false);
         Snackbar.show({
          text: 'You are logged in successfully',
          duration: Snackbar.LENGTH_SHORT,
          backgroundColor: color.green,
          action: {
            text: 'UNDO',
            textColor: color.white,
            onPress: () => {
              // Handle UNDO action if needed
            },
          },
        });
        navigation.navigate('Home');
      })
      .catch(error => {
        setLoading(false);
        switch (error.code) {
          case 'auth/user-not-found':
          case 'auth/wrong-password':
            Alert.alert('Invalid email or password');
            break;
          case 'auth/invalid-email':
            Alert.alert('Invalid email address');
            break;
          case 'auth/internal-error':
            Alert.alert('Internal error occurred');
            break;
          default:
            Alert.alert('An error occurred. Please try again.');
            break;
        }
      });
  };

  //** Navigate to SignUp screen */
  const onClickSignUp = useCallback(() => {
    navigation.navigate('SignUp');
  }, [navigation]);

  //** Navigate to ForgotPassword screen */
   

  const textInputChange = (val: string) => {
    if (strongRegex.test(val.trim())) {
      setData({
        ...data,
        userEmail: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        userEmail: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = (val: string) => {
    if (val.trim().length>= 6) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleValidUser = (val: any) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };

  const handleSignUp = useCallback(() => {
    navigation.navigate('SignUp');
  }, [navigation]);

  return {
    handleLogin,
    onClickSignUp,
     setData,
    textInputChange,
    updateSecureTextEntry,
    handlePasswordChange,
    handleValidUser,
    handleSignUp,
    data,
    loading
  };
};

export default useLogin;
