import React from 'react';
import {View,Image, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

//import pantallas
import LoginScreen from '../screens/LoginScreen';

const LogoScreen: React.FC = () => {
  const navigation = useNavigation();

 const goToLogin =() =>{
  navigation.navigate('Login');
 };

    return(
        <View style={styles.container}>
          <TouchableOpacity onPress={goToLogin}>
            <Image
            source ={require('../images/logo.png')}
            style = {styles.logo}
            resizeMode="contain"
            />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#C0C0C0',

    },
    logo: {
      width: 200, 
      height: 200, 
    },
  });

  export default LogoScreen;