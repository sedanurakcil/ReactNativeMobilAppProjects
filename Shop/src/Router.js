

import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Product from './pages/Product'
import Detail from './pages/Detail'



const Router=()=>{
const Stack = createStackNavigator();

  return(
    
      <NavigationContainer>
        <Stack.Navigator >
        <Stack.Screen name="ProductScreen"
         component={Product}
        options = {{title:'Shop',headerStyle : {backgroundColor:'#304ffe'},
        headerTitleStyle: {color:'white'}}}
        
        />
        <Stack.Screen name="DetailScreen" component={Detail}
        options = {{
        title:'Shop',
        headerStyle : {backgroundColor:'#304ffe'},
        headerTitleStyle: {color:'white'},
        headerTintColor: 'white'
        }} />
        </Stack.Navigator>

      </NavigationContainer>

  )
}

export default Router;