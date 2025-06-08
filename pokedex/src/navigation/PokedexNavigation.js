
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import PokedexScreen from '../screens/PokedexScreen';
import PokemonScreen from '../screens/PokemonScreen';

const Stack= createNativeStackNavigator();

export default function PokedexNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen name='PokedexScreen' component={PokedexScreen}
         options={{
          title: "",
          headerShown: true,
          headerTransparent: true 
        }}
        />
          <Stack.Screen name='PokemonScreen' component={PokemonScreen}
         options={{
          headerShown: true, 
          title: "",
          headerTransparent: true
        }}
        />
    </Stack.Navigator>

  )
}