
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Jobs from '../pages/Jobs';
import JobsDetail from '../pages/JobsDetail';



const Stack = createStackNavigator();

const StackNavigator = ()=>{
  return(

      <Stack.Navigator>
          <Stack.Screen
            name="JobsPage"
            component={Jobs}
            options={{title: 'Jobs',
                     headerTintColor: '#FF5C58',
                     headerTitleAlign: 'center'}}
            />
          <Stack.Screen 
            name="JobsDetailPage"
            component={JobsDetail} 
            options={({route}) => ({
              title: route.params.name,
              headerTintColor: '#FF5C58',
            })}
            />
      </Stack.Navigator>

  )
}

export default StackNavigator;