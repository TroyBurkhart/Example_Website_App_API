import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import About from '../components/about';
import Map from '../components/map';
import SearchTab from '../components/searchTab';
import ToDo from '../components/noteList';

/* eslint-disable */ // rendering unstable components
const Tab = createBottomTabNavigator();

function MainTabBar() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="About"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;

            // Customize the icon displaed based on the tab route
            if (route.name === 'About') {
              iconName = 'info-circle';
            }
            // Adding the search icon
            else if (route.name === 'Search') {
              iconName = 'search';
            } else if (route.name === 'Map') {
              iconName = 'map';
            } else if (route.name === 'ToDo') {
              iconName = 'list';
            }
            // Return the respective icon
            return <Ionicons name={iconName} size={26} color={focused ? '#58AADA' : 'grey'} />;
          },
        })}
      >
        <Tab.Screen name="About" component={About} />
        <Tab.Screen name="Search" component={SearchTab} />
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="ToDo" component={ToDo} />
        {/* if passing props line */}
        {/* <Tab.Screen name="ToDo" children={()=><ToDo/>} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );

}
export default MainTabBar;
