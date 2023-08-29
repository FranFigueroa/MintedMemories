import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

//import navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Import Screens
import HomeScreen from './App/screens/HomeScreen';
import LoginScreen from './App/screens/LoginScreen';


//define stack
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
      <Stack.Navigator>
        
        <Stack.Screen name = "Home" component ={HomeScreen} options = {{ headerShown: false}}/>     
        <Stack.Screen name = "Login" component ={LoginScreen} options = {{ headerShown: false}}/>     
        
      </Stack.Navigator>

      </SafeAreaProvider>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
