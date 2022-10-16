import {useState} from  'react'
import axios from 'axios';


function useFetch(){
    console.log('usefetch sayfasındayım')

    const [data, setData] = useState([])
    const [loading, setLoading]= useState(false)
    const [error, setError] = useState(null)


    async function fetch(url) {
        try {
            
            console.log('istek')
            setLoading(true)
            const { data: responseData } = await axios.get(url)
            setData(responseData)
            setLoading(false)
            console.log('çıktı')
            console.log(responseData)
        }
        catch (err) {
            setError(err.message)
            console.log(err.message)
            
        }
        finally {
            setLoading(false);
          }

    }

    return {data,loading, error, fetch}

}

export default useFetch;


