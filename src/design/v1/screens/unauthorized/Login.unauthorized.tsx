import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {globalStyle, unAuth_Global_Style} from '@global/styles.global';
import Background from '@component/atom/Background.atom';

const Login = () => {
  return (
    <View style={unAuth_Global_Style.mainContainer}>
      <Background source={require('../../../../assets/images/main.png')}>
        <View style={unAuth_Global_Style.box}>
          <ImageBackground
            resizeMode="cover"
            source={require('../../../../assets/images/box.png')}
            style={[globalStyle.imageBox, styles._box]}>
            <View style={unAuth_Global_Style.miniBox}>
              <Text children="asdsadsa" />
            </View>
            <View style={unAuth_Global_Style.miniBox}>
              <Text children="asdsadsa" />
            </View>
          </ImageBackground>
        </View>
        <View style={unAuth_Global_Style.overlay}>
          <Text children={'asdsadsa'} />
        </View>
      </Background>
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
  _box: {
    flexDirection: 'row',
  },
});
