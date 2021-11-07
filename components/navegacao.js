import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from './components/Home';
import cadastroOng from './components/cadastroOng';
import ListaPedidos from './components/ListaPedidos'

const Tab = createMaterialBottomTabNavigator();

export default function Navegacao() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={} />
    </Tab.Navigator>
  );
}