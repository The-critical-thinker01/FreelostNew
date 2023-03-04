import {configureStore} from '@reduxjs/toolkit';
import { connectionSlice } from './connectionSlice';
import { lightAndDarkMode } from './darkMode';
import {userSlice} from './userSlice';

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    userIsConnected: connectionSlice.reducer,
    mode: lightAndDarkMode.reducer,
  },
});
