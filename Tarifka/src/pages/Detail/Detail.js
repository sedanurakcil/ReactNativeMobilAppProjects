import React from "react";
import {View, Text,Image,FlatList,ActivityIndicator,Linking} from 'react-native'
import styles from './Detail.style'
import useFetch from "../../hooks/useFetch";
import DetailCard from "../../components/Cards/DetailCard/DetailCard"

const Detail = ({route}) => {

    const {idMeal} = route.params;
    console.log(idMeal)
    const url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i="

    const {data, loading,error} =  useFetch(`${url}${idMeal}`)

    const renderCategory = ({item}) => (<DetailCard item ={item} onSelect= {()=> Linking.openURL(item.strYoutube)}/>)

    if(error){
        return <Text>error</Text>
    }
    if(loading){
        return <ActivityIndicator  size='large'/>
    }
    return (
        <View>
            <FlatList
            data = {data.meals}
            renderItem= {renderCategory}/>
    </View>
        
    )
}

export default Detail;