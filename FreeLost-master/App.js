/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component, useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {Provider, useDispatch, useSelector} from 'react-redux';
import FreeLostStack from './src/navigation/stackNavigator';
import {store} from './src/redux/redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setUserIsConnected} from './src/redux/connectionSlice';
import {setLightAndDarkMode} from './src/redux/darkMode';
import { addUserToReduxStore } from './src/redux/userSlice';

const App = () => {
  return (
    <Provider store={store}>
      <Ab />
    </Provider>
  );
};

function Ab() {
  const dispatch = useDispatch();
  const [iniRoute, setIniRoute] = useState('TabNavigator');
  const isUserConnected_ = useSelector(
    () => store.getState().userIsConnected.userIsConnected,
  );

  const getUser = async () => {
    try {
      const value = await AsyncStorage.getItem('user');
      if (value) {
        dispatch(setUserIsConnected(true));
        dispatch(addUserToReduxStore(JSON.parse(value)));
        setIniRoute('TabNavigator');
      } else {
        dispatch(setUserIsConnected(false));
        setIniRoute('Login');
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getMode = async () => {
    try {
      const mode = await AsyncStorage.getItem('change_mode');
      if ('DARK_MODE' == JSON.parse(mode)) {
        dispatch(setLightAndDarkMode('DARK_MODE'));
      }
      if ('LIGTH_MODE' == JSON.parse(mode) || !mode) {
        dispatch(setLightAndDarkMode('LIGTH_MODE'));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
    getMode();
    return () => {
      console.log('Starting the application');
    };
  }, []);

  return (
    <>
      <FreeLostStack isThereUser={isUserConnected_} iniRoute={iniRoute} />
    </>
  );
}

const styles = StyleSheet.create({});

export default App;
