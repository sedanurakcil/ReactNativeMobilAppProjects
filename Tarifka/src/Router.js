import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import Category from './pages/Category';
import Detail from './pages/Detail';
import Meals from './pages/Meals';

const Stack = createStackNavigator();

const Router = ()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name = "CategoryScreen"component = {Category}
      options = {{
        title:'Categories',
        headerStyle : {backgroundColor:'white'},
        headerTitleStyle: {color:'orange'},
        headerTitleAlign: 'center',
        }}/>
      <Stack.Screen name = "MealsScreen"component = {Meals}
      options = {{
        title:'Meals',
        headerStyle : {backgroundColor:'white'},
        headerTitleStyle: {color:'orange'},
        headerTintStyle:{color:'orange'},
        headerTitleAlign: 'center'
        }}/>
      <Stack.Screen name = "DetailScreen" component = {Detail}
      options = {{
        title:'Detail',
        headerStyle : {backgroundColor:'white'},
        headerTitleStyle: {color:'orange'},
        headerTintStyle:{color:'orange'},
        headerTitleAlign: 'center',
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )

}
export default Router;
