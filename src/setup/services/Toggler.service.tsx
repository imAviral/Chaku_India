import {Appearance} from 'react-native';
import React, {useEffect} from 'react';
import {useRequestCamera} from '@hook/camera.hook';
import {requestLocationPermission} from '@config/permission.config';
import UnAuth from './UnAuth.service';
import Auth from './Auth.service';

/**
 * Toggler component
 * This component is responsible for handling initial setup tasks,
 * such as requesting camera and location permissions, registering for notifications,
 * and setting the color scheme.
 */

const Toggler = () => {
  useEffect(() => {
    handleInitialSetup();
  }, []);
  useRequestCamera();
  const handleInitialSetup = async () => {
    await requestLocationPermission();
    Appearance.setColorScheme('light');
  };
  return <Auth />;
};

export default Toggler;
