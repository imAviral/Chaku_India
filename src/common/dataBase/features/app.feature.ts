import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  deviceToken: '',
  isOnBoardingComplete: false,
  latitude: 0,
  longitude: 0,
};

export const appFeature = createSlice({
  name: 'app',
  initialState,
  reducers: {
    completeOnBoarding: (state, action: PayloadAction<boolean>) => {
      state.isOnBoardingComplete = action.payload;
    },
    setDeviceToken: (state, action: PayloadAction<string>) => {
      state.deviceToken = action.payload;
    },
    setLocationCoords: (state, action: PayloadAction<any>) => {
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
    },
  },
});

export const {completeOnBoarding, setDeviceToken, setLocationCoords} =
  appFeature.actions;
export default appFeature.reducer;
