import { View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import DrawerContainer from './navigator/DrawerNavigator';
import FavouriteProvider from './Context/FavoriteProvider';

const Router = ()=>{
  return(
    < FavouriteProvider>
      <NavigationContainer>
         <DrawerContainer/>
      </NavigationContainer>
    </FavouriteProvider>

   

  )
}

export default Router;