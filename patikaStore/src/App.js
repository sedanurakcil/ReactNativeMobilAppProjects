

import React from 'react';

import {
  FlatList,
  SafeAreaView,
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  
  View,
} from 'react-native';
import productData from './product_data.json' // json datasını import ettim
import Product from './components/Product' // Product componentini import ettim




const App = () => {
  const renderProduct =( {item}) => <Product product = {item}/> // renderItem her tetiklendiğinde bir Product componenti oluşmuş olacak 
  // item json datasındaki elemanları  belirtir.

  
  return (
    <SafeAreaView  style = {styles.container}>
        <Text style ={styles.header}>PATIKASTORE</Text>
      
    <TextInput  placeholder= "Ara.." style = {styles.input}/>
      <FlatList
      
      horizontal={false}
      data= {productData}
      renderItem={renderProduct}
      keyExtractor = {item => item.id.toString()}
      numColumns={2}
      
      />
      
  
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex:1
    
  },
 

  header:{
    fontSize:40,
    fontWeight: 'bold',
    color: 'purple',
    margin:20,
    marginLeft:5
  },
  input:{
    backgroundColor:'#eceff1',
    margin:10,
    height:Dimensions.get('window').height/10,
    borderRadius:10
  }
});

export default App;
