import { ScrollView, View, Text} from 'react-native'
import {React, useEffect, useState} from 'react'
import Header from '../components/PokemonInfo/Header';
import Types from '../components/PokemonInfo/Types';
import Stats from '../components/PokemonInfo/Stats';
import { Ionicons } from '@expo/vector-icons';

export default function PokemonScreen({route,navigation}) {
const pokemon = route?.params?.pokemon
useEffect(() => {
    navigation.setOptions({
      headerRight: () => null,
      headerLeft: () => (       
           <Ionicons
          name="arrow-back"
          color="#fff"
          size={30}
          style={{ marginLeft: 20 }}
          onPress={navigation.goBack}
        />    
       
        
      ),
    });
  }, [navigation]);

    if (!pokemon) {
    console.warn('No se recibió un Pokémon');
    return (
      <View>
        <Text>Pokémon no disponible</Text>
      </View>
    );
  }
  
  return (
    <ScrollView>
      <Header 
      name= {pokemon.name} 
      id= {pokemon.id}       
      types= {pokemon.types}
      image= {pokemon.image}      
      />
      <Types  types= {pokemon.types}/>
      <Stats stats={pokemon.stats}/>
    </ScrollView>
     
  )
}