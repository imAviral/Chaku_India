import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import {persistedReducer} from './reducers/root.reducer';

// Configure the Redux store
export const mainStore = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }) /* .concat(chakuApi.middleware), */,
});

// Set up Redux Toolkit listeners
setupListeners(mainStore.dispatch);

// Persist the Redux store
export const persistor = persistStore(mainStore);

// Type definitions for TypeScript
export type AppDispatch = typeof mainStore.dispatch;
export type RootState = ReturnType<typeof mainStore.getState>;
