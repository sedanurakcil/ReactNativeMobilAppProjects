import { TextInput, View,} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from './Input.style'

const Input =({placeholder , onChangeText,value, isSecure, accountname})=>{
    return(
        <View style={styles.container}> 
            <TextInput style = {styles.input}
             placeholder = {placeholder} 
             onChangeText={onChangeText}
            value={value}
            secureTextEntry={isSecure}
              />
            <Icon name= {accountname} size={30} color='gray'/>
            
        </View>
    )
}
export default Input;
