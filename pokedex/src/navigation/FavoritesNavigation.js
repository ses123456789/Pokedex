
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import FavoritesScreen from '../screens/FavoritesScreen';

const Stack= createNativeStackNavigator();

export default function FavoritesNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen name='FavoriteScreen' component={FavoritesScreen}
         options={{
          headerShown: false, 
        }}
        />
    </Stack.Navigator>

  )
}