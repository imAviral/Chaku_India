import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
/* import files */
import Login from '@screen/unauthorized/Login.unauthorized';
import Onboarding from '@screen/unauthorized/Onboarding.unauthorized';
import Otp from '@screen/unauthorized/Otp.unauthorized';
import Register from '@screen/unauthorized/Register.unauthorized';
import ResetPass from '@screen/unauthorized/ResetPass.unauthorized';
import {useAppSelector} from '@hook/redux.hook';

const NStack = createNativeStackNavigator();

const UnAuth = () => {
  const {isOnBoardingComplete} = useAppSelector(state => state?.appInfo);
  const initial = isOnBoardingComplete ? 'login' : 'onboarding';
  return (
    <NStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={initial}>
      <NStack.Screen name="login" component={Login} />
      <NStack.Screen name="onboarding" component={Onboarding} />
      <NStack.Screen name="otp" component={Otp} />
      <NStack.Screen name="register" component={Register} />
      <NStack.Screen name="resetPass" component={ResetPass} />
    </NStack.Navigator>
  );
};

export default UnAuth;
