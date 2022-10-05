import React, {useState, useEffect} from "react";
import { View,Text,Image } from "react-native";
import useFetch from "../../hooks/useFetch";
import styles from './DetailStyle';
import Loading from "../../components/Loading";
import Error from "../../components/Error";

const Detail = ({route}) => {
    
    const url = 'https://fakestoreapi.com/products';
    const {id} = route.params;
    const {loading, error, data} = useFetch(`${url}/${id}`)

    if(loading){
        return <Loading/>
    }

    if(error){
        return <Error/>
    }
    return(
        <View style={styles.container}>
            <Image style={styles.image} source = {{uri:data.image}} />
            <View style = {styles.bodyContainer}>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.detail}>{data.description}</Text>
            <Text style={styles.price}>{data.price}</Text>
            </View>
        </View>
    )
}

export default Detail;