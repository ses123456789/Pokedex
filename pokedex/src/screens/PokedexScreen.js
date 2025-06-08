import { View } from 'react-native'
import React, {useEffect, useState} from 'react'
import { GetPokemonapi, GetPokemonInfobyURLApi } from '../API/Pokemon';
import PokemonList from '../components/PokemonList';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PokedexScreen() {
 
 const  [pokemons , setPokemons]=useState([])
 const [nextUrl, setNextUrl]= useState(null)

  useEffect(() => {
  (async () => {
    await loadPokemons();
  })();
}, []);


const loadPokemons = async () => {
  try {
    const response = await GetPokemonapi(nextUrl);
    setNextUrl(response.next);

    const pokemonData = await Promise.all(
      response.results.map(async (pokemon) => {
        const pokemonInfo = await GetPokemonInfobyURLApi(pokemon.url);
        return {
          id: pokemonInfo.id,
          name: pokemonInfo.name,
          types: pokemonInfo.types.map(t => t.type.name),
          order: pokemonInfo.order,
          image: pokemonInfo.sprites.other['official-artwork'].front_default,
          ability: pokemonInfo.abilities.find(a => !a.is_hidden)?.ability.name || 'N/A',
          weight: pokemonInfo.weight / 10,
          height: pokemonInfo.height / 10,
          url: pokemon.url,
          stats: pokemonInfo.stats.map(stat => ({
            name: stat.stat.name,
            base: stat.base_stat,
        })),
        };
      })
    );

    setPokemons(prev => [...prev, ...pokemonData]);
  } catch (error) {
    console.error(error);
  }
};

return (
  <SafeAreaView style={{ flex: 1 }}>
    <PokemonList
      pokemons={pokemons} 
      loadPokemons={loadPokemons}
      isNext={nextUrl}
    />
  </SafeAreaView>
);
}