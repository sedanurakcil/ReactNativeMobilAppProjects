import {View, Text,Image,TouchableOpacity} from 'react-native'
import styles from './DetailCard.style'

const DetailCard = ({item,onSelect})=>{
    return(
        <View style = {styles.container}>
            <Image style = {styles.image} source ={{uri: item.strMealThumb}}/>

            <View style ={styles.bodyContainer}>
            <Text style = {styles.title}>{item.strMeal}</Text>
            <Text style={styles.mealFrom}>{item.strArea}</Text>
            </View >
            <View style={styles.separator}></View>
            <Text style = {styles.desc}>{item.strInstructions}</Text>
            <TouchableOpacity onPress={onSelect} style={styles.button}>
            <Text style={styles.buttonText}>Watch on Youtube</Text>
            </TouchableOpacity>
            
        </View>
    )
}

export default DetailCard;