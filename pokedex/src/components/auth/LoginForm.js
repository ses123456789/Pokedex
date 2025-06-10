import { View, Text, StyleSheet, TextInpu, Button, Keyboard, TextInput,ToastAndroid } from 'react-native'
import React from 'react'
import { useFormik } from 'formik'
import * as yup from "yup"
import { user, userdetails } from '../../utils/UserDB'
import UseAuth from '../../hooks/UseAuth'

export default function LoginForm() {
    
    const {login}= UseAuth()
   
    const formik= useFormik({
        initialValues: InitialValues(),
        validationSchema: yup.object( validationSchema()),
        validateOnChange: false,
        onSubmit: (formValue) => {
            const {username,password}= formValue
            if (username !== user.username || password !== user.password)
            {
                ToastAndroid.show('wrong user or password', ToastAndroid.SHORT);
            }
            else {
                login(userdetails)
                
                ToastAndroid.show('Welcome', ToastAndroid.SHORT);
            }
        }
    })
  return (
    <View>
      <Text style= {styles.title}>Login</Text>
      <TextInput
      placeholder='Username'
      style= {styles.input}
      autoCapitalize='none'
      value= {formik.values.username}
      onChangeText={(text)=> formik.setFieldValue("username",text)}
      />
      <TextInput
      placeholder='Password'
      style= {styles.input}
      autoCapitalize='none'
      secureTextEntry = {true}
      value= {formik.values.password}
      onChangeText={(text)=> formik.setFieldValue("password",text)}
      />
      <Button title='Login' onPress={formik.handleSubmit}/>   
      <Text style={styles.error}> {formik.errors.username}</Text> 
      <Text style={styles.error}> {formik.errors.password}</Text>   
    </View>
  )
}
function InitialValues(){
    return{
        username: "",
        password: ""
}
}
function validationSchema(){
    return{
        username: yup.string().required("Missing Username"),
        password: yup.string().required("Missing Password")
    }
}
const styles= StyleSheet.create({
 title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 15
 },
 input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10
 },
 error: {
    textAlign: "center",
    color: "#f00",
    marginTop: 20
 }
})