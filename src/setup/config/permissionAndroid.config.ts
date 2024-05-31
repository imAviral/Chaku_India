import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';

export const requestLocation_Android_Permission = async () => {
  try {
    const result = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    if (result === RESULTS.GRANTED) {
      console.log('Location permission granted');
    } else if (result === RESULTS.DENIED) {
      console.log('Location permission denied');
      // Re-ask for permission if denied
      const retakeResult = await request(
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      );
      if (retakeResult === RESULTS.GRANTED) {
        console.log('Location permission granted after re-asking');
      } else {
        console.log('Location permission denied after re-asking');
      }
    } else {
      console.log('Location permission request failed');
    }
  } catch (error) {
    console.error(error);
  }
};
