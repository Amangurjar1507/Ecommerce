import React, {useCallback, useState} from 'react';
import {useAuthNavigation} from '../../../hooks/useAppNavigation';
import Snackbar from 'react-native-snackbar';
import {Alert} from 'react-native';
import color from '../../../theme/color';
import auth from '@react-native-firebase/auth';
import {strongRegex} from '../../../validation/stringValidation';

const useSignUp = () => {
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

  const signupUserWithEmailAndPassword = () => {
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
      .createUserWithEmailAndPassword(data.userEmail, data.password)
      .then(() => {
        setData('');
        Snackbar.show({
          text: 'You have signed up successfully',
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
        setLoading(false);

        navigation.navigate('Login');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('The email address is already in use');
          setLoading(false);
        } else if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
          setLoading(false);
        } else if (error.code === 'auth/weak-password') {
          Alert.alert('Password is too weak');
          setLoading(false);
        } else if (error.code === 'auth/internal-error') {
          Alert.alert('An internal error occurred');
          setLoading(false);
        } else {
           Alert.alert('An unknown error occurred');
          setLoading(false);
        }
      });
  };

  //** Navigate to HomeBottomTabs screen */
  const onLogin = useCallback(() => {
    navigation.navigate('Login');
  }, [navigation]);

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
    if (val.trim().length >= 6) {
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

  const handleValidUser = (val: string) => {
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

  return {
    loading,
    onLogin,
    data,
    setData,
    textInputChange,
    updateSecureTextEntry,
    handlePasswordChange,
    handleValidUser,
    signupUserWithEmailAndPassword,
  };
};

export default useSignUp;
