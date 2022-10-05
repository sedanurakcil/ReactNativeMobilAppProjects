
import React from 'react'
import {Text, View, Image,TouchableWithoutFeedback} from 'react-native'
import styles from './CategoriesCard.style'

const  CategoriesCard = ({item, onPress}) =>{ 

    return (
    <TouchableWithoutFeedback onPress = {onPress}>
    <View style  = {styles.container}>
            <Image  
            style = {styles.image} 
            source = {{uri: item.strCategoryThumb}}/>

            <Text style = {styles.title}> {item.strCategory} </Text>
        </View>
        </TouchableWithoutFeedback>
    )
}

export default CategoriesCard;