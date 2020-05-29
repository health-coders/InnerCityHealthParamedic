import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import DisponiblesScreen from './screens/ConsultasScreens/DisponiblesScreen';
import InfoConsultaScreen from './screens/ConsultasScreens/InfoConsultaScreen';
import LoginIndexScreen from './screens/LogInScreens/LoginIndexScreen';
import PendientesScreen from './screens/ConsultasScreens/PendientesScreen';
import HomeConsultasScreen from './screens/ConsultasScreens/HomeConsultasScreen';
import CancelarConsultaScreen from './screens/ConsultasScreens/CancelarConsultaScreen';
import MapaScreen from "./screens/mapasScreens/MapaScreen";

const Stack = createStackNavigator();

const Navigation = () => (
    <NavigationContainer>
        <Stack.Navigator >
            <Stack.Screen name='LoginIndex' component={LoginIndexScreen} options={{headerShown: false}} />
            <Stack.Screen name='Home' component={HomeScreen} options={{headerShown: false}}/>
            <Stack.Screen name='HomeConsultas' component={HomeConsultasScreen} options={{headerShown: false}}/>
            <Stack.Screen name='Mapa' component={MapaScreen} options={{headerShown: false}}/>
            <Stack.Screen name='Disponibles' component={DisponiblesScreen}
                          options={{headerShown: false}}/>
            <Stack.Screen name='Pendientes' component={PendientesScreen}
                          options={{headerShown: false}}/>
            <Stack.Screen name='InfoConsulta' component={InfoConsultaScreen}
                          options={{title: 'Información de la consulta'}}/>
            <Stack.Screen name='CancelarConsulta' component={CancelarConsultaScreen}
                          options={{title: 'Cancelar consulta'}}/>
        </Stack.Navigator>
    </NavigationContainer>
);

export default Navigation;
