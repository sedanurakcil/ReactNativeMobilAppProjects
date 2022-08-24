import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './Product.style';


const Product = ({product}) =>{

   function checkStock(item){
    if (item.inStock == false ){
            let  desc = 'STOKTA YOK'
            return desc;
    }
        
    }

    return(
        <View style = {styles.container}>
            <View style = {styles.image_container}>
            <Image style ={styles.image} source = {{uri: product.imgURL }}/>
            </View>
            <View style = {styles.inner_container}>
            <Text style ={styles.title}>{product.title} </Text>
                <Text style ={styles.price}>{product.price} </Text>
                <Text style = {styles.description}>{checkStock(product)}</Text>
            </View>

        </View>

    )
}

export default Product;