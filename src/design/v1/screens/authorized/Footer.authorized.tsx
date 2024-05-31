import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DrawerWrapper from './DrawerWrapper.authorized';
import CustomFooter from './CustomFooter.authorized';
import Home from './Home.authorized';

const Tab = createBottomTabNavigator();

const Footer = () => {
  return (
    <DrawerWrapper>
      <Tab.Navigator
        tabBar={props => <CustomFooter {...props} />}
        screenOptions={{headerShown: false}}>
        <Tab.Screen name="home" component={Home} />
      </Tab.Navigator>
    </DrawerWrapper>
  );
};

export default Footer;
