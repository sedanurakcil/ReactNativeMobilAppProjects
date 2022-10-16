import React from 'react';
import {FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import JobsCard from '../../components/JobsCard';
import styles from './Favorites.style';
import Button from '../../components/Button';

const Favorites = ({navigation})=>{
    const job = useSelector(state => state.favouriteJob);
    const dispatch = useDispatch()

     const handleJobsDetail = (id, name) => {
        navigation.navigate('JobsDetail', {id, name});
      };

      const removeJobs = item => {
        dispatch({type: 'REMOVE_FAVOURITE', payload: {job: item}});
      };

    const renderFavouriteJobs=({item})=>(

        <View style={styles.inner_container}>
            <JobsCard
                job={item}
                onPress={() => handleJobsDetail(item.id, item.name)}
            />

        <View style={styles.button_container}>
                <Button
                    icon="delete"
                    text="Remove Job"
                    onPress={() => removeJobs(item)}
        />
      </View>
    </View>
    )

    return(
         <FlatList
            data={job}
            renderItem={renderFavouriteJobs}
            style={styles.container}
    />
    )

}

export default Favorites;