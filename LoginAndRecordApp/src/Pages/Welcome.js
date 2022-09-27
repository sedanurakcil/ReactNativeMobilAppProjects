import React from 'react';
import { SafeAreaView, Text, View,StyleSheet} from 'react-native';

import Button from '../components/Button';

const Welcome = ({navigation}) =>{

    function goTOMemberSign(){
        navigation.navigate('MemberSignScreen')

    }
    return(
        <SafeAreaView style = {styles.container}>
            <Text style = {styles.header}> WELCOME </Text>
            <Button text= 'Üye Kaydı Oluştur' onPress = {goTOMemberSign}/>
        </SafeAreaView>
    )
}

export default Welcome;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        
    }
    ,
    header:{
        textAlign: 'center',
        fontSize :30,
        fontWeight: 'bold',
        margin:10
    }


})