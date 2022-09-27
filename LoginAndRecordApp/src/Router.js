import {View, SafeAreaView, Text, StyleSheet} from 'react-native'
import React from 'react';


import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './Pages/Welcome'
import MemberSign from './Pages/MemberSign'
import MemberResult from './Pages/MemberResult'


const Stack = createStackNavigator();

const App = ()=>{
  
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={
        {headerShown:false}
      }>
        <Stack.Screen name = "WelcomeScreen" component={Welcome}/>
        <Stack.Screen name = "MemberSignScreen" component={MemberSign}/>
        <Stack.Screen name = "MemberResultScreen" component={MemberResult}/>

      </Stack.Navigator>
    </NavigationContainer>
  )
}




export default App;
