import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from './login';
import Cadastro from './cadastro';
import Home from './Home'

const Stack = createNativeStackNavigator();

export default function App() {
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