import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { map, capitalize } from 'lodash'
import GetColors from '../../utils/GetColorbyType'

export default function Types(props) {
    const {types}= props
    
  return (
    <View style={styles.content}>
      {map(types, (item, index) =>(
        <View key= {index} style={{...styles.pill,backgroundColor:GetColors(item)}}>
           
              <Text>
           {capitalize(item)}
        
        </Text>
        </View>
      ))}
    </View>
  )
}

const styles= StyleSheet.create({
    content: {        
        marginTop:50,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    pill: {
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 20, 
        marginHorizontal: 10,
        backgroundColor: "#f0f"
    }
})