import {useCameraPermission} from 'react-native-vision-camera';

export const useRequestCamera = () => {
  const {hasPermission, requestPermission} = useCameraPermission();
  if (!hasPermission) {
    return requestPermission();
  } else {
    return hasPermission;
  }
};
