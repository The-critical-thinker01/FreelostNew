import {createSlice} from '@reduxjs/toolkit';

export const connectionSlice = createSlice({
  name: 'userIsConnected',
  initialState: {
    userIsConnected: null,
  },
  reducers: {
    setUserIsConnected: (state, action) => {
        return {...state, userIsConnected: action.payload}
    },
  },
});

export const {setUserIsConnected} = connectionSlice.actions;
