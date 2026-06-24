import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FeedScreen from '../Screens/Feed/feed';
import SocialScreen from '../Screens/Social/social';
import CreateScreen from '../Screens/Create/create';
import ProfileScreen from '../Screens/Profile/profile';
import SettingsScreen from '../Screens/Settings/settings';

const Tab = createBottomTabNavigator();

export default function NavBar() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Feed" component={FeedScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Social" component={SocialScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Create" component={CreateScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
