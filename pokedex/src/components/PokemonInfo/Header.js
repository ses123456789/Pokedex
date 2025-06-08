import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'
import React from 'react'
import { capitalize } from 'lodash'
import GetColors from '../../utils/GetColorbyType'

export default function Header(props) {
    const {name, id, image, types}= props
    const color= GetColors(types[0])
    
    const bgstyle= {backgroundColor: color,...styles.bgc}
  
  return (
    <>
        <View style={bgstyle}/>
      <SafeAreaView style= {styles.content}>
        <View style ={styles.header}>
          <Text style={styles.name}>{capitalize(name)}</Text>
          <Text style={styles.id}>#{`${id}`.padStart(3,0)}</Text>
        </View>
        <View style= {styles.contentImg}>
            <Image source={{uri: image}} style= {styles.image}/>
        </View>
      </SafeAreaView>
    </>
  )
}
const styles= StyleSheet.create({
bgc: {
    width: "100%",
    height: 350,
    position: "absolute",
    borderBottomEndRadius: 300,
    borderBottomLeftRadius:300,
    transform: [{scaleX: 2}]
},
content:{
    marginHorizontal: 20,
    marginTop: 60
},
header:{
  flexDirection: 'row',
  justifyContent: "space-between",
  alignItems: 'center',
   marginTop: 30,
},
name: {
  color: "#fff",
  fontWeight: 'bold',
  fontSize: 27
},
id: {
    color: "#fff",
  fontWeight: 'bold',
},
contentImg: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    top: -13,
},
image: {
    width: 250,
    height: 300,
    resizeMode: 'contain',
    marginBottom:30
}


})