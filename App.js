import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './login';
import Cadastro from './cadastro';
import Home from './Home'
import { View } from 'react-native';
import { DrawerItem, CloseButton,FecharTexto } from "./styles"; 
import * as Font from 'expo-font';
import { useFonts } from "expo-font";



const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

  
  function SolicitarTela({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    );
  }
  function SuporteTela({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress={() => navigation.goBack()}
          title="Go to notifications"
        />
      </View>
    );
  }
  
  function AgendamentosTela({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    );
  }
  function InfomedicaTela({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    );
  }
  function PerfilTela({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    );
  }
  function CustomDrawerContent({ navigation }) {
    return (
      <View style={{ flex: 1, paddingTop: 60 }}>
        <CloseButton onPress={() => navigation.closeDrawer()}><FecharTexto>X</FecharTexto></CloseButton>
        <DrawerItem title="Home" onPress={() => navigation.navigate('Home')} />
        <DrawerItem title="Solicitar Atendimento" onPress={() => navigation.navigate('Solicitar Atendimento')} />
        <DrawerItem title="Suporte" onPress={() => navigation.navigate('Suporte')} />
        <DrawerItem title="Meus Agendamentos" onPress={() => navigation.navigate('Meus Agendamentos')} />
        <DrawerItem title="Informações Médicas" onPress={() => navigation.navigate('Informações Médicas')} />
        <DrawerItem title="Meu Perfil" onPress={() => navigation.navigate('Meu Perfil')} />
      </View>
    );
  }
  
  function DrawerNavigator() {
    return (
      <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="HomeScreen" component={Home} options={{headerShown: false}} />
        <Drawer.Screen name="Solicitar Atendimento" component={SolicitarTela} />
        <Drawer.Screen name="Suporte" component={SuporteTela} />
        <Drawer.Screen name="Meus Agendamentos" component={AgendamentosTela} />
        <Drawer.Screen name="Informações Médicas" component={InfomedicaTela} />
        <Drawer.Screen name="Meu Perfil" component={PerfilTela} />
      </Drawer.Navigator>
    );
  }



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
                component={DrawerNavigator}
                options={{headerShown: false}}
                />
            </Stack.Navigator>
            
    
       
        
        </NavigationContainer>

        
    );
}
