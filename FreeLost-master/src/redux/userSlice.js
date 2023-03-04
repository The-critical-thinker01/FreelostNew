import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    addUserToReduxStore: (state, action) => {
      console.log("ajout dans le store")
      // state.user = action.payload
      return {...state, user: action.payload}
    },
  },
});

export const {addUserToReduxStore} = userSlice.actions;
