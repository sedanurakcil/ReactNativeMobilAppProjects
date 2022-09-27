import React, {useState} from 'react';
import { SafeAreaView, Text, View,StyleSheet,Alert} from 'react-native';

import Input from '../components/input'
import Button from '../components/Button'


const MemberSign = ({navigation})=>{

    const [userName , setUserName] = React.useState("");
    const [userSurName , setUserSurName] = React.useState("");
    const [userAge , setUserAge] = React.useState("");
    const [userEmail , setUserEmail] = React.useState("");

    function handleSubmit(){
        if( !userName||!userSurName||
            !userAge||
            !userEmail){

                Alert.alert('LOGİNERROR', 'Bilgiler boş bırakılamaz.')
                return;
            }
        const user= {
            // state lerle aynı isimde olursa atamamıza gerek kalmaz
            userName,
            userSurName,
            userAge,
            userEmail,

        }
            navigation.navigate('MemberResultScreen',{user})
        
    }

    return(
        <SafeAreaView>
            <View>
            <Text> Member Sign</Text>
            <Input label= 'Üye Adı'  placeholder = 'Üyenin Adını Giriniz..' onChangeText={text => setUserName(text)}/>

            <Input label= 'Üye SoyaAdı'  placeholder = 'Üyenin SoyAdını  Giriniz..' onChangeText={setUserSurName}/>

            <Input label= 'Üye Yaşı'  placeholder = 'Üyenin Yaşını Giriniz..' onChangeText={setUserAge}/>

            <Input label= 'Üye Eposta'  placeholder = 'Üyenin Epostasını Giriniz..' onChangeText={setUserEmail}/>

            <Button text= 'Kaydı Tamamla'onPress = {handleSubmit}/>

         </View>
        </SafeAreaView>
        
    )
}

export default MemberSign;