import Icon from '@global/Icon.global';
import {globalColor} from '@global/colors.global';
import {GLOBAL_FONT_SIZES, GLOBAL_FONT_WEIGHT} from '@global/fonts.global';
import {scaleSize} from '@global/oldSize.global';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

const CustomFooter = ({navigation}) => {
  const handleSubscriptionPress = () => {
    navigation.navigate('menu', {menuHeading: 'Subscription'});
  };

  const handlePicPress = () => {
    navigation.navigate('camera');
  };

  const handleMenuPress = () => {
    navigation.navigate('menu', {menuHeading: 'Menu'});
  };

  return (
    <View style={style.bottomRoot}>
      <Pressable
        style={[style.bottomMenu, {borderTopRightRadius: scaleSize(60)}]}
        onPress={handleSubscriptionPress}>
        <Text children={'Subscription'} style={style.bottomMenuTxt} />
      </Pressable>
      <Pressable style={style.bottomBtnBox} onPress={handlePicPress}>
        <Icon
          color={globalColor.white}
          fontFamily="FontAwesome6"
          name="camera"
          size={32}
        />
      </Pressable>
      <Pressable
        style={[style.bottomMenu, {borderTopLeftRadius: scaleSize(60)}]}
        onPress={handleMenuPress}>
        <Text children={'Menu'} style={style.bottomMenuTxt} />
      </Pressable>
    </View>
  );
};

const style = StyleSheet.create({
  bottomRoot: {
    position: 'absolute',
    backgroundColor: 'white',
    width: '100%',
    bottom: 0,
    height: scaleSize(76),
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scaleSize(18),
  },
  bottomBtnBox: {
    borderWidth: 10,
    borderColor: '#F5F5F8',
    width: 90,
    height: 90,
    borderRadius: scaleSize(100),
    bottom: 31,
    backgroundColor: globalColor.yellow,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomMenu: {
    width: scaleSize(145),
    height: scaleSize(37),
    backgroundColor: globalColor.yellow,
    borderRadius: scaleSize(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomMenuTxt: {
    textAlign: 'center',
    fontSize: GLOBAL_FONT_SIZES.size_16,
    fontWeight: GLOBAL_FONT_WEIGHT.weight_4,
    color: globalColor.white,
    fontFamily: 'AvenirHeavy',
  },
});

export default CustomFooter;
