import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function NoLogged() {

  const navigation = useNavigation()
  return (
    <View style= {styles.content}>
      <Text>To see this screen you must be logged</Text>
    <View style={{ marginTop: 20 }}>
      <Button title='Go to Login page' onPress={() => navigation.navigate("Account")} />
    </View> 
    </View>
  )
}

const styles = StyleSheet.create({

content:{
    marginVertical: 50,
    paddingHorizontal: 20
},
text: {
 textAlign: "center",
 marginBottom: 20
}
})