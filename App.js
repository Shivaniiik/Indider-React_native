import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import About from './About';
import Home from './Home';
import Login from './Login';



export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name='Sign in with google ' component={Login} options={{headerShown : false}} />
        <Stack.Screen name='Insider' component={Home} options={{headerShown : false}} />
        <Stack.Screen name='AR Rahman Concert for feeding' component={About} />
      </Stack.Navigator>      
    </NavigationContainer>
  )
}
