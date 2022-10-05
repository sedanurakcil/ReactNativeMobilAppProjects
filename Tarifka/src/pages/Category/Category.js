import React from "react";
import {View, Text,FlatList, ActivityIndicator} from 'react-native'
import styles from './Category.style'
import useFetch from "../../hooks/useFetch";
import CategoriesCard from "../../components/Cards/CategoriesCard/CategoriesCard";

const Category = ({navigation})=>{
    const url = "https://www.themealdb.com/api/json/v1/1/categories.php"
    const  {data,loading,error}= useFetch(url)
    
    function  onSelectCategories(strCategory){
        console.log(strCategory)
        navigation.navigate("MealsScreen", {strCategory})
    }
    
    const  renderCategory= ({ item }) =>(
        <CategoriesCard item = {item} onPress={()=> {onSelectCategories(item.strCategory)}}/>
    )

    if(error){
        return <Text>error</Text>
    }
    if(loading){
        return <ActivityIndicator  size='large'/>
    }
    
    return(
        <View style = {styles.container}>
        <FlatList 
        data= {data.categories} 
        renderItem = {renderCategory}
        />
        </View>
    )
}

export default Category;