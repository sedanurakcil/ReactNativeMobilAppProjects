import { useEffect, useState } from "react";
import axios from 'axios'

const useFetch = (url) =>{

    const [data, setData] = useState([])
    const [loading , setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect( ()=>{fetchData(url)},[])
    // bu component çağırıldığı anda fonksiyonun çalşması için 

    // response içindeki data elemanını parçalayarak alıyorum ve ona yeni isim verdim productData (data lar karışmaması için)
    const  fetchData = async (url)=>{
        try{
        console.log('ilk giriş')
        const {data : responseData} =  await axios.get(url)
        console.log('çıkış')
        setData(responseData)
        setLoading(false)
        }catch(err){
            setLoading(false)
            setError(err.message)
        }
        
    };
    console.log('dış')
    return {data, loading,error}
}
export default useFetch