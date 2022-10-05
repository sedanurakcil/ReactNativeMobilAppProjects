import React from "react";
import {View,FlatList,ActivityIndicator} from 'react-native';
import useFetch from "../../hooks/useFetch";
import styles from './Meals.style'
import MealsCard from "../../components/Cards/MealsCard/MealsCard"

const Meals = ({route,navigation})=>{

    const {strCategory} = route.params;

    const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c="
    const url1 = `${url}${strCategory}`
    console.log(url1)
    const {data,loading,error} = useFetch(`${url}${strCategory}`)
    console.log(data)
    

    function onSelectMeals(idMeal){
        navigation.navigate("DetailScreen", {idMeal})

    }
    const renderMeals = ({item})=>(<MealsCard item = {item} onPress= {()=>onSelectMeals(item.idMeal)}/>)
        
    if(error){
        return <Text>error</Text>
    }
    if(loading){
        return <ActivityIndicator  size='large'/>
    }
    return(
        <View style = {styles.container}>
            <FlatList
            data = {data.meals}
            renderItem = {renderMeals}/>
        </View>
        
    )
}

export default Meals