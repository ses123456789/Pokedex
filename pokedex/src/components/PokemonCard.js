import { View, Text, StyleSheet, Image, TouchableWithoutFeedback} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import GetColors from '../utils/GetColorbyType'
import {capitalize} from "lodash"

export default function PokemonCard(props) {
    const {pokemon}= props
    const navigation = useNavigation()
    const pokemoncolor= GetColors(pokemon.types[0])
    
   const bgcolor= {backgroundColor: pokemoncolor, ...styles.bgstyles }
    const GoToPokemon= ()=>{
        
         navigation.navigate("PokemonScreen",{pokemon})
    }
  return (
  <TouchableWithoutFeedback onPress= {GoToPokemon}> 
<View style= {styles.card}>
    <View style= {styles.spacing}>
        <View style= {bgcolor}> 
            <Text style= {styles.number}>#{`${pokemon.id}`.padStart(3,0)}</Text>
            <Text style ={styles.name} >{capitalize (pokemon.name)}</Text>
            <Image source={{uri: pokemon.image}} style= {styles.image} />
        </View>
    
</View>
</View>
  </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130
  },
  spacing: {
    flex: 1,
    padding: 5
  },
  bgstyles: {
   flex: 1,
   padding: 5
  },
    name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10
  },
  number: {
    position: "absolute",
    right: 10,
    top: 10,
    color: "#fff",
    fontSize: 11,
  },
  image: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 90,
    height: 90
  }

});