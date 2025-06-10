import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import { Ionicons} from '@expo/vector-icons'
import { addPokemontoFavoritesAPI, isPokemonFavoriteAPI, removePokemonfromFavoritesAPI  } from '../../API/FavoritesAPI'

export default function Favorite(props) {
 const {id}= props
 const[isFavorite, setIsFavorite]= useState(undefined)
 const [reloadCheck, setReloadCheck]= useState(false)
      
      useEffect(()=>{
        (async () =>{
            try{
                const response= await isPokemonFavoriteAPI(id)
                setIsFavorite(response)
            } catch(error){
                setIsFavorite(false)
            }
        })()
      },[id, reloadCheck])

const onReloadCheckFavorite=()=>{

    setReloadCheck(prev => !prev)
}
const addFavorite = async () =>{
    try{
        await addPokemontoFavoritesAPI(id)
        onReloadCheckFavorite()
    } catch(error){
        console.log(error)
    }
} 


const RemoveFavorite= async () =>{
 try{
        await removePokemonfromFavoritesAPI(id)
        onReloadCheckFavorite()
    } catch(error){
        console.log(error)
    }
}

    return (
    <Ionicons 
    name={isFavorite ? 'heart' : 'heart-outline'}
    color="#fff" 
    size={20} 
    onPress={isFavorite? RemoveFavorite: addFavorite} 
    style= {{marginRight: 20}}/>
  )
}
