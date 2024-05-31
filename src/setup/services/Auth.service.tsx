import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
/* import files */
import Booking from '@screen/authorized/Booking.authorized';
import CameraShot from '@screen/authorized/CameraShot.authorized';
import Cart from '@screen/authorized/Cart.authorized';
import Checkout from '@screen/authorized/Checkout.authorized';
import Drawer from '@screen/authorized/Drawer.authorized';
import Home from '@screen/authorized/Home.authorized';
import ItemDetail from '@screen/authorized/ItemDetail.authorized';
import Map from '@screen/authorized/Map.authorized';
import Menu from '@screen/authorized/Menu.authorized';
import MenuItem from '@screen/authorized/MenuItem.authorized';
import OrderStatus from '@screen/authorized/OrderStatus.authorized';
import Privacy from '@screen/authorized/Privacy.authorized';
import Profile from '@screen/authorized/Profile.authorized';
import SearchItem from '@screen/authorized/SearchItem.authorized';
import Security from '@screen/authorized/Security.authorized';

const NStack = createNativeStackNavigator();

const Auth = () => {
  return (
    <NStack.Navigator
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}
      initialRouteName="drawer">
      <NStack.Screen name="booking" component={Booking} />
      <NStack.Screen name="camera" component={CameraShot} />
      <NStack.Screen name="cart" component={Cart} />
      <NStack.Screen name="checkout" component={Checkout} />
      <NStack.Screen name="drawer" component={Drawer} />
      <NStack.Screen name="home" component={Home} />
      <NStack.Screen name="itemDetail" component={ItemDetail} />
      <NStack.Screen name="map" component={Map} />
      <NStack.Screen name="menu" component={Menu} />
      <NStack.Screen name="menuItem" component={MenuItem} />
      <NStack.Screen name="order" component={OrderStatus} />
      <NStack.Screen name="privacy" component={Privacy} />
      <NStack.Screen name="profile" component={Profile} />
      <NStack.Screen name="searchImg" component={SearchItem} />
      <NStack.Screen name="security" component={Security} />
    </NStack.Navigator>
  );
};

export default Auth;
