import {FC, useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../screens/auth/login/Login';
import SignUp from '../../screens/auth/signUp/SignUp';
import GetStarted from '../../screens/auth/getStarted/GetStarted';
import Home from '../../screens/bottomScreen/home/Home';
import AddBag from '../../screens/bottomScreen/addBag/AddBag';
import auth from '@react-native-firebase/auth';

export type RootStackParams = {
  GetStarted: undefined;
  Login: undefined;
  SignUp: undefined;
  Home: undefined;
  AddBag: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

const RootStack: FC = () => {
  const [user, setUser] = useState(null); // Initialize user state

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(newUser => {
      setUser(newUser);
    });

    // Clean up subscription on unmount
    return unsubscribe;
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {!user ? (
        <>
          <Stack.Screen name="GetStarted" component={GetStarted} />
        </>
      ) : (
        <Stack.Screen name="Home" component={Home} />
      )}
      <Stack.Screen name="SignUp" component={SignUp} />

      <Stack.Screen name="AddBag" component={AddBag} />

      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default RootStack;
