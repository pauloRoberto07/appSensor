   
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Sensor from './src/pages/sensor';
import Mapa from './src/pages/Mapa'


const Stack = createNativeStackNavigator();


export default function App() {
return(
  <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Sensor" component={Sensor}></Stack.Screen>
        <Stack.Screen name="Mapa" component={Mapa}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
);
  

 




}

