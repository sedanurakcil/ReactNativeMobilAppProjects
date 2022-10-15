import {useState}from 'react'
import axios from 'axios'

function usePost(){

    const [data, setData] = useState(null)
    const [loading , setLoading] = useState(false)
    const [error, setError] = useState(null)

    async function post(url, apiData) {

        try {
            // bu url den ve bu gönderdiğim data için bana dönüş sağlıcak login için 
            
            console.log('istek')
            setData(null)
            setError(null)
            setLoading(true)
            const { data: responseData } = await axios.post(url, apiData)
            setData(responseData)
            setLoading(false)
            console.log('çıktı')
        }
        catch (err) {
            setError(err.message)
            console.log(err.message)
            setLoading(false)
            setData(null)
            
        }

    }

    return {data,loading, error, post}

}

export default usePost;
