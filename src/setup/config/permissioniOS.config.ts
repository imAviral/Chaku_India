import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';

export const requestLocation_iOS_Permission = async () => {
  try {
    const result = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    if (result === RESULTS.GRANTED) {
      return true;
    } else if (result === RESULTS.BLOCKED) {
      console.log('Location permission denied.');
    } else {
      console.log('Location permission request failed');
    }
  } catch (error) {
    console.error(error);
  }
};
