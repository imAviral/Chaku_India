import {globalStyle} from '@global/styles.global';
import React from 'react';
import {ImageBackground} from 'react-native';

const Background = ({source, children}: any) => {
  return (
    <ImageBackground
      resizeMode="cover"
      source={source}
      style={globalStyle.imageBox}>
      {children}
    </ImageBackground>
  );
};

export default Background;
