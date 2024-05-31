import DeviceInfo from 'react-native-device-info';
import {Dimensions, Platform} from 'react-native';
const {width, height} = Dimensions.get('window');

/*
 * @params size:number of float or int type
 * @return number
 */

const tabletSize = (size: any) => {
  let _width = width > height ? width : height;
  _width = height;
  if (Platform.OS === 'ios') {
    return (parseInt(size) * _width) / 1050;
  }
  return (parseInt(size) * _width) / 1100;
};

/*
 * @params size:number of float or int type
 * @return number
 */

const scaleSize = (size: any) =>
  DeviceInfo.getDeviceType() === 'Tablet'
    ? tabletSize(size)
    : (parseInt(size) * width) / 420;

export {scaleSize};
