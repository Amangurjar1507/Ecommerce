import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
  import HomeScreen from '../screens/HomeScreen';
 
 
const Stack = createNativeStackNavigator();

function Route() {
   
  return (
    <NavigationContainer>
      <Stack.Navigator 
         screenOptions={{
          cardOverlayEnabled: true,
          headerShown: false,
        }}
      >
      
           <Stack.Screen name="Home" component={HomeScreen} />
 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Route;
