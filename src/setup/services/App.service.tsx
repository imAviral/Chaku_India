import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Toggler from './Toggler.service';
import {mainStore, persistor} from '@db/mainStore.db';

/**
 * App component
 * This is the root component of the application.
 * It sets up the Redux store, navigation, and persistence.
 */

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={mainStore}>
        <PersistGate persistor={persistor} loading={null}>
          <Toggler />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
