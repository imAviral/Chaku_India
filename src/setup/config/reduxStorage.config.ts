import {Storage} from 'redux-persist';
import {MMKV} from 'react-native-mmkv';

const storage = new MMKV();

const reduxStorage: Storage = {
  setItem: async (key, value) => {
    try {
      await storage.set(key, value);
      return true;
    } catch (error) {
      console.error('Error setting item in storage:', error);
      return false;
    }
  },
  getItem: async key => {
    try {
      const value = await storage.getString(key);
      return value;
    } catch (error) {
      console.error('Error getting item from storage:', error);
      return null;
    }
  },
  removeItem: async key => {
    try {
      await storage.delete(key);
    } catch (error) {
      console.error('Error removing item from storage:', error);
    }
  },
};

export default reduxStorage;
