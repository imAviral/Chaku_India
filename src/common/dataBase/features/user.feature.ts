import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  user: {},
  token: '',
};

export const userFeature = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.token =
        action?.payload?.token_type + ' ' + action?.payload?.accessToken;
      state.user = action?.payload?.user;
    },
  },
});

export const {setUser} = userFeature.actions;
export default userFeature.reducer;
