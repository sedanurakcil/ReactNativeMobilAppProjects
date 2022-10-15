

import React from 'react';

import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Product from './pages/Product'
import Detail from './pages/Detail'
import Login from './pages/Login';
import Deneme from './pages/Deneme'

import {useDispatch, useSelector} from 'react-redux'
import Loading from './components/Loading';
import  Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Router=()=>{

  const dispatch = useDispatch()



  console.log('router render edildi')
const Stack = createStackNavigator();
const userSessions= useSelector(s=>s.user)

const isAuthLoading= useSelector(s=>s.isAuthLoading)

// user a bakarken async bir işlem olduğu için oturum açıksa bile login ekranından sonra diğer ekranlar gelir
// isAuthloading ile kontrol ediyoruz geldiği anda data false oluyodu  ve geçerli sayfa açılmasını sağlamak için burada onun durumuna bakıcaz

  return(
    
      <NavigationContainer>
        {
          // userSessions  doğruise Login sayfası çalışcak hala veri gelmediği için eğer zaten kullanıcı oturum açmış ise Product ve detail çalışır
        }
        
       

            { isAuthLoading ? (
              <ActivityIndicator size='large'/>
              // user alınan kadar başka sayfaya geçmemsini sağlar
            ) :
            !userSessions ? (
            <Stack.Navigator>
            <Stack.Screen
               name="LoginScreen"
               component={Login}
               options={{
                headerShown:  false}}
             />
             </Stack.Navigator>
        
            ):(
        
            <Stack.Navigator>
              <Stack.Screen 
                  name="ProductScreen"
                  component={Product}
                  options = {{
                    title:'Shop',
                    headerStyle:{backgroundColor:'#304ffe'},
                    headerTitleStyle:  {color:'white'},
                    headerRight: ()=> <Icon name ="logout" size= {30} color= 'white' onPress={()=> dispatch({type: 'REMOVE_USER'})}/>
                  }}
        
              />
             <Stack.Screen
               name="DetailScreen" 
               component={Detail}
               options = {{
                title:'Shop',
                headerStyle :{backgroundColor:'#304ffe'},
                headerTitleStyle: {color:'white'},
                headerTintColor: 'white'
              }}
               />
               

            </Stack.Navigator>
            
        
        )}
      </NavigationContainer>

  )
}

export default Router;