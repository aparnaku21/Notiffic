import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to app</Text>
      <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('Login')}><Text>Login</Text></TouchableOpacity>
      <Text style={styles.heading1}>Don't have an acc</Text>
      <TouchableOpacity style={styles.btn1} onPress={()=>navigation.navigate('Register')}><Text>Register</Text></TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'pink',
    alignItems:'center',
    justifyContent:'center'
  },
  btn:{
    backgroundColor:'cyan',
    marginVertical:40,
    paddingHorizontal:20,
    paddingVertical:15,
    borderRadius:10
  },
  btn1:{
    backgroundColor:'yellow',
    borderColor:'cyan',
    marginVertical:10,
    paddingHorizontal:25,
    paddingVertical:15,
    borderRadius:10
  },
  heading:{
          fontStyle:'italic',
          marginVertical:50,
          fontSize:30
        },
  heading1:{
          fontStyle:'normal',
          marginVertical:10,
          fontSize:10
        }
})
