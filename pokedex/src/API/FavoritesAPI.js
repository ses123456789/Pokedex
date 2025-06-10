import AsyncStorage from "@react-native-async-storage/async-storage";
import { includes, pull } from "lodash";
import { FAVORITE_STORAGE } from "../utils/constants";

export async function getPokemonFavoritesAPI(){
    try{
        const response= await AsyncStorage.getItem(FAVORITE_STORAGE)
        return JSON.parse(response || "[]")
    } catch(error){
        throw error    
    }
}
export async function addPokemontoFavoritesAPI(id) {
    try{
        const favorites= await getPokemonFavoritesAPI()
        favorites.push(id)
        await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites))
    } catch(error){
        throw error
    }
}

export async function isPokemonFavoriteAPI(id){
try {
const response  = await getPokemonFavoritesAPI()
return includes(response, id)
} catch(error){
        throw error
    }
}

export async function removePokemonfromFavoritesAPI(id){
try{
    const favorites= await getPokemonFavoritesAPI()
    const newfavorites= pull(favorites, id)
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(newfavorites))
} catch(error){
        throw error
    }
}