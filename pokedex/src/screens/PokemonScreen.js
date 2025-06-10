import { ScrollView, View, Text} from 'react-native'
import {React, useEffect, useState} from 'react'
import Header from '../components/PokemonInfo/Header';
import Types from '../components/PokemonInfo/Types';
import Stats from '../components/PokemonInfo/Stats';
import { Ionicons } from '@expo/vector-icons';
import Characteristics from '../components/PokemonInfo/Characteristics';
import Favorite from '../components/PokemonInfo/Favorite';
import UseAuth from '../hooks/UseAuth'
export default function PokemonScreen({route,navigation}) {

  const pokemon = route?.params?.pokemon
  const {auth} = UseAuth()

    if (!pokemon) {
    console.warn('No se recibió un Pokémon');
    return (
      <View>
        <Text>Pokémon no disponible</Text>
      </View>
    );
  }
  useEffect(() => {
    navigation.setOptions({
      headerRight: () =>auth ?<Favorite id= {pokemon.id}/>: undefined,
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
  return (
    <ScrollView>
      <Header 
      name= {pokemon.name} 
      id= {pokemon.id}       
      types= {pokemon.types}
      image= {pokemon.image}      
      />
      <Characteristics 
      weight={pokemon.weight}
      height= {pokemon.height}
      ability= {pokemon.ability}
      
      />
      <Types  types= {pokemon.types}/>
      <Stats stats={pokemon.stats}/>
    </ScrollView>
     
  )
}