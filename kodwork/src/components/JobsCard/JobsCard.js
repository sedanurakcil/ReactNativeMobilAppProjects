import { View,Text,TouchableWithoutFeedback } from 'react-native'
import React from 'react'
 import styles from './Jobscard.style'


const JobsCard =({job, onPress})=>{
    return(
        <TouchableWithoutFeedback onPressIn={onPress}>
        <View style = {styles.container}>

            <Text style= {styles.title}>{job.name}</Text>
            <Text style = {styles.company}>{job.company.name}</Text>

            <View style = {styles.city_body}>

                <Text style = {styles.city}>
                        {job.locations && job.locations.length > 0
                        ? job.locations[0].name
                        : 'Unknown Location'}
                </Text>
            </View>

            <Text style = {styles.level}>
                  {job.levels && job.levels.length > 0 
                  ? job.levels[0].name
                  : 'Unknown Level'}
             </Text>

        </View>
        </TouchableWithoutFeedback>
    )
}

export default JobsCard;