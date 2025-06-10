import {Text, View} from 'react-native'
import React from 'react'
import { getPokemonFavoritesAPI} from '../API/FavoritesAPI'
import { useState, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import UseAuth from '../hooks/UseAuth'
import { getPokemonDetailsApi } from '../API/Pokemon'
import PokemonList from '../components/PokemonList'
import NoLogged from '../components/NoLogged'

export default function FavoritesScreen() {
  
const [pokemons,setPokemons]= useState([])
const {auth} = UseAuth()
useFocusEffect(
 useCallback(() => {
    if (auth) {
        (async () => {
            const response = await getPokemonFavoritesAPI();
           
          const pokemonData = await Promise.all(
                response.map(async (id) => {
                  const pokemonInfo = await getPokemonDetailsApi(id);
                  
                  return {
                    id: pokemonInfo.id,
                    name: pokemonInfo.name,
                    types: pokemonInfo.types.map(t => t.type.name),
                    order: pokemonInfo.order,
                    image: pokemonInfo.sprites.other['official-artwork'].front_default,
                    ability: pokemonInfo.abilities.find(a => !a.is_hidden)?.ability.name || 'N/A',
                    weight: pokemonInfo.weight / 10,
                    height: pokemonInfo.height / 10,
                    url: `https://pokeapi.co/api/v2/pokemon/${pokemonInfo.id}/`,              
                    stats: pokemonInfo.stats.map(stat => ({
                      name: stat.stat.name,
                      base: stat.base_stat,
                  })),
                  };
                })
              );
              setPokemons(pokemonData)

        })();
    }
}, [auth])
)

  return (
    <View >
    {!auth ? <NoLogged/> : <PokemonList pokemons={pokemons} />}
  </View>
  )
  
}