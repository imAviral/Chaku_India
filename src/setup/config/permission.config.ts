import {Platform} from 'react-native';
import {requestLocation_iOS_Permission} from './permissioniOS.config';
import {requestLocation_Android_Permission} from './permissionAndroid.config';

export const requestLocationPermission = () => {
  const isIOS = Platform.OS === 'ios';
  let permission = isIOS
    ? requestLocation_iOS_Permission
    : requestLocation_Android_Permission;
  return permission();
};
