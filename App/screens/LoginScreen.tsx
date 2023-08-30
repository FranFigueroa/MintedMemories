import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'

//import navigation
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen(){
  const navigation = useNavigation();

  const goToSignUp =() =>{
  navigation.navigate('SignUp');
  }
  return (
    
    <View style ={styles.container}>
      <TouchableOpacity onPress={goToSignUp}>

      <Text>LoginScreen</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',

    }
})

