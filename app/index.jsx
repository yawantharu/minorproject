import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetails from './screens/ProductDetails';
import HomeScreen from './Screens/HomeScreen';

const Stack = createNativeStackNavigator()

export default function Index() {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={
        {
          headerShown: false
        }
      }>
      <Stack.Screen name='ProductDetails' component={ProductDetails} />
      <Stack.Screen name='Home' component={HomeScreen} />
    </Stack.Navigator>
  )
}