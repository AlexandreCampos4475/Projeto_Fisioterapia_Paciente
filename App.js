import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from './login';
import Cadastro from './cadastro';
import Home from './Home'
import * as Font from 'expo-font';
import { useFonts } from "expo-font";



const Stack = createNativeStackNavigator();




export default function App() {
    
    const [fontsLoaded] = useFonts({
      'Inter-Bold': require('./assets/fonts/Inter/Inter-Bold.ttf'),
      'Lato-Regular': require('./assets/fonts/Inter/Lato-Regular.ttf'),
      'Inter-Regular': require('./assets/fonts/Inter/Inter-Regular.ttf'),
    });
    if (!fontsLoaded) {
        return null; // Aguarde até que as fontes sejam carregadas
      }


    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen 
                    name="Login" 
                    component={Login} 
                    options={{ headerShown: false }} 
                />
                <Stack.Screen 
                    name="Cadastro" 
                    component={Cadastro} 
                    options={{ headerShown: false }} 
                />
                <Stack.Screen
                name="Home"
                component={Home}
                options={{headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
