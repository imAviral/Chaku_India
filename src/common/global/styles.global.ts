import {StyleSheet} from 'react-native';
import {globalColor} from './colors.global';
import {scaleSize} from './oldSize.global';

export const globalStyle = StyleSheet.create({
  imageBox: {
    flex: 1,
    width: '100%',
  },
});

export const unAuth_Global_Style = StyleSheet.create({
  box: {
    width: '100%',
    height: scaleSize(367),
    flexShrink: scaleSize(0),
    borderBottomLeftRadius: scaleSize(55),
    borderBottomRightRadius: scaleSize(55),
    shadowColor: 'rgba(0,0,0,0.34901)',
    shadowRadius: scaleSize(30),
    shadowOffset: {width: scaleSize(0), height: scaleSize(30)},
  },
  mainContainer: {
    flex: 1,
    backgroundColor: globalColor.black,
  },
  miniBox: {
    flex: 0.5,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingVertical: scaleSize(40),
  },
});
