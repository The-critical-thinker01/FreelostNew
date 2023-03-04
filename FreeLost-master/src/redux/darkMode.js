import {createSlice} from '@reduxjs/toolkit';
import {green} from '../constantes/constantes';

export const lightAndDarkMode = createSlice({
  name: 'lightAndDarkMode',
  initialState: {
    black_To_White: '#333',
    sblack_To_sWhite: '#444',
    white_To_black: '#fff',
    white_To_black_2: '#effe',
    green_To_white: green,
    black_to_yellow: "#454"
  },
  reducers: {
    setLightAndDarkMode: (state, action) => {
      switch (action.payload) {
        case 'DARK_MODE':
          return {
            ...state,
            black_To_White: '#eee',
            sblack_To_sWhite: '#ccc',
            white_To_black: '#333',
            green_To_white: '#eee',
            white_To_black_2: '#444',
            black_to_yellow: "yellow"
          };
        default:
          return {
            ...state,
            black_To_White: '#333',
            sblack_To_sWhite: '#444',
            white_To_black: '#fff',
            white_To_black_2: '#effe',
            green_To_white: green,
            black_to_yellow: "#454"
          };
      }
    },
  },
});

export const {setLightAndDarkMode} = lightAndDarkMode.actions;
