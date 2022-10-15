import React from "react";
import { SafeAreaView,View, FlatList} from "react-native";

import Loading from "../../components/Loading";
import Error from "../../components/Error";
import ProductCard from "../../components/ProductCard";
import useFetch from "../../hooks/useFetch";
import { useDispatch } from "react-redux";

const Product = ({navigation}) => {
     const dispatch = useDispatch()

    const url = "https://fakestoreapi.com/products";
    
    const { data, loading, error }= useFetch(url)

    function handleProduct(id){
        navigation.navigate('DetailScreen', {id})

    }

    const renderProduct = ({item}) => <ProductCard product = {item}
     onSelect = { ()=> {handleProduct (item.id)}}/>

    if(loading){
        return <Loading/>
    }

    if(error){
        return <Error/>
    }
   

    return(  
    <View>
       
        <FlatList data = {data} renderItem ={renderProduct}/>
    </View>
    )
}

export default Product