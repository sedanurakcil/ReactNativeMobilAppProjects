import React from 'react'
import {SafeAreaView,Text, View,Image, Alert, } from 'react-native'
import styles from './Login.style'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import {Formik} from 'formik'
import usePost from '../../hooks/usePost/usePost'
import { useDispatch } from 'react-redux'

const Login =  () => {
    console.log('login render ')

    const {data,loading,error, post}= usePost()
    const dispatch = useDispatch()

    function handleLogin(values){
        // use posttan gelen post fonksiyonunu kullanırız
        post('https://fakestoreapi.com/auth/login',values)
        console.log(values)
        
        // value lar onSubmit seçeneğinden otomatik gelir burdada yakalarız
    }

    // bilgiler  hatalıysa kullanıcı bulunamadı dicek
    // bir token alırsamda product screen e yönlenecek
    if (error){
        Alert.alert("User doesnt exist")
        
    }
    
    if(data){
        
        // key formatında çalışır veriyi stringle kaydedip alabiliriz bellekte tutmakiçin oturum bilgisini
        // user bana posttan dönmüş sanki

        dispatch({type:'SET_USER' ,payload:{user} })
       
        
    }

   
    
    
    return(

    <SafeAreaView style ={styles.container}>
       
        <View style = {styles.logo_container}>

            <Image style={styles.image} source ={require('../../assets/logo3.png') }/>

        </View>
        
        <Formik
            initialValues={{ username: '' , password:'',
            }}
            onSubmit={handleLogin}
        >
            {({ handleChange, handleSubmit, values }) =>(
                <View style = {styles.body_container}>
                    <Input placeholder = "Please Enter  UserName..."
                        onChangeText={handleChange('username')} 
                        value={values.username}
                         accountname='account'/>
            
                    <Input placeholder = " Please  enter password..."
                        onChangeText={handleChange('password')}
                        value={values.password}
                        accountname='key'
                        isSecure/>

                <Button text = "Login"
                        onPress={handleSubmit}
                        loading= {loading} />
                </View>
             )}
        </Formik>

       </SafeAreaView>

      
       )
}

export default Login;

// sanki bana bu veri istek attığımda post ile dönüyomuş gibi davranıcam
const user = 
{'adres':{"coğrafi konum":{"lat":"-37.3159","uzun":"81.1496"},"şehir":"kilcoole","sokak":"yeni yol","numara": 7682,"zipcode":"12926-3874"},"id":1,"email":"john@gmail.com","username":"johnd","password":"m38rmF$","name ":{"ad":"john","soyad":"doe"},"telefon":"1-570-236-7033","__v":0}