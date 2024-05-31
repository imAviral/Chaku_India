import reduxStorage from '@config/reduxStorage.config';
import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
/* import files */
import appFeatureReducer from '@db/features/app.feature';
import userFeatureReducer from '@db/features/user.feature';

const persistConfig = {
  key: 'root',
  storage: reduxStorage,
  version: 0.1,
  whitelist: ['appInfo', 'userInfo'], //Things you want to persist
  blacklist: [], //Things you don't want to persist
};

const rootReducer = combineReducers({
  appInfo: appFeatureReducer,
  userInfo: userFeatureReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
