import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { Component } from 'react'
import { Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import FavoritesNavigation from './FavoritesNavigation';
import PokedexNavigation from './PokedexNavigation';
import AccountNavigation from './AccountNavigation';

const Tab= createBottomTabNavigator(); 
export default function Navigation(){
    return (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',                     
        },
        
       
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;          
           if (route.name === 'Favorites') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'Account') {
            iconName = focused ? 'person' : 'person-outline';
          }          
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato', 
        tabBarInactiveTintColor: 'gray', 
      })}
    >        
            <Tab.Screen name= "Favorites" component={FavoritesNavigation }
             

            />
            <Tab.Screen name= "Pokedex" component={PokedexNavigation} options={{
                 headerShown: false,
                tabBarLabel: "",
                tabBarIcon: () => RenderPokedex(),
                 // headerTransparent: true 
            }}/>
            <Tab.Screen name= "Account" component={AccountNavigation}/>
        </Tab.Navigator>
      
    )
  
}

function RenderPokedex(){
    return(
        <Image
            source={require('../assets/pokedex.png')}
            style = {{ width: 70, height: 70, top: -15}}
        />
    )
}