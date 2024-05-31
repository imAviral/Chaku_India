import {setUser} from '@db/features/user.feature';
import Icon from '@global/Icon.global';
import {globalColor} from '@global/colors.global';
import {scaleSize} from '@global/oldSize.global';
import {useAppDispatch} from '@hook/redux.hook';
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const CustomDrawer = ({navigation}: any) => {
  const dispatch = useAppDispatch();

  const handleSignOut = () => {
    dispatch(
      setUser({
        token_type: '',
        accessToken: '',
        user: {},
      }),
    );
  };

  const handleNavigate = (routeName: any) => {
    navigation.closeDrawer();
    navigation.navigate(routeName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.menuContainer}>
        <DrawerItem
          icon="circle-user"
          iconFamily="FontAwesome6"
          label="Profile"
          onPress={() => handleNavigate('profile')}
        />
        <DrawerItem
          icon="cart-arrow-down"
          iconFamily="FontAwesome6"
          label="Bookings"
          onPress={() => handleNavigate('booking')}
        />
        <DrawerItem
          icon="sticky-note-2"
          iconFamily="MaterialIcons"
          label="Privacy Policy"
          onPress={() => handleNavigate('privacy')}
        />
        <DrawerItem
          icon="security"
          iconFamily="MaterialIcons"
          label="Security"
          onPress={() => handleNavigate('security')}
        />
        <DrawerItem
          icon="search"
          iconFamily="MaterialIcons"
          label="Search Images"
          onPress={() => handleNavigate('searchImg')}
        />
      </View>
      <TouchableOpacity style={styles.signOutContainer} onPress={handleSignOut}>
        <Text style={styles.signOutText}>Sign-out</Text>
        <Icon
          color={globalColor.white}
          name="arrow-right"
          fontFamily="FontAwesome6"
          size={scaleSize(22)}
        />
      </TouchableOpacity>
    </View>
  );
};

const DrawerItem = ({icon, iconFamily, label, onPress}: any) => (
  <TouchableOpacity
    style={styles.drawerItem}
    onPress={onPress}
    activeOpacity={0.7}>
    <Icon
      color={globalColor.white}
      name={icon}
      fontFamily={iconFamily}
      size={scaleSize(22)}
    />
    <Text style={styles.drawerItemText}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingVertical: scaleSize(90),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menuContainer: {
    marginTop: scaleSize(70),
    width: scaleSize(200),
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scaleSize(15),
    paddingBottom: scaleSize(30),
    borderBottomWidth: 0.3,
    borderBottomColor: '#F4F4F8',
    marginTop: scaleSize(25),
  },
  drawerItemText: {
    color: globalColor.white,
    textAlign: 'left',
    width: scaleSize(150),
    fontSize: scaleSize(16),
    fontFamily: 'AvenirMedium',
  },
  signOutContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: scaleSize(15),
  },
  signOutText: {
    color: globalColor.white,
    textAlign: 'left',
    width: scaleSize(80),
    fontSize: scaleSize(16),
    fontFamily: 'AvenirMedium',
  },
});

export default CustomDrawer;
