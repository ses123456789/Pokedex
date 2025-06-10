import { View, Text } from 'react-native'
import React from 'react'
import LoginForm from '../components/auth/LoginForm'
import UserData from '../components/auth/UserData'
import UseAuth from '../hooks/UseAuth'

export default function AccountScreen() {
  const {auth}= UseAuth()
  return (
    <View>
      {auth ? <UserData/>: <LoginForm/>}
      
    </View>
  )
}

