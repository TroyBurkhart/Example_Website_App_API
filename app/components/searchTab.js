import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import VideoList from './videoList';
import VideoDetail from './videoDetail';

const Stack = createStackNavigator();

function SearchTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SearchArea"
        component={VideoList}
        options={{
          title: 'Youtube Search',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen name="Detail" component={VideoDetail} />
    </Stack.Navigator>
  );
}

export default SearchTab;
