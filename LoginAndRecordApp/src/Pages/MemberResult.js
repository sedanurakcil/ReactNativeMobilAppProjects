import React, {useState} from 'react';
import { SafeAreaView, Text, View,StyleSheet} from 'react-native';

const MemberResult=({route})=>{
    const {user} = route.params;
    // user ı parçalayarak alıyorum params içerisindeydi.
    return(
        <View>
            <Text style = {styles.title}> Kayıt Başarılı</Text>

            <Text style = {styles.text}>Üye Adı: {user.userName}</Text>

            <Text style = {styles.text}>Üye Soyadı: {user.userSurName}</Text>

            <Text style = {styles.text}>Üye Yaşı:{user.userAge} </Text>

            <Text style = {styles.text}>Üye EPostası: {user.userEmail} </Text>

        </View>
    )
}
export default MemberResult;

const styles = StyleSheet.create({
text:{
    fontSize:20,
    fontWeight:'bold',
    margin:5,
},
title :{
    fontSize:40,
    fontWeight:'bold',
    color: 'red',
    textAlign:'center'
}

})