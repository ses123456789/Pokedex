import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { capitalize } from 'lodash'

export default function Characteristics({ weight, height, ability }) {
  return (
    <View style={styles.container}>
      
      <View style={styles.column}>
        <View style={styles.row}>
          <MaterialCommunityIcons name="scale-bathroom" size={24} color="#666" />
          <Text style={styles.value}>{weight} kg</Text>
        </View>
        <Text style={styles.label}>Weight</Text>
      </View>  
      <View style={styles.column}>
        <View style={styles.row}>
          <MaterialCommunityIcons name="ruler" size={24} color="#666" />
          <Text style={styles.value}>{height} m</Text>
        </View>
        <Text style={styles.label}>Height</Text>
      </View>      
      <View style={styles.column}>
        <Text style={styles.value}>{capitalize(ability)}</Text>
        <Text style={styles.label}>Ability</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop:-30,
  },
  column: {
    alignItems: 'center',
      justifyContent: 'space-between',
     minHeight: 60
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 5,
  },
  label: {
    fontSize: 14,
    color: '#666',
  },
})