import { useState,useEffect } from "react";
import axios from 'axios'

const  useFetch = (url)=>{

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError]= useState()

    useEffect(()=>{
       
            fetchData()
         // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    async function fetchData (){
        try{
        console.log('ilk')
        const {data: responseData} = await axios.get(url)
        setData(responseData)
        setLoading(false);
        console.log("data alındı")
        }
        catch (error){
            setLoading(false)
            setError(error.message)
        }

    }

    return {data, error,loading}
}

export default useFetch;