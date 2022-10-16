import React,{useEffect} from 'react'
import {View, Text, ActivityIndicator, Alert,Dimensions,ScrollView} from 'react-native'
import useFetch from '../../hooks/useFetch'
import styles from './JobsDetail.style'
import Button from '../../components/Button'
import RenderHtml from 'react-native-render-html';
import {useDispatch} from 'react-redux';

const JobsDetail = ({route})=>{

    const {id} = route.params
    const {data,loading, error,fetch} = useFetch()
    const dispatch = useDispatch();
    
    const url = `https://www.themuse.com/api/public/jobs/${id}`

    // content içeriği html olduğu için 
    const source = {
        html: `${data.contents}`,
      };
    
    // sayfa yüklendiği anda tıklanılan işe dair datayı alacağım.
    useEffect( ()=>{
        fetch(url)
    },[]
        )
    
    const handleSubmit= () => {
        Alert.alert('Başvuru başarılı!');
          };
    
    const handleFavouriteJob = favouriteJob => {
            console.log(`favourite job ${favouriteJob}`)
            dispatch({type: 'ADD_FAVOURITE', payload: {favouriteJob}});
          };
        
    if(error){
            return Alert.alert(error)
    }
    
    if(loading){
            return <ActivityIndicator size= 'large' color='red'/>
    }
    
    return(
        <ScrollView style={styles.container}>
            <View style = {styles.headerBody}>

                <Text style = {styles.title}>{data.name}</Text>

                <View style={styles.         upper_location_container}>
                    <Text style={styles.locations_left}>Locations : </Text>
                    <Text style={styles.locations_right}>
                         {data.locations && data.locations.length > 0
                         ? data.locations[0].name
                        : 'Unknown Location'}
                   </Text>
                </View>

                <View style={styles.upper_job_container}>
                        <Text style={styles.job_left}>Job Level : </Text>
                        <Text style={styles.job_right}>
                        {data.levels && data.levels.length > 0
                            ? data.levels[0].name
                            : 'Unknown Level'}
                        </Text>
                </View>

                <Text style = {styles.detail_title}> Job Detail</Text>

            </View>
            <View style ={styles.content_body}>
                <RenderHtml
                    baseStyle={styles.info_container_text}
                    contentWidth={Dimensions.get('window').width}
                    source={source}
                />

            </View>

            <View style = {styles.button_body}>
            <Button 
                icon= "send"
                text='Submit' 
                onPress={handleSubmit}/>
            <Button
                icon="heart"
                text='Favorite Job' 
                onPress={() => handleFavouriteJob(data)}/>

            </View>


        </ScrollView>
    )

}

export default JobsDetail;
