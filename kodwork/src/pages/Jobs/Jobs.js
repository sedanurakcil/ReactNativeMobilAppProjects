import React,{useEffect} from 'react'
import {View,FlatList, Alert, ActivityIndicator} from 'react-native'
import useFetch from '../../hooks/useFetch/useFetch'
import JobsCard from '../../components/JobsCard/JobsCard'


const Jobs = ({navigation})=>{

    console.log('Jobs sayfasındayım')

    const{data, loading, error, fetch} = useFetch()

    const page=1
    const url = `https://www.themuse.com/api/public/jobs?page=2`
    console.log(url)

    useEffect( ()=>{
       fetch(url)
    },[])
    
    
    if(error){
        return Alert.alert(error)
    }

    if(loading){
        return <ActivityIndicator size= 'large' color='red'/>
    }

   

    const renderJobs = ({item})=>( 
        <JobsCard   
            job= {item}
           onPress= {()=>handleJobDetail(item.id, item.name)}
        />
    )
    

    function handleJobDetail(id,name){
        navigation.navigate('JobsDetailPage', {id,name})
    }

    
    return(
        <View>
        <FlatList
         data = {data["results"]}
         renderItem= {renderJobs}
         />
        
        </View>
    )

}

export default Jobs;
