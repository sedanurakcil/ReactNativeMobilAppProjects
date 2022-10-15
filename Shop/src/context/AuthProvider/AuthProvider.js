import React, {useState, useEffect} from 'react'
import {Provider} from 'react-redux'
import {legacy_createStore as createStore}from 'redux'
import reducers from './reducers'
import AsyncStorage from '@react-native-async-storage/async-storage'

// state atama işlemlerini auth providerda yapıyorum çünki sayfalar çağrılır çağrılmaz bu değerlere bakılcak
// useEffect kullanmalıyım

const AuthProvider = ({children})=>{
    console.log('provider render edildi')

    const [user, setUser] = useState(null);
    const[isAuthLoading , setAuthLoading] = useState(true)
    

    // burada belleğe kaydedilen datayı alıp statelerime atamak istiyorum 
    useEffect(()=>{
        console.log('providera girdi')
       
        // buradan promise gelceği için cevabı beklemek zorundayım
        AsyncStorage.getItem('@USER').then(userSession => {
            userSession && setUser(JSON.parse(userSession))
            setAuthLoading(false)

        })

            
                
    },[])
  
    


    const store = createStore(reducers,{user,isAuthLoading})
    return <Provider store={store}>{children}</Provider>

}

export default AuthProvider
