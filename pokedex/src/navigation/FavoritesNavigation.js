
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import FavoritesScreen from '../screens/FavoritesScreen';
import PokemonScreen from '../screens/PokemonScreen';

const Stack= createNativeStackNavigator();

export default function FavoritesNavigation() {
  return (
     <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: 'bold'
        },       
        headerStyle: {
          marginTop:20
        },
        
      }}
    >
        <Stack.Screen name='FavoriteScreen' component={FavoritesScreen}
         options={{
          title:"Favorites", 
          
        }}
        />
            <Stack.Screen name='PokemonScreen' component={PokemonScreen}
         options={{
          headerShown:true, 
          title: "",
          headerTransparent: true
        }}
        />
    </Stack.Navigator>

  )
}