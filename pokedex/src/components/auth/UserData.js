import { View, Text, StyleSheet, Button } from 'react-native'
import React, {useCallback, useState}from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { size } from 'lodash'
import UseAuth from '../../hooks/UseAuth'
import { getPokemonFavoritesAPI } from '../../API/FavoritesAPI'

export default function UserData() {
 const {auth, logout}=UseAuth()
 const [totalFavorites, setTotalFavorites] = useState()
 useFocusEffect(
 useCallback(
   ()=>{
    (async () => {
      try {
        const response = await getPokemonFavoritesAPI()
        setTotalFavorites(size(response))
      } catch (error) {
        setTotalFavorites(0)
      }
    })()
  },[]
 )
 )

  return (
    <View style= {styles.content}>
      <View style = {styles.titleblock}>
      <Text style ={styles.title}>Welcome back {`${auth.firstname} ${auth.lastname}`}</Text>
      </View>

      <View>
       <ItemMenu title = "Name" text= {`${auth.firstname} ${auth.lastname}`}/>
       <ItemMenu title= "Username" text = {auth.username}/>
       <ItemMenu title= "Email" text = {auth.email}/>
       <ItemMenu title= "Total of favorites" text ={`${totalFavorites} pokemons`} />       
      </View>
      <View style= {styles.logoutbton}>
           <Button title='Logout' onPress={logout}/>
      </View>
   
    </View>
  )
}

function ItemMenu(props){
  const {title, text} = props
  return(
   <View style= {styles.itemmenu}>
    <Text style= {styles.itemMenuTitle}>{title}:</Text>
    <Text>{text}:</Text>
   </View> 
  )
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 20
  },
  titleblock: {
    marginBottom: 30
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
  datacontent: {
    marginBottom: 20
  },
  itemmenu: {
    flexDirection: "row",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "#CFCFCF"
  },
  itemMenuTitle:{
    fontWeight: "bold",
    paddingRight: 10,
    width: 120
  },
  logoutbton: {
    paddingVertical: 20
  }
})