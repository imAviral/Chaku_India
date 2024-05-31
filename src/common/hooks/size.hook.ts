import {Platform, useWindowDimensions} from 'react-native';
import DeviceInfo from 'react-native-device-info';

/*
 * @params size: number
 * @return custom size according to screen
 */

export const useCustomDimension = (size: number) => {
  const {width, height} = useWindowDimensions();
  const isTablet = DeviceInfo.isTablet();
  const platform = Platform.OS;
  let _width = width > height ? width : height;
  if (!isTablet) {
    return (size * width) / 420;
  } else if (platform === 'ios') {
    return (size * _width) / 1050;
  } else {
    return (size * _width) / 1100;
  }
};
