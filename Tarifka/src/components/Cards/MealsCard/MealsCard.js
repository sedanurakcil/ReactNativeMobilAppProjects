import React from 'react'
import {View, Text,Image,TouchableWithoutFeedback, ImageBackground} from 'react-native'
import styles from './MealsCard.style'

const MealsCard= ({item, onPress})=>{
    return(
        <TouchableWithoutFeedback onPress = {onPress}>
        <View style= {styles.container}>
            <ImageBackground style = {styles.image} source ={{uri: item.  strMealThumb}}>
            
            <View style = {styles.titleContainer}>
            <Text style = {styles.title}> {item.strMeal}</Text>
            
            </View>
            </ImageBackground>

        </View>
        </TouchableWithoutFeedback>
    )
}

export default MealsCard;