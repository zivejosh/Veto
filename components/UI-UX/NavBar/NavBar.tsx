import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FeedScreen from '../Screens/Feed/feed';
import SocialScreen from '../Screens/Social/social';
import CreateScreen from '../Screens/Create/create';
import ProfileScreen from '../Screens/Profile/profile';
import SettingsScreen from '../Screens/Settings/settings';

import { FeedIcon, SocialIcon, CreateIcon, ProfileIcon, SettingsIcon } from '../../../assets/NavBar Assets/icons';

const Tab = createBottomTabNavigator();

const VETO_BLUE = '#1C1C3A';
const VETO_ORANGE = '#FFA500';
const INACTIVE_GREY = '#808080';

export default function NavBar() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            backgroundColor: VETO_BLUE,
            borderTopColor: VETO_BLUE,
          },
          tabBarActiveTintColor: VETO_ORANGE,
          tabBarInactiveTintColor: INACTIVE_GREY,
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Feed') {
              return <FeedIcon color={color} size={size} />;
            } else if (route.name === 'Social') {
              return <SocialIcon color={color} size={size} />;
            } else if (route.name === 'Create') {
              return <CreateIcon color={color} size={size} />;
            } else if (route.name === 'Profile') {
              return <ProfileIcon color={color} size={size} />;
            } else if (route.name === 'Settings') {
              return <SettingsIcon color={color} size={size} />;
            }
          },
        })}
      >
        <Tab.Screen name="Feed" component={FeedScreen} />
        <Tab.Screen name="Social" component={SocialScreen} />
        <Tab.Screen name="Create" component={CreateScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
