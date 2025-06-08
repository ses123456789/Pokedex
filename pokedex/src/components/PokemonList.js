import {  ActivityIndicator, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import PokemonCard from './PokemonCard'


export default function PokemonList(props) {
    const {pokemons, loadPokemons, isNext}=props
    const loadmore= ()=>{
      loadPokemons()
    }

  return (
   <FlatList
   data= {pokemons}
   numColumns={2}
   showsVerticalScrollIndicator= {false}
   keyExtractor={(pokemon) => {
  
  const urlId = pokemon.url.split('/').filter(Boolean).pop();
  return `pokemon-${urlId}`;
}}
   renderItem={({item})=><PokemonCard pokemon= {item}/>}
   contentContainerStyle={styles.flatListContentContainer}
   onEndReached={isNext&&loadmore}
   onEndReachedThreshold={0.1}
   ListFooterComponent={
   isNext &&(
     <ActivityIndicator
    size= "large"
    style= {styles.spinner}
    color= "#AEAEAE"
    />
 )
   }
   
   />
  )
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5
  },
  spinner: {
    marginTop: 20,
    marginBottom: 60
  }
});