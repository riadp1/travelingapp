import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Intro from './screens/Intro';
import SplashIcon from './screens/SplashIcon';
import LoginScreen from './screens/LoginScreen';
import Explore from './screens/Explore';

import { useState } from 'react';
import Info from './screens/Info';

 

const Stack = createNativeStackNavigator();





export default function App() {

 
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="intro" component={Intro} />
      <Stack.Screen name="splash" component={SplashIcon} options={{ headerShown: false }} />
      <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="explore" component={Explore} options={{ headerShown: false }} />
      <Stack.Screen name="info" component={Info} options={{ headerShown: false }} />
           
         
       
    </Stack.Navigator>
  </NavigationContainer>
  );
}


