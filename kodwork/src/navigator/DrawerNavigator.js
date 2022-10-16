
import React from 'react'

import {createDrawerNavigator} from '@react-navigation/drawer';

import StackNavigator from './StackNavigator';
import Favorites from '../pages/Favorites'

const Drawer = createDrawerNavigator();


const DrawerContainer = () => {
  return(
    
       <Drawer.Navigator>

           <Drawer.Screen
                 name="StackNavigatorPage" 
                 component={StackNavigator}
                 options={{
                    title:'Jobs',
                    headerShown:false,
                    headerPressColor:'red',
                  }}
            />

           <Drawer.Screen 
                name="Favorited Job" 
                component={Favorites} 
                options= {{ 
                            headerTitleAlign: 'center', 
                            headerTintColor: '#FF5C58'
                        }}
            />

      </Drawer.Navigator>

  )
}

export default DrawerContainer;