import axios from "axios"
import {API_Host} from "../utils/constants"

export async function GetPokemonapi(endpointurl) {
    try{
        const url= `${API_Host}/pokemon?limit=20&offset=0`
        const response = await axios.get(endpointurl || url);
        const data = response.data;
        return data
    }
    catch(error){
        throw error
    }
    
}

export async function GetPokemonInfobyURLApi(url){

    try{
        const response= await axios.get(url)
         const data = response.data;
         
       return data
    } 
    catch (error){
        throw error
    }
}

export async function getPokemonDetailsApi(id) {
    try {
        const url = `${API_Host}/pokemon/${id}`; 
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}