import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer.authorized';
import {globalColor} from '@global/colors.global';
import Footer from './Footer.authorized';

const Slide = createDrawerNavigator();

const Drawer = () => {
  return (
    <Slide.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: 'back',
        drawerActiveBackgroundColor: 'transparent',
        drawerInactiveBackgroundColor: 'transparent',
        drawerActiveTintColor: globalColor.yellow,
        drawerInactiveTintColor: globalColor.yellow,
        drawerHideStatusBarOnOpen: true,
        overlayColor: 'transparent',
        drawerStyle: {
          backgroundColor: globalColor.yellow,
          width: '60%',
        },
        sceneContainerStyle: {
          backgroundColor: globalColor.yellow,
        },
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Slide.Screen name="footer" component={Footer} />
    </Slide.Navigator>
  );
};

export default Drawer;
