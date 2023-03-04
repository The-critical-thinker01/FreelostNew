import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../Screens/login';
import Register from '../Screens/Register';
import BottomNavigation from './bottomNavigation';
import EditProfile from '../Screens/editProfile';
import Trouver from '../Screens/findForm';
import Perdu from '../Screens/loseForm';
import Detailsojects from '../Screens/detailsOjects';
import Notification from '../Screens/notification';
import MesPublications from '../Screens/mespublication';
import Settings from '../Screens/settings';

const Stack = createStackNavigator();
const FreeLostStack = ({isThereUser, iniRoute}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={iniRoute}>
        {isThereUser ? (
          <Stack.Group>
            <Stack.Screen
              name="TabNavigator"
              component={BottomNavigation}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Edit Profile"
              component={EditProfile}
              options={{headerShown: true}}
            />
            <Stack.Screen
              name="Déclaration d'objet trouvé "
              component={Trouver}
              options={{headerShown: true}}
            />
            <Stack.Screen
              name="Déclaration de perte"
              component={Perdu}
              options={{headerShown: true}}
            />
            <Stack.Screen
              name="Details d'un Object"
              component={Detailsojects}
              options={{headerShown: true}}
            />
            <Stack.Screen
              name="Notification"
              component={Notification}
              options={{headerShown: true}}
            />
            <Stack.Screen
              name="MesPublications"
              component={MesPublications}
              options={{headerShown: true}}
            />
            <Stack.Screen
              name="Settings"
              component={Settings}
              options={{headerShown: true}}
            />
          </Stack.Group>
        ) : (
          // </Stack.Navigator>
          // <Stack.Navigator initialRouteName="Login">
          <Stack.Group>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{headerShown: false}}
            />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default FreeLostStack;
